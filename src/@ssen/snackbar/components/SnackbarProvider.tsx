import React, {
  cloneElement,
  Consumer,
  Context,
  createContext,
  ReactElement,
  ReactNode,
  RefObject,
  useCallback,
  useContext,
  useMemo,
  useRef,
  useState,
} from 'react';
import { createPortal } from 'react-dom';
import { MultiTimer } from './MultiTimer';
import { SnackbarProps } from './Snackbar';

export interface SnackbarProviderProps {
  interval?: number;
  children:
    | ReactNode
    | ((props: { snackbarContainer: RefObject<HTMLDivElement> }) => ReactNode);
}

export interface SnackbarState {
  snackbarContainer: RefObject<HTMLDivElement>;
  addSnackbar: (element: ReactElement<SnackbarProps>) => () => void;
}

// @ts-ignore
const SnackbarContext: Context<SnackbarState> = createContext<SnackbarState>();

let count: number = 0;

export function SnackbarProvider({
  children,
  interval = 100,
}: SnackbarProviderProps) {
  const [timer] = useState<MultiTimer>(() => new MultiTimer(interval));

  const [contents, setContents] = useState<ReactElement<SnackbarProps>[]>([]);

  const snackbarContainer: RefObject<HTMLDivElement> = useRef<HTMLDivElement>(
    null,
  );

  const addSnackbar = useCallback(
    (element: ReactElement<SnackbarProps>) => {
      const primaryId: number = count++;

      const close = () => {
        setContents((prevContents) => {
          const index = prevContents.findIndex(
            ({ props }) => props.primaryId === primaryId,
          );

          if (index > -1) {
            const nextContents = [...prevContents];
            nextContents.splice(index, 1);
            return nextContents;
          }

          return prevContents;
        });
      };

      const content = cloneElement(element, {
        key: primaryId,
        primaryId,
        close,
        timer,
      });

      setContents((prevContents) => {
        return [...prevContents, content];
      });

      return close;
    },
    [timer],
  );

  const state = useMemo<SnackbarState>(() => {
    return {
      snackbarContainer,
      addSnackbar,
    };
  }, [snackbarContainer, addSnackbar]);

  return (
    <SnackbarContext.Provider value={state}>
      {typeof children === 'function'
        ? children({ snackbarContainer })
        : children}
      {contents.length > 0 &&
        snackbarContainer.current &&
        createPortal(contents, snackbarContainer.current)}
    </SnackbarContext.Provider>
  );
}

export function useSnackbar(): SnackbarState {
  return useContext(SnackbarContext);
}

export const SnackbarConsumer: Consumer<SnackbarState> =
  SnackbarContext.Consumer;

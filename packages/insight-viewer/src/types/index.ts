import { Dispatch, SetStateAction } from 'react'
import { LOADING_STATE, LOADER_TYPE, IMAGE_TYPE } from '../const'

export type WithChildren<T = Record<string, unknown>> = T & {
  children?: React.ReactNode
}
export type Element = HTMLDivElement | null
export type ViewerError = Error & { status?: number }
export type OnError = (e: ViewerError) => void
export type ProgressComponent = ({
  progress,
}: {
  progress: number
}) => JSX.Element
export type RequestInterceptor = (request: Request) => void
export interface BasicViewport {
  scale: number
  invert: boolean
  hflip: boolean
  vflip: boolean
  x: number
  y: number
  windowWidth: number
  windowCenter: number
}
export type Viewport = BasicViewport & {
  _default?: Partial<BasicViewport>
  _reset?: Partial<BasicViewport>
}

export interface HTTP {
  onError: OnError
  requestInterceptor: RequestInterceptor
}

export type OnViewportChange = Dispatch<SetStateAction<Viewport>>
export type LoadingState = typeof LOADING_STATE[keyof typeof LOADING_STATE]
export type LoaderType = typeof LOADER_TYPE[keyof typeof LOADER_TYPE]
export type ImageId =
  | {
      [IMAGE_TYPE.WADO]: string | string[]
      [IMAGE_TYPE.DICOMFILE]?: never
      [IMAGE_TYPE.WEB]?: never
    }
  | {
      [IMAGE_TYPE.WADO]?: never
      [IMAGE_TYPE.DICOMFILE]: string | string[]
      [IMAGE_TYPE.WEB]?: never
    }
  | {
      [IMAGE_TYPE.WADO]?: never
      [IMAGE_TYPE.DICOMFILE]?: never
      [IMAGE_TYPE.WEB]: string | string[]
    }

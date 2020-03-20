import {
  ContourDrawer,
  ContourViewer,
  CornerstoneImage,
  CornerstoneSingleImage,
  InsightViewer,
  InsightViewerContainer,
  installWADOImageLoader,
  unloadImage,
  useContour,
  useInsightViewerSync,
} from '@lunit/insight-viewer';
import React, { useMemo, useState } from 'react';
import styled from 'styled-components';
import { initialContours } from '../../../__fixtures__/contour';

installWADOImageLoader();

const width: number = 400;
const height: number = 500;

export default () => {
  const image: CornerstoneImage = useMemo(
    () =>
      new CornerstoneSingleImage(`wadouri:https://lunit-io.github.io/frontend-fixtures/dcm-files/series/CT000010.dcm`, {
        unload: unloadImage,
      }),
    [],
  );

  const [divElement, setDivElement] = useState<HTMLDivElement | null>(null);

  const { cornerstoneRenderData, updateCornerstoneRenderData } = useInsightViewerSync();

  const { contours, focusedContour, addContour, removeContour, focusContour } = useContour({
    mode: 'contour',
    initialContours,
  });

  return (
    <div style={{ display: 'flex' }}>
      <InsightViewerContainer ref={setDivElement} width={width} height={height}>
        <InsightViewer
          width={width}
          height={height}
          invert={false}
          flip={false}
          pan={false}
          adjust={false}
          zoom={false}
          resetTime={0}
          image={image}
          updateCornerstoneRenderData={updateCornerstoneRenderData}
        />
        {contours && contours.length > 0 && cornerstoneRenderData && (
          <ContourViewer
            width={width}
            height={height}
            contours={contours}
            focusedContour={focusedContour}
            cornerstoneRenderData={cornerstoneRenderData}
          />
        )}
        {contours && cornerstoneRenderData && (
          <ContourDrawer
            width={width}
            height={height}
            contours={contours}
            draw={divElement}
            onFocus={focusContour}
            onAdd={contour => addContour(contour)}
            onRemove={removeContour}
            cornerstoneRenderData={cornerstoneRenderData}
          />
        )}
      </InsightViewerContainer>

      <ul>
        {contours.map(contour => (
          <Item
            key={contour.id}
            focused={focusedContour === contour}
            onMouseEnter={() => focusContour(contour)}
            onMouseLeave={() => focusContour(null)}
            onClick={() => removeContour(contour)}
          >
            {typeof contour.label === 'function' ? contour.label(contour) : contour.label || contour.id.toString()}
          </Item>
        ))}
      </ul>
    </div>
  );
};

const Item = styled.li<{ focused: boolean }>`
  display: block;
  width: 200px;
  height: 30px;
  background-color: ${({ focused }) => (focused ? 'skyblue' : 'lightgray')};
  cursor: pointer;
  user-select: none;
`;

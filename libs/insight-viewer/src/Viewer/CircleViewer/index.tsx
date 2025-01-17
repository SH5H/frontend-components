import React, { ReactElement } from 'react'
import useCircleMeasurement from '../../hooks/useCircleMeasurement'

import { textStyle, svgWrapperStyle } from '../Viewer.styles'
import type { CircleViewerProps } from './CircleViewer.types'

export function CircleViewer({ measurement, hoveredMeasurement }: CircleViewerProps): ReactElement {
  const { centerPointOnCanvas, formattedValue, ref, drawingRadius, textBoxPoint, connectingLine, visibility } =
    useCircleMeasurement(measurement)
  const isHoveredMeasurement = measurement === hoveredMeasurement || undefined

  return (
    <>
      <circle
        className="measurement-circle pointer"
        style={{
          ...svgWrapperStyle[isHoveredMeasurement ? 'hoveredOutline' : 'outline'],
        }}
        data-focus={isHoveredMeasurement}
        cx={centerPointOnCanvas[0]}
        cy={centerPointOnCanvas[1]}
        r={drawingRadius}
      />
      <circle
        className="measurement-circle pointer"
        style={{
          ...svgWrapperStyle.extendsArea,
        }}
        data-focus={isHoveredMeasurement}
        cx={centerPointOnCanvas[0]}
        cy={centerPointOnCanvas[1]}
        r={drawingRadius}
      />
      <circle
        className="measurement-circle pointer"
        style={{
          ...svgWrapperStyle.default,
        }}
        data-focus={isHoveredMeasurement}
        cx={centerPointOnCanvas[0]}
        cy={centerPointOnCanvas[1]}
        r={drawingRadius}
      />
      <polyline style={{ ...svgWrapperStyle.dashLine, visibility }} points={connectingLine} />
      className="measurement-circle dashLine"
      <text
        ref={ref}
        style={{
          ...textStyle[isHoveredMeasurement ? 'hover' : 'default'],
          visibility,
        }}
        x={textBoxPoint[0]}
        y={textBoxPoint[1]}
        className="measurement-circle label pointer"
      >
        {formattedValue}
      </text>
    </>
  )
}

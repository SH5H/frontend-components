import React, { ReactElement } from 'react'

import { circleStyle } from './CircleViewer.styles'
import { textStyle, polylineStyle } from '../MeasurementViewer/MeasurementViewer.styles'

import { useOverlayContext } from '../../contexts'

import { calculateCircleArea } from '../../utils/common/calculateCircleArea'
import { getCircleRadius } from '../../utils/common/getCircleRadius'
import { getCircleEndPoint } from '../../utils/common/getCircleEndPoint'
import { getCircleConnectingLine } from '../../utils/common/getCircleConnectingLine'
import { getCircleTextPosition } from '../../utils/common/getCircleTextPosition'

import type { CircleViewerProps } from './CircleViewer.types'

export function CircleViewer({ measurement, hoveredMeasurement }: CircleViewerProps): ReactElement {
  const { pixelToCanvas } = useOverlayContext()

  const { centerPoint, radius, measuredValue, unit } = measurement

  const endPoint = getCircleEndPoint(centerPoint, radius)

  const [centerPointOnCanvas, endPointOnCanvas] = [centerPoint, endPoint].map(pixelToCanvas)

  const drawingRadius = getCircleRadius(centerPointOnCanvas, endPointOnCanvas)

  const textPoint = measurement.textPoint
    ? pixelToCanvas(measurement.textPoint)
    : getCircleTextPosition(centerPointOnCanvas, drawingRadius)

  const connectingLine = getCircleConnectingLine([centerPointOnCanvas, endPointOnCanvas], textPoint)
    .map((point) => `${point[0]}, ${point[1]}`)
    .join(' ')

  const area = calculateCircleArea(measuredValue)

  const isHoveredMeasurement = measurement === hoveredMeasurement

  return (
    <>
      <circle
        style={{
          ...circleStyle[isHoveredMeasurement ? 'hoveredOutline' : 'outline'],
        }}
        data-focus={isHoveredMeasurement || undefined}
        cx={centerPointOnCanvas[0]}
        cy={centerPointOnCanvas[1]}
        r={drawingRadius}
      />
      <circle
        style={{
          ...circleStyle.default,
        }}
        data-focus={isHoveredMeasurement || undefined}
        cx={centerPointOnCanvas[0]}
        cy={centerPointOnCanvas[1]}
        r={drawingRadius}
      />
      <text style={{ ...textStyle[isHoveredMeasurement ? 'hover' : 'default'] }} x={textPoint[0]} y={textPoint[1]}>
        {`Area = ${area.toLocaleString(undefined, {
          minimumFractionDigits: 1,
          maximumFractionDigits: 1,
        })}${unit}2`}
      </text>
      <polyline style={polylineStyle.dashLine} points={connectingLine} />
    </>
  )
}

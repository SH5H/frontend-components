import { Point, MeasurementMode } from '../../../types'

export function getMeasurementDrawingPoints(
  prevPoints: [Point, Point],
  currentPoint: Point,
  mode: MeasurementMode
): [Point, Point] {
  if (mode === 'ruler' || mode === 'area') {
    return [prevPoints[0], currentPoint]
  }

  return prevPoints
}

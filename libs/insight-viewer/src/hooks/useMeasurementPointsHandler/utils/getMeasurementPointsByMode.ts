import { getCircleRadiusByCenter } from '../../../utils/common/getCircleRadius'
import { getCircleStartPoint } from './getCircleStartPoint'

import type { EditMode, Point, MeasurementMode } from '../../../types'

export function getMeasurementPointsByMode(
  isEditing: boolean,
  editMode: EditMode | null,
  drawingMode: MeasurementMode,
  mouseDownPoint: Point | null,
  mouseMovePoint: Point,
  prevPoints: [centerPoint: Point, endPoint: Point]
): [Point, Point] {
  let currentPoints = prevPoints

  /**
   * Except for editing move is move or text move,
   * edit works the same as drawing.
   */
  if (drawingMode === 'area' && mouseDownPoint !== null) {
    currentPoints = [mouseDownPoint, mouseMovePoint]
  }

  if (drawingMode === 'area' && isEditing && (editMode === 'move' || editMode === 'textMove')) {
    const [currentCenterPoint, currentEndPoint] = prevPoints
    const radius = getCircleRadiusByCenter(currentCenterPoint, currentEndPoint)
    const currentStartPoint = getCircleStartPoint(currentCenterPoint, radius)

    currentPoints = [currentStartPoint, currentEndPoint]
  }

  return currentPoints
}

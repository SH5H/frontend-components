import { SetStateAction, Dispatch } from 'react'
import { Point, EditMode, MeasurementMode } from '../../types'
import { getMovedPoints } from './getMovedPoints'

export function getMeasurementEditingPoints(
  prevPoints: Point[],
  currentPoint: Point,
  editPoint: Point,
  editMode: EditMode,
  mode: MeasurementMode,
  setEditPoint: Dispatch<SetStateAction<Point | null>>
): Point[] {
  if (mode === 'ruler' && editMode === 'startPoint') {
    return [currentPoint, prevPoints[1]]
  }

  if (mode === 'ruler' && editMode === 'endPoint') {
    return [prevPoints[0], currentPoint]
  }

  if (mode === 'circle' && (editMode === 'startPoint' || editMode === 'endPoint')) {
    return [prevPoints[0], currentPoint]
  }

  if ((mode === 'circle' || mode === 'ruler') && editMode === 'move') {
    const movedPoint = getMovedPoints({ prevPoints, editStartPoint: editPoint, currentPoint })
    setEditPoint(currentPoint)

    return movedPoint
  }

  return prevPoints
}

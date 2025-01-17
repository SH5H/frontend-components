import { SVGProps } from 'react'
import {
  Annotation,
  PolygonAnnotation,
  FreeLineAnnotation,
  LineAnnotation,
  ArrowLineAnnotation,
  Point,
} from '../../types'
import { getArrowPosition } from './getArrowPosition'

export interface GetPolyViewerInfoProps {
  annotation: PolygonAnnotation | LineAnnotation | FreeLineAnnotation | ArrowLineAnnotation
  hoveredAnnotation: Annotation | null
  showOutline: boolean
  pixelToCanvas: (point: Point) => Point
  annotationAttrs?: (annotation: Annotation, showOutline: boolean) => SVGProps<SVGPolygonElement>
}

interface getPolyViewerInfoReturnType {
  isHoveredAnnotation: boolean
  polygonAttributes: SVGProps<SVGPolygonElement> | undefined
  labelPosition: Point | undefined
  polygonPoints: string
  headPoints: string | null
  polygonLabel: string | number
}

export function getPolyViewerInfo({
  annotation,
  showOutline,
  hoveredAnnotation,
  annotationAttrs,
  pixelToCanvas,
}: GetPolyViewerInfoProps): getPolyViewerInfoReturnType {
  const { label, id, labelPosition: _labelPosition, points } = annotation

  const isHoveredAnnotation = annotation === hoveredAnnotation
  const polygonLabel = label ?? id

  const polygonAttributes = typeof annotationAttrs === 'function' ? annotationAttrs(annotation, showOutline) : undefined
  const labelPosition = _labelPosition ? pixelToCanvas(_labelPosition) : undefined

  const canvasPoints = points.map(pixelToCanvas)

  const polygonPoints: string = points
    .map((point) => {
      const [x, y] = pixelToCanvas(point)
      return `${x},${y}`
    })
    .join(' ')

  const isArrowLine = (annotation.type === 'line' && annotation.hasArrowHead) || annotation.type === 'arrowLine'

  const headPoints: string | null = isArrowLine
    ? getArrowPosition(canvasPoints)
        .map((point) => {
          const [x, y] = point
          return `${x},${y}`
        })
        .join()
    : null

  return {
    isHoveredAnnotation,
    polygonAttributes,
    labelPosition,
    headPoints,
    polygonPoints,
    polygonLabel,
  }
}

import React, { useRef } from 'react'
import { useOverlayContext } from '../../contexts'
import { svgRootStyle } from '../Viewer.styles'
import { AnnotationsDrawProps, AnnotationViewerProps } from './AnnotationViewer.types'
import { LineViewer } from '../LineViewer'
import { PolygonViewer } from '../PolygonViewer'
import { TextViewer } from '../TextViewer'

const annotationStyle: React.CSSProperties = {
  pointerEvents: 'auto',
}
function AnnotationsDraw({
  annotations,
  showOutline,
  showAnnotationLabel,
  hoveredAnnotation,
  annotationAttrs,
  onFocus,
  onClick,
}: AnnotationsDrawProps) {
  return annotations.map((annotation) => {
    const viewerProps = {
      showOutline,
      hoveredAnnotation,
      showAnnotationLabel,
      annotationAttrs,
    }

    const handleAnnotationClick = () => {
      if (!onClick) return

      if (onFocus) {
        onFocus(null)
      }

      onClick(annotation)
    }

    const handleAnnotationFocus = () => {
      if (!onFocus) return
      onFocus(annotation)
    }

    const handleAnnotationFocusOut = () => {
      if (!onFocus) return
      onFocus(null)
    }

    return (
      <g
        data-cy-id={annotation.id}
        key={annotation.id}
        onClick={handleAnnotationClick}
        onMouseOver={handleAnnotationFocus}
        onMouseLeave={handleAnnotationFocusOut}
        style={annotationStyle}
      >
        {annotation.type === 'polygon' && <PolygonViewer annotation={annotation} {...viewerProps} />}
        {(annotation.type === 'freeLine' || annotation.type === 'line' || annotation.type === 'arrowLine') && (
          <LineViewer annotation={annotation} {...viewerProps} />
        )}
        {annotation.type === 'text' && <TextViewer annotation={annotation} {...viewerProps} />}
      </g>
    )
  })
}

export function AnnotationViewer({
  style,
  width,
  height,
  annotations,
  className,
  hoveredAnnotation,
  selectedAnnotation,
  showOutline = true,
  showAnnotationLabel = false,
  annotationAttrs,
  onFocus,
  onClick,
}: AnnotationViewerProps): JSX.Element {
  const svgRef = useRef<SVGSVGElement>(null)
  const { enabledElement } = useOverlayContext()

  const annotationsOfViewer = selectedAnnotation
    ? annotations.filter((annotation) => annotation.id !== selectedAnnotation.id)
    : annotations

  return (
    <svg
      ref={svgRef}
      width={width}
      height={height}
      style={{ ...svgRootStyle.default, pointerEvents: 'none', ...style }}
      className={className}
    >
      {annotationsOfViewer.length === 0 || !enabledElement
        ? null
        : AnnotationsDraw({
            annotations: annotationsOfViewer,
            hoveredAnnotation,
            showOutline,
            showAnnotationLabel,
            annotationAttrs,
            onFocus,
            onClick,
          })}
    </svg>
  )
}

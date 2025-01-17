import React, { useRef } from 'react'

import { RulerDrawer } from '../RulerDrawer'
import { CircleDrawer } from '../CircleDrawer'
import { EditPointer } from '../../components/EditPointer'
import { svgRootStyle } from '../Viewer.styles'
import useMeasurementPointsHandler from '../../hooks/useMeasurementPointsHandler'

import type { MeasurementDrawerProps } from './MeasurementDrawer.types'

export function MeasurementDrawer({
  style,
  width,
  height,
  isDrawing = true,
  isEditing = false,
  measurements,
  selectedMeasurement,
  hoveredMeasurement,
  className,
  mode = 'ruler',
  onAdd,
  onSelectMeasurement,
}: MeasurementDrawerProps): JSX.Element | null {
  const svgRef = useRef<SVGSVGElement>(null)

  const { editPoints, measurement, currentEditMode, setMeasurementEditMode, cursorStatus } =
    useMeasurementPointsHandler({
      mode,
      isDrawing,
      isEditing,
      measurements,
      svgElement: svgRef,
      selectedMeasurement,
      onSelectMeasurement,
      hoveredMeasurement,
      addMeasurement: onAdd,
    })

  const isSelectedMeasurement = isEditing && selectedMeasurement != null

  if (!measurement || (measurement && measurement.measuredValue === 0)) return null

  return (
    <svg ref={svgRef} width={width} height={height} style={{ ...svgRootStyle.default, ...style }} className={className}>
      {measurement.type === 'ruler' && (
        <RulerDrawer
          isSelectedMode={isSelectedMeasurement}
          measurement={measurement}
          setMeasurementEditMode={setMeasurementEditMode}
          cursorStatus={cursorStatus}
        />
      )}
      {measurement.type === 'area' && (
        <CircleDrawer
          isSelectedMode={isSelectedMeasurement}
          measurement={measurement}
          setMeasurementEditMode={setMeasurementEditMode}
          cursorStatus={cursorStatus}
        />
      )}
      {editPoints && (
        <>
          <EditPointer
            setEditMode={setMeasurementEditMode}
            editMode="startPoint"
            isSelectedMode={currentEditMode === 'startPoint'}
            isHighlightMode={isSelectedMeasurement}
            editPoint={editPoints[0]}
            cursorStatus={cursorStatus}
          />
          <EditPointer
            setEditMode={setMeasurementEditMode}
            editMode="endPoint"
            isSelectedMode={currentEditMode === 'endPoint'}
            isHighlightMode={isSelectedMeasurement}
            editPoint={editPoints[1]}
            cursorStatus={cursorStatus}
          />
        </>
      )}
    </svg>
  )
}

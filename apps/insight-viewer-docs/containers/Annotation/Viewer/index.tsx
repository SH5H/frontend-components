import { useRef, useState, ChangeEvent } from 'react'
import { Box, Switch, Radio, RadioGroup, Stack } from '@chakra-ui/react'
import { Resizable } from 're-resizable'
import InsightViewer, {
  useAnnotation,
  useImage,
  AnnotationOverlay,
  AnnotationMode,
  Annotation,
} from '@lunit/insight-viewer'
import { useViewport } from '@lunit/insight-viewer/viewport'
import {
  IMAGES,
  POLYGON_ANNOTATIONS,
  LINE_ANNOTATIONS,
  FREELINE_ANNOTATIONS,
  TEXT_ANNOTATIONS,
  ARROW_LINE_ANNOTATIONS,
} from '@insight-viewer-library/fixtures'

export type InitialAnnotations = {
  [mode in AnnotationMode]: Annotation[]
}

const INITIAL_ANNOTATIONS: InitialAnnotations = {
  line: LINE_ANNOTATIONS,
  freeLine: FREELINE_ANNOTATIONS,
  polygon: POLYGON_ANNOTATIONS,
  text: TEXT_ANNOTATIONS,
  arrowLine: ARROW_LINE_ANNOTATIONS,
  // TODO: Changed the mock data when adding Circle mode
  circle: POLYGON_ANNOTATIONS,
}

const style = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
} as const

/** Mock svg Size */
const DEFAULT_SIZE = { width: 700, height: 700 }

function AnnotationViewerContainer(): JSX.Element {
  const viewerRef = useRef<HTMLDivElement>(null)

  const [annotationMode, setAnnotationMode] = useState<AnnotationMode>('polygon')
  const [isShowLabel, setIsShowLabel] = useState(false)
  const { loadingState, image } = useImage({
    wadouri: IMAGES[11],
  })
  const { viewport, setViewport } = useViewport({
    image,
    element: viewerRef.current,
  })
  const { annotations, hoveredAnnotation, selectedAnnotation, selectAnnotation } = useAnnotation({
    initialAnnotation: INITIAL_ANNOTATIONS[annotationMode],
  })

  const handleShowLabelModeChange = (event: ChangeEvent<HTMLInputElement>) => {
    setIsShowLabel(event.target.checked)
  }

  const handleAnnotationModeChange = (mode: AnnotationMode) => {
    setAnnotationMode(mode)
  }

  return (
    <Box data-cy-loaded={loadingState}>
      <Box>
        show label{' '}
        <Switch data-cy-show-label={isShowLabel} onChange={handleShowLabelModeChange} isChecked={isShowLabel} />
      </Box>
      <RadioGroup onChange={handleAnnotationModeChange} value={annotationMode}>
        <Stack direction="row">
          <p style={{ marginRight: '10px' }}>Select Head mode</p>
          <Radio value="polygon">Polygon</Radio>
          <Radio value="line">Line</Radio>
          <Radio value="arrowLine">Arrow Line</Radio>
          <Radio value="freeLine">Free Line</Radio>
          <Radio value="text">Text</Radio>
          <Radio value="circle">Circle - Not implemented yet</Radio>
        </Stack>
      </RadioGroup>
      <Resizable style={style} defaultSize={DEFAULT_SIZE} className={`annotation ${annotationMode}`}>
        <InsightViewer viewerRef={viewerRef} image={image} viewport={viewport} onViewportChange={setViewport}>
          {loadingState === 'success' && (
            <AnnotationOverlay
              width={700}
              height={700}
              annotations={annotations}
              hoveredAnnotation={hoveredAnnotation}
              selectedAnnotation={selectedAnnotation}
              mode={annotationMode}
              showAnnotationLabel={isShowLabel}
              onSelect={selectAnnotation}
            />
          )}
        </InsightViewer>
      </Resizable>
    </Box>
  )
}

export default AnnotationViewerContainer

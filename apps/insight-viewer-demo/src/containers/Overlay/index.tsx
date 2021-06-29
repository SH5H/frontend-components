import { Box } from '@chakra-ui/react'
import Viewer, { useViewport } from '@lunit/insight-viewer'
import CodeBlock from '../../components/CodeBlock'
import OverlayLayer from '../../components/OverlayLayer'

const IMAGE_ID =
  'wadouri:https://static.lunit.io/fixtures/dcm-files/series/CT000011.dcm'

const Code = `\
  import Viewer, { useViewport } from '@lunit/insight-viewer'

  export default function Viewer() {
    const { viewport, setViewport } = useViewport()

    return (
      <Viewer.Dicom 
        imageId={IMAGE_ID} 
        viewport={viewport}
        onViewportChange={setViewport}
      >
        <OverlayLayer viewport={viewport} />
      </Viewer.Dicom>
    )
  }
  `

function Overlay(): JSX.Element {
  const { viewport, setViewport } = useViewport()

  return (
    <Box w={700}>
      <Box w={500} h={500}>
        <Viewer.Dicom
          imageId={IMAGE_ID}
          viewport={viewport}
          onViewportChange={setViewport}
        >
          <OverlayLayer viewport={viewport} />
        </Viewer.Dicom>
      </Box>
      <Box w={900}>
        <CodeBlock code={Code} />
      </Box>
    </Box>
  )
}

export default Overlay

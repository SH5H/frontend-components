import { MutableRefObject } from 'react'
import { Element, Viewport, OnViewportChange } from '../../types'
import { Image } from '../../Viewer/types'

export interface UseImageDisplay {
  (prop: {
    element: Element
    image: Image
    viewportRef: MutableRefObject<Viewport>
    onViewportChange?: OnViewportChange
  }): void
}

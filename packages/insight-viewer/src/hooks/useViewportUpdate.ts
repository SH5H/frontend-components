/**
 * @fileoverview Update cornerstone.js viewport when Viewer's viewport prop changes.
 */
import { useEffect } from 'react'
import { getViewport, setViewport } from '../utils/cornerstoneHelper'
import {
  formatCornerstoneViewport,
  formatViewport,
} from '../utils/common/formatViewport'
import { Element, Viewport, OnViewportChange } from '../types'
import useDefaultViewport from './useDefaultViewport'

interface Prop {
  element: Element
  viewport?: Viewport
  onViewportChange?: OnViewportChange
}

/**
 * @param element The HTML Element enabled for Cornerstone.
 * @param viewport The Viewer's viewport prop.
 * @param initialViewport The user-defined initial viewport of a Viewer.
 * @param onViewportChange The Viewer's viewport setter prop.
 */
export default function useViewportUpdate({
  element,
  viewport: newViewportProp,
  onViewportChange,
}: Prop): void {
  const defaultViewporRef = useDefaultViewport() // image's cornerstone default viewport
  const defaultViewport = defaultViewporRef?.current

  useEffect(() => {
    if (!element || !newViewportProp || !defaultViewport) return

    const willReset = newViewportProp?._resetViewport && defaultViewport
    const viewport = willReset
      ? defaultViewport
      : getViewport(<HTMLDivElement>element)

    if (!viewport) return

    setViewport(
      <HTMLDivElement>element,
      formatCornerstoneViewport(viewport, newViewportProp)
    )

    // When resetting, update Viewer's viewport prop
    if (willReset && onViewportChange) {
      onViewportChange({
        ...formatViewport(defaultViewport),
        ...(newViewportProp?._resetViewport ?? {}),
      })
    }
  }, [element, newViewportProp, defaultViewport, onViewportChange])
}

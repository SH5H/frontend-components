import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { Subscription } from 'rxjs'
import CircularProgress from '../CircularProgress'
import { loadingProgressMessage } from '../../utils/messageService'

const ProgressWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`

let subscription: Subscription

export default function LoadingProgress(): JSX.Element {
  const [{ progress, hidden }, setState] = useState<{
    progress?: number
    hidden: boolean
  }>({
    progress: undefined,
    hidden: true,
  })

  useEffect(() => {
    subscription = loadingProgressMessage
      .getMessage()
      .subscribe((message: number) => {
        setState(prev => ({
          ...prev,
          progress: message,
        }))
      })

    return () => {
      subscription.unsubscribe()
    }
  }, [])

  useEffect(() => {
    if (progress === 100) {
      setTimeout(() => {
        setState(prev => ({ ...prev, hidden: true }))
      }, 500)
    }

    if (progress === 0) {
      setState(prev => ({ ...prev, hidden: false }))
    }
  }, [progress])

  return (
    <ProgressWrapper hidden={hidden}>
      <CircularProgress progress={progress ?? 0} />
    </ProgressWrapper>
  )
}
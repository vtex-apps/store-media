import React from 'react'
import { VideoTypes } from 'vtex.store-video'

import { BlockModeProps } from '../MediaTypes'

const VIMEO_PATTERN = /vimeo/
const YOUTUBE_PATTERN = /youtube|youtu.be/

export function Video({ src = '' }: VideoTypes.VideoPlayer & BlockModeProps) {
  if (VIMEO_PATTERN.test(src)) {
    return <div data-testid="vimeo-player" />
  }

  if (YOUTUBE_PATTERN.test(src)) {
    return <div data-testid="youtube-player" />
  }

  return (
    <div data-testid="html5-player">
      <source src={src} />
    </div>
  )
}

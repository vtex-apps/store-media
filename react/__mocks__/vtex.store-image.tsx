import React from 'react'

import { ImageProps } from '../MediaTypes'

export function Image({ src, alt }: ImageProps) {
  return <img src={src} alt={alt} />
}

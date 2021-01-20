import { Image } from 'vtex.store-image'
import type { ComponentProps } from 'react'
import type { VideoTypes } from 'vtex.store-video'

export type ImageProps = ComponentProps<typeof Image>

export interface VideoModeProps extends Omit<VideoTypes.VideoPlayer, 'src'> {
  mediaType?: 'video' | 'imageAndVideo'
  src?: VideoTypes.VideoPlayer['src']
}

export interface ImageModeProps extends ImageProps {
  mediaType?: 'image' | 'imageAndVideo'
}

// Media type will always be defined (image or video), but assuring that here
// makes the prop autocomplete on this component way less powerful
// on the test site-editor tests
export interface BlockModeProps {
  videoUrl?: VideoTypes.VideoPlayer['src']
  imageUrl?: ImageProps['src']
}

export type MediaProps = ImageModeProps | VideoModeProps

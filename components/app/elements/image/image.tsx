import React from "react"

import { BaseImage, BaseImageProps } from "@watheia/pwa.ui.elements.image"
import { staticStorageUrl } from "@watheia/pwa.ui.constants.storage"

export type ImageProps = BaseImageProps

/**
 * Concrete image, using our Static Storage CDN.
 *
 * Treats src as relative paths on top of our image storage, and supports all other properties an html `<img>` would.
 * @name Image
 * @example
 * <Image src="homepage-bit/map.png" alt="illustration" fullWidth />
 */
export function Image({ src, ...rest }: ImageProps) {
  return (
    <BaseImage
      data-bit-id="watheia.pwa/elements/image"
      {...rest}
      src={`${staticStorageUrl}/${src}`}
    />
  )
}

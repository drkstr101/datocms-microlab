import React from "react"
import { ThemeCompositions } from "@watheia/pwa.ui.theme.theme-compositions"
import { Image } from "./image"

export const ImageExample = ({ ...rest }) => (
  <ThemeCompositions>
    <Image
      src="homepage-bit/map.png"
      data-testid="test-img"
      alt="alt world"
      style={{ width: 500 }}
      {...rest}
    />
  </ThemeCompositions>
)

ImageExample.canvas = {
  height: 250,
}

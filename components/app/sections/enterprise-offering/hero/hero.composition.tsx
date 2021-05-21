import React from "react"
import { ThemeCompositions } from "@watheia/pwa.ui.theme.theme-compositions"
import { Hero } from "./hero"

export const HeroExample = () => (
  <ThemeCompositions>
    <Hero data-testid="test-hero" />
  </ThemeCompositions>
)

HeroExample.canvas = {
  height: 520,
}

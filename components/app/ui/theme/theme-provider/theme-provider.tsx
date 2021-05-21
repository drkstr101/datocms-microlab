import React from "react"
import classNames from "classnames"

import { headingFontSize, textFontSize } from "@watheia/pwa.ui.theme.size-definition"
import { shadowTheme } from "@watheia/pwa.ui.theme.shadow-definition"
import { primaryPalette } from "@watheia/pwa.ui.theme.color-definition"
import { brands } from "@watheia/pwa.ui.theme.brand-definition"
import { headingMargins } from "@watheia/pwa.ui.theme.heading-margin-definition"
import { bookFont } from "@watheia/pwa.ui.theme.fonts.book"
import texts from "./texts.module.scss"

/**
 * @name ThemeProvider
 * @description
 * Applies shared styles to all child components.
 *
 * This includes:
 * - Colors
 * - Headers and paragraphs font-size, margins, etc
 * - Brand font
 * - Shadows
 * - Specific brand related styles
 *
 * @example
 * <Theme>
 *  <Paragraph>I got all the base styles! yippee!</Paragraph>
 * </Theme>
 */

export function Theme(props: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      {...props}
      className={classNames(
        headingFontSize,
        textFontSize,
        bookFont,
        shadowTheme,
        primaryPalette,
        brands,
        headingMargins,
        texts.defaults,
        props.className,
      )}
    ></div>
  )
}

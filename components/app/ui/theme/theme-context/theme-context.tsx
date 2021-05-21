import React, { HTMLAttributes } from "react"
import classNames from "classnames"
import "reset-css"
import { Theme } from "@watheia/pwa.ui.theme.theme-provider"
import { Roboto } from "@watheia/pwa.ui.theme.fonts.roboto"
// import { darkMode } from '@watheia/pwa.ui.theme.dark-theme';
import sizes from "./sizes.module.scss"
import global from "./global.module.scss" // TODO - rename

export type ThemeDocumenterProps = {} & HTMLAttributes<HTMLDivElement>

export function ThemeDocumenter({ children, className, ...rest }: ThemeDocumenterProps) {
  return (
    <Theme {...rest} className={classNames(className, sizes.heading, global.overrides)}>
      <Roboto />
      {children}
    </Theme>
  )
}

/**
 * @deprecated
 */
export { ThemeDocumenter as ThemeContext }

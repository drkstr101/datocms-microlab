import React from "react"
import classNames from "classnames"
import { PossibleSizes } from "@watheia/pwa.ui.theme.sizes"
import { textSize } from "@watheia/pwa.ui.text.text-sizes"

export { PossibleSizes }

export type ParagraphProps = {
  /**
   * Font size (from a list of presets).
   */
  size: PossibleSizes
  /**
   * The underlying html element
   */
  element: "p" | "div" | "span"
} & React.HTMLAttributes<HTMLParagraphElement>

/**
 * Paragraph component prototype. Accepts all properties of a native Paragraph element,
 * @name paragraph
 * @example
 * <Paragraph size="sm">This is some text</Paragraph>
 */
export function Paragraph({ className, size, element: Element, ...rest }: ParagraphProps) {
  return (
    <Element
      className={classNames(textSize[size], className)}
      data-bit-id="watheia.pwa/ui/text/paragraph"
      {...rest}
    />
  )
}

Paragraph.defaultProps = {
  size: "md",
  element: "p",
}

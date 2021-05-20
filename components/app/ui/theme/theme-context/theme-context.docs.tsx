import { Paragraph } from "./paragraph"
import { Label } from "./label"
import { ThemeContext } from "@watheia/pwa.ui.theme.theme-context"

export const labels = ["react", "theme"]

export const abstract = `The ThemeContext is used to style Documenter's components with the Documenter's theme.`

export const examples = [
  {
    scope: {
      ThemeContext,
      Paragraph,
      Label,
    },
    title: "Using the ThemeContext component",
    description:
      "The ThemeContext uses plain CSS cascading to theme its child elements. Use it with your own (documenter) compositions, to maintain a consistent look and feel.",
    code: ` 
      <ThemeContext>
        <Label>Example</Label>
        <Paragraph>
          A simple example of a custom composition.
        </Paragraph>
      </ThemeContext>
        `,
  },
]

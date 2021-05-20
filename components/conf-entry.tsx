/**
 * Copyright 2021 Watheia Labs, LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import cn from "classnames"
import { useCallback, useState } from "react"
import styleUtils from "./utils.module.css"
import styles from "./conf-entry.module.css"
import LoadingDots from "./loading-dots"
import { register } from "@lib/user-api"
import { SITE_DESCRIPTION } from "@lib/constants"
import useNameParam from "@lib/hooks/use-name-query-param"

type FormState = "default" | "loading" | "error"

const DEFAULT_ERROR_MSG = "Error! Please try again."

function getErrorMsg(code: string) {
  switch (code) {
    case "bad_name":
      return "Please enter a valid name"
    default:
      return DEFAULT_ERROR_MSG
  }
}

export default function ConfEntry({ onRegister }: { onRegister: () => void }) {
  const [nameInput, setNameInput] = useState("")
  const [focused, setFocused] = useState(false)
  const [formState, setFormState] = useState<FormState>("default")
  const [errorMsg, setErrorMsg] = useState("")

  const onSubmit = useCallback(
    async (e) => {
      try {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-call
        e.preventDefault()
        setFormState("loading")

        const res = await register(nameInput)

        if (!res.ok) {
          const json = await res.json()
          setErrorMsg(getErrorMsg(json.error.code))
          setFormState("error")
          return
        }

        onRegister()
      } catch (err) {
        console.error(err)
        setErrorMsg(DEFAULT_ERROR_MSG)
        setFormState("error")
      }
    },
    [nameInput, onRegister],
  )

  useNameParam("launch", setNameInput)

  const onTryAgainClick = useCallback((e) => {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-call
    if (typeof e.preventDefault == "function") e.preventDefault()
    setErrorMsg("")
    setFormState("default")
  }, [])

  return (
    <div className={cn(styles.container, styleUtils.appear, styleUtils["appear-first"])}>
      <h1 className={cn(styles.hero)}>We build micro frontends!.</h1>
      <h2 className={cn(styles.description)}>{SITE_DESCRIPTION}</h2>
      <form onSubmit={onSubmit} className={styles.form}>
        <div className={styles["form-row"]}>
          <label
            htmlFor="name-input-field"
            className={cn(styles["input-label"], {
              [styles.focused]: focused,
              [styles.error]: formState === "error",
            })}
          >
            {formState === "error" ? (
              <div className={cn(styles.input, styles["input-text"])}>{errorMsg}</div>
            ) : (
              <input
                className={styles.input}
                autoComplete="off"
                type="name"
                id="name-input-field"
                value={nameInput}
                onChange={(e) => setNameInput(e.target.value)}
                onFocus={() => setFocused(true)}
                onBlur={() => setFocused(false)}
                placeholder="Choose a workspace name to begin"
                aria-label="A name for your org or domain"
                required
              />
            )}
          </label>
          <button
            type="submit"
            className={cn(styles.submit, styles.register, styles[formState])}
            disabled={formState === "loading"}
            onClick={formState === "error" ? onTryAgainClick : undefined}
          >
            {formState === "loading" ? (
              <LoadingDots size={4} />
            ) : (
              <>{formState === "error" ? "Try Again" : "Launch"}</>
            )}
          </button>
        </div>
      </form>
    </div>
  )
}

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

import { useState } from "react"
import { PageState, ConfDataContext, UserData } from "@lib/hooks/use-conf-data"
import Layout from "./layout"
import ConfContainer from "./conf-container"
import { Hero } from "@watheia/pwa.sections.enterprise-offering.hero"
import Form from "./form"
import LearnMore from "./learn-more"

type Props = {
  defaultUserData: UserData
  sharePage?: boolean
  defaultPageState?: PageState
}

export default function Conf({
  defaultUserData,
  sharePage,
  defaultPageState = "offline",
}: Props) {
  const [userData, setUserData] = useState<UserData>(defaultUserData)
  const [pageState, setPageState] = useState<PageState>(defaultPageState)

  return (
    <ConfDataContext.Provider
      value={{
        userData,
        setUserData,
        setPageState,
      }}
    >
      <Layout>
        <ConfContainer>
          {pageState === "offline" && !sharePage ? (
            <>
              <Hero />
              <Form />
              <LearnMore />
            </>
          ) : (
            <p>loading...</p>
          )}
        </ConfContainer>
      </Layout>
    </ConfDataContext.Provider>
  )
}

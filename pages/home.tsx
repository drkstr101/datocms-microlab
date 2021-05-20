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

import { GetStaticProps } from "next"

import Page from "@components/page"
import StakeholdersGrid from "@components/stakeholders-grid"
import Header from "@components/header"
import Layout from "@components/layout"

import { getAllStakeholders } from "@lib/cms-api"
import { Stakeholder } from "@lib/types"
import { META_DESCRIPTION } from "@lib/constants"

type Props = {
  stakeholders: Stakeholder[]
}

export default function ExpoPage({ stakeholders }: Props) {
  const meta = {
    title: "Expo - Virtual Event Starter Kit",
    description: META_DESCRIPTION,
  }

  return (
    <Page meta={meta}>
      <Layout>
        <Header hero="Expo" description={meta.description} />
        <StakeholdersGrid stakeholders={stakeholders} />
      </Layout>
    </Page>
  )
}

export const getStaticProps: GetStaticProps<Props> = async () => {
  const stakeholders = await getAllStakeholders()

  return {
    props: {
      stakeholders,
    },
    revalidate: 60,
  }
}

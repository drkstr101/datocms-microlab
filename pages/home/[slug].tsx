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

import { GetStaticProps, GetStaticPaths } from "next"

import Page from "@components/page"
import StakeholderSection from "@components/stakeholders-section"
import Layout from "@components/layout"

import { getAllStakeholders } from "@lib/cms-api"
import { Stakeholder } from "@lib/types"
import { META_DESCRIPTION } from "@lib/constants"

type Props = {
  stakeholder: Stakeholder
}

export default function StakeholderPage({ stakeholder }: Props) {
  const meta = {
    title: "Demo - Virtual Event Starter Kit",
    description: META_DESCRIPTION,
  }

  return (
    <Page meta={meta}>
      <Layout>
        <StakeholderSection stakeholder={stakeholder} />
      </Layout>
    </Page>
  )
}

export const getStaticProps: GetStaticProps<Props> = async ({ params }) => {
  const slug = params?.slug
  const stakeholders = await getAllStakeholders()
  const stakeholder = stakeholders.find((s: Stakeholder) => s.slug === slug) || null

  if (!stakeholder) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      stakeholder,
    },
    revalidate: 60,
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  const stakeholders = await getAllStakeholders()
  const slugs = stakeholders.map((s: Stakeholder) => ({ params: { slug: s.slug } }))

  return {
    paths: slugs,
    fallback: "blocking",
  }
}

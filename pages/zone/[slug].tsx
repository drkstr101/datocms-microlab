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
import ZoneContainer from "@components/zone-container"
import Layout from "@components/layout"

import { getAllZones } from "@lib/cms-api"
import { Zone } from "@lib/types"
import { META_DESCRIPTION } from "@lib/constants"

type Props = {
  zone: Zone
  allZones: Zone[]
}

export default function ZonePage({ zone, allZones }: Props) {
  const meta = {
    title: "Demo - Micro Frontend Starter Kit",
    description: META_DESCRIPTION,
  }

  return (
    <Page meta={meta} fullViewport>
      <Layout>
        <ZoneContainer zone={zone} allZones={allZones} />
      </Layout>
    </Page>
  )
}

export const getStaticProps: GetStaticProps<Props> = async ({ params }) => {
  const slug = params?.slug
  const zones = await getAllZones()
  const zone = zones.find((s: Zone) => s.slug === slug) || null

  if (!zone) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      zone,
      allZones: zones,
    },
    revalidate: 60,
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  const zones = await getAllZones()
  const slugs = zones.map((s: Zone) => ({ params: { slug: s.slug } }))

  return {
    paths: slugs,
    fallback: false,
  }
}

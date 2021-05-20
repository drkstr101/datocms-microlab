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
import { Post, Stakeholder, Zone, Project } from "@lib/types"

const API_URL = "https://graphql.datocms.com/"
const API_TOKEN = process.env.DATOCMS_READ_ONLY_API_TOKEN

async function fetchCmsAPI(
  query: string,
  { variables }: { variables?: Record<string, any> } = {},
) {
  const res = await fetch(API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${API_TOKEN}`,
    },
    body: JSON.stringify({
      query,
      variables,
    }),
  })

  const json = await res.json()
  if (json.errors) {
    // eslint-disable-next-line no-console
    console.error(json.errors)
    throw new Error("Failed to fetch API")
  }

  return json.data
}

export async function getAllProjects(): Promise<Project[]> {
  const data = await fetchCmsAPI(`
    {
      allProjects(first: 100) {
        name
        bio
        title
        slug
        twitter
        github
        company
        talk {
          title
          description
        }
        image {
          url(imgixParams: {fm: jpg, fit: crop, w: 300, h: 400})
        }
        imageSquare: image {
          url(imgixParams: {fm: jpg, fit: crop, w: 192, h: 192})
        }
      }
    }
  `)

  return data.allProjects
}

export async function getAllZones(): Promise<Zone[]> {
  const data = await fetchCmsAPI(`
    {
      allZones(first: 100, orderBy: order_ASC) {
        name
        slug
        stream
        schedule {
          title
          start
          end
          project {
            name
            slug
            image {
              url(imgixParams: {fm: jpg, fit: crop, w: 120, h: 120})
            }
          }
        }
      }
    }
  `)

  return data.allZones
}

export async function getAllStakeholders(): Promise<Stakeholder[]> {
  const data = await fetchCmsAPI(`
    {
      allCompanies(first: 100, orderBy: tierRank_ASC) {
        name
        description
        slug
        website
        callToAction
        callToActionLink
        youtubeSlug
        tier
        links {
          url
          text
        }
        cardImage {
          url(imgixParams: {fm: jpg, fit: crop})
        }
        logo {
          url(imgixParams: {fm: jpg, fit: crop, w: 100, h: 100})
        }
      }
    }
  `)

  return data.allCompanies
}

export async function getAllPosts(): Promise<Post[]> {
  const data = await fetchCmsAPI(`
    {
      allPosts(first: 100, orderBy: rank_ASC) {
        id
        companyName
        title
        description
        link
        rank
      }
    }
  `)

  return data.allPosts
}

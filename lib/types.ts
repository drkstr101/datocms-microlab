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

export type Image = {
  url: string
}

export type Project = {
  name: string
  bio: string
  title: string
  slug: string
  twitter: string
  github: string
  company: string
  talk: Talk
  image: Image
  imageSquare: Image
}

export type Zone = {
  name: string
  slug: string
  stream: string
  schedule: Talk[]
}

export type Talk = {
  title: string
  description: string
  start: string
  end: string
  project: Project[]
}

export type Link = {
  url: string
}

export type Stakeholder = {
  name: string
  description: string
  slug: string
  website: string
  callToAction: string
  callToActionLink: string
  links: StakeholderLink[]
  tier: string
  cardImage: Image
  logo: Image
  youtubeSlug: string
}

export type StakeholderLink = {
  text: string
  url: string
}

export type Post = {
  id: string
  companyName: string
  title: string
  description: string
  link: string
  rank: number
}

export type ConfUser = {
  id?: string
  email: string
  ticketNumber: number
  name?: string
  username?: string
  createdAt: number
}

export type GitHubOAuthData =
  | {
      type: "token"
      token: string
    }
  | {
      type: "user"
      name: string
      login: string
    }

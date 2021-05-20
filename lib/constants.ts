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

export const SITE_URL = "https://watheia.app"
export const SITE_ORIGIN = process.env.NEXT_PUBLIC_SITE_ORIGIN || new URL(SITE_URL).origin
export const TWITTER_USER_NAME = "watheia"
export const BRAND_NAME = "Watheia"
export const SITE_NAME_MULTILINE = ["Watheia", "Labs"]
export const SITE_NAME = "Watheia Labs, LLC"
export const META_DESCRIPTION =
  "This is an open source demo that Next.js developers can clone, deploy, and fully customize for events. Created through collaboration of marketers, designers, and developers at Vercel."
export const SITE_DESCRIPTION =
  "An interactive online experience by the community, free for everyone."
export const DATE = "June 1, 2020"
export const SHORT_DATE = "Jun 1 - 9:00am PST"
export const FULL_DATE = "Jun 1st 9am Pacific Time (GMT-7)"
export const TWEET_TEXT = META_DESCRIPTION
export const STATICTOKEN_SALT = 1234 + Date.now() //not secure
export const COOKIE = `user-id`

// Remove process.env.NEXT_PUBLIC_... below and replace them with
// strings containing your own privacy policy URL and copyright holder name
export const LEGAL_URL =
  process.env.NEXT_PUBLIC_PRIVACY_POLICY_URL ||
  "https://cdn.watheia.org/assets/terms-and-conditions.txt"
export const COPYRIGHT_HOLDER = process.env.NEXT_PUBLIC_COPYRIGHT_HOLDER

export const CODE_OF_CONDUCT = "https://cdn.watheia.org/assets/terms-and-conditions.txt"
export const REPO =
  "https://gitpod.io/#https://gitlab.com/watheia/nx-workspace/-/tree/master/"
export const NAVIGATION = [
  {
    name: "Zone D",
    route: "/zone/m",
  },
  {
    name: "Zone E",
    route: "/zone/e",
  },
  {
    name: "Projects",
    route: "/schedule",
  },
  {
    name: "Blog",
    route: "/speakers",
  },
  {
    name: "Company",
    route: "/expo",
  },
  {
    name: "Contact",
    route: "/jobs",
  },
]

export type TicketGenerationState = "default" | "loading"

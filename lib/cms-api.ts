/* eslint-disable @typescript-eslint/require-await */
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

import * as datoCmsApi from "./dato"

export interface CmsApi {
  getAllProjects: () => Promise<Project[]>
  getAllZones: () => Promise<Zone[]>
  getAllStakeholders: () => Promise<Stakeholder[]>
  getAllPosts: () => Promise<Post[]>
}

// if (process.env.DATOCMS_READ_ONLY_API_TOKEN) {
//   cmsApi = datoCmsApi
// } else {
const cmsApi: CmsApi = {
  getAllProjects: async () => [],
  getAllZones: async () => [],
  getAllStakeholders: async () => [],
  getAllPosts: async () => [],
}
// }

export async function getAllProjects(): Promise<Project[]> {
  return cmsApi.getAllProjects()
}

export async function getAllZones(): Promise<Zone[]> {
  return cmsApi.getAllZones()
}

export async function getAllStakeholders(): Promise<Stakeholder[]> {
  return cmsApi.getAllStakeholders()
}

export async function getAllPosts(): Promise<Post[]> {
  return cmsApi.getAllPosts()
}

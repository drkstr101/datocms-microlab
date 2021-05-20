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
import ProjectSection from "@components/projects-section"
import Layout from "@components/layout"

import { getAllProjects } from "@lib/cms-api"
import { Project } from "@lib/types"
import { META_DESCRIPTION } from "@lib/constants"

type Props = {
  project: Project
}

export default function ProjectPage({ project }: Props) {
  const meta = {
    title: "Demo - Virtual Event Starter Kit",
    description: META_DESCRIPTION,
  }

  return (
    <Page meta={meta}>
      <Layout>
        <ProjectSection project={project} />
      </Layout>
    </Page>
  )
}

export const getStaticProps: GetStaticProps<Props> = async ({ params }) => {
  const slug = params?.slug
  const projects = await getAllProjects()
  const currentProject = projects.find((s: Project) => s.slug === slug) || null

  if (!currentProject) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      project: currentProject,
    },
    revalidate: 60,
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  const projects = await getAllProjects()
  const slugs = projects.map((s: Project) => ({ params: { slug: s.slug } }))

  return {
    paths: slugs,
    fallback: false,
  }
}

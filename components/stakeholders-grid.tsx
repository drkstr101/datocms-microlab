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

import Link from "next/link"
import Image from "next/image"
import cn from "classnames"
import { Stakeholder } from "@lib/types"
import styles from "./stakeholders-grid.module.css"

function StakeholderCard({ stakeholder }: { stakeholder: Stakeholder }) {
  return (
    <Link key={stakeholder.name} href={`/expo/${stakeholder.slug}`}>
      <a
        role="button"
        tabIndex={0}
        className={cn(styles.card, {
          [styles.diamond]: stakeholder.tier === "diamond",
          [styles.gold]: stakeholder.tier === "gold",
        })}
      >
        <div className={styles.imageWrapper}>
          <Image
            alt={stakeholder.name}
            src={stakeholder.cardImage.url}
            className={cn(styles.image, {
              [styles.silver]: stakeholder.tier === "silver",
            })}
            loading="lazy"
            title={stakeholder.name}
            width={900}
            height={500}
          />
        </div>
        {stakeholder.tier !== "silver" && (
          <div className={styles.cardBody}>
            <div>
              <h2 className={styles.name}>{stakeholder.name}</h2>
              <p className={styles.description}>{stakeholder.description}</p>
            </div>
          </div>
        )}
      </a>
    </Link>
  )
}

type Props = {
  stakeholders: Stakeholder[]
}

export default function StakeholdersGrid({ stakeholders }: Props) {
  const silverStakeholders = stakeholders.filter((s) => s.tier === "silver")
  const otherStakeholders = stakeholders.filter((s) => s.tier !== "silver")

  return (
    <>
      <div className={styles.grid}>
        {otherStakeholders.map((stakeholder) => (
          <StakeholderCard key={stakeholder.name} stakeholder={stakeholder} />
        ))}
      </div>
      <div className={styles.grid}>
        {silverStakeholders.map((stakeholder) => (
          <StakeholderCard key={stakeholder.name} stakeholder={stakeholder} />
        ))}
      </div>
    </>
  )
}

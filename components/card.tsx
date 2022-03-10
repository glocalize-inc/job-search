import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { IVideo } from "../types"
import styles from './card.module.css'

type Props = {
  item: IVideo
}

/**
 * @todo metadata
 */
export default function Card({item}: Props) {
  return (
    <div className={styles.container}>
      <div className={styles.thumbnail}>
        <Link href={`/videos/${item.videoId}`}>
          <Image
            priority
            src={item.thumbnail.url}
            alt={item.title}
            width={item.thumbnail.width} 
            height={item.thumbnail.height} 
          />
        </Link>
      </div>
      <div className={styles.title}>
        <p>{item.title}</p>
      </div>
      <div className={styles.flex}>
        <div className={styles.chip}>
          <span>ko</span>
          <span>{'->'}</span>
          <span>en</span>
        </div>
        <div className={styles.hash}>
          <span>#번역</span>
        </div>
      </div>
    </div>
  )
}
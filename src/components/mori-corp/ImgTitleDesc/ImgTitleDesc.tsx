import React from 'react'
import { ImgOpt } from '@/components/utils/ImgOpt/ImgOpt'
import * as styles from './ImgTitleDesc.css'

const defaultImage = '/figma-assets/c032e6248e86eb0e3ee59f6ae2bd6b49aaef9b8b.png'

interface ImgTitleDescProps {
  src?: string
  title?: string
  description?: string
  pattern?: 'default' | 'white_bg'
  className?: string
}

export function ImgTitleDesc({
  src = defaultImage,
  title = 'タイトル',
  description = '説明文',
  pattern = 'default',
  className
}: ImgTitleDescProps) {
  const containerClass = pattern === 'white_bg'
    ? `${styles.container} ${styles.whiteBgPattern} ${className || ''}`
    : `${styles.container} ${styles.defaultPattern} ${className || ''}`

  return (
    <div
      className={containerClass}
      data-name='img_title_desc'
      data-node-id='608:6997'
    >
      <div className={styles.imageWrapper} data-name='image'>
        <ImgOpt
          src={src}
          alt={title}
          className={styles.image}
        />
      </div>
      <div className={pattern === 'white_bg' ? styles.contentWithPadding : styles.content} data-name='inner'>
        <div className={styles.textContent} data-name='content'>
          <h3 className={styles.title}>
            {title}
          </h3>
          <p className={styles.description}>
            {description}
          </p>
        </div>
      </div>
    </div>
  )
}

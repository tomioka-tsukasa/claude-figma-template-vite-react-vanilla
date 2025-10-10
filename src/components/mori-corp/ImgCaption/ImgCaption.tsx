import React from 'react'
import { ImgOpt } from '@/components/utils/ImgOpt/ImgOpt'
import * as styles from './ImgCaption.css'

const defaultImage = '/figma-assets/975a764bd669be7e70fe521f45760b7b20105c37.png'

interface ImgCaptionProps {
  src?: string
  caption?: string
  className?: string
}

export function ImgCaption({
  src = defaultImage,
  caption = 'キャプション',
  className
}: ImgCaptionProps) {
  return (
    <div
      className={`${styles.container} ${className || ''}`}
      data-name='img_caption'
      data-node-id='608:8186'
    >
      <div className={styles.imageWrapper} data-name='image'>
        <ImgOpt
          src={src}
          alt={caption}
          className={styles.image}
        />
      </div>
      <div className={styles.content} data-name='inner'>
        <div className={styles.textContent} data-name='content'>
          <p className={styles.caption}>
            {caption}
          </p>
        </div>
      </div>
    </div>
  )
}

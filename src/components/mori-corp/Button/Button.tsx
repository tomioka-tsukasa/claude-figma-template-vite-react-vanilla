import React from 'react'
import { ImgOpt } from '@/components/utils/ImgOpt/ImgOpt'
import * as styles from './Button.css'

const arrowIcon = '/figma-assets/1a4cc9320685e92507eae29690ac89540fb87995.svg'

interface ButtonProps {
  children: React.ReactNode
  size?: 'default' | 'large'
  icon?: React.ReactNode | null
  onClick?: () => void
  className?: string
}

export function Button({
  children,
  size = 'default',
  icon = null,
  onClick,
  className
}: ButtonProps) {
  const iconElement = icon || (
    <ImgOpt
      src={arrowIcon}
      alt=''
      className={styles.iconImage}
    />
  )

  return (
    <button
      className={`${styles.button} ${styles.variants[size]} ${className || ''}`}
      onClick={onClick}
      data-name='button'
      data-node-id='627:8204'
    >
      <div className={styles.label} data-name='label'>
        {children}
      </div>
      <div className={styles.iconContainer} data-name='icon'>
        {iconElement}
      </div>
    </button>
  )
}

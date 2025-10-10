import { style } from '@vanilla-extract/css'
import { rvw } from '@/styles/responsive.css'

export const container = style([
  {
    position: 'relative',
    width: '100%',
    height: '100%',
    overflow: 'hidden',
  }
])

export const thumbnailContainer = style([
  {
    position: 'relative',
    width: '100%',
    height: '100%',
    transition: 'opacity 0.5s cubic-bezier(0.0, 0.5, 0.3, 2.0) 0s',
    zIndex: '1',
    cursor: 'pointer',
  }
])

export const thumbnailUnactive = style([
  {
    opacity: 0,
    pointerEvents: 'none',
  }
])

export const thumbnail = style([
  {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  }
])

export const playButton = style([
  {
    position: 'absolute',
    top: '50%',
    left: '51%',
    transform: 'translate(-50%, -50%)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  rvw.width(201),
])

export const player = style([
  {
    width: '100%',
    height: '100%',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    zIndex: '0',
  },
])

import { style } from '@vanilla-extract/css'
import { rvw } from '@/styles/responsive.css'
import { colors } from '@/styles/colors'

export const container = style([
  {
    display: 'flex',
    flexDirection: 'column',
    borderRadius: '3px',
    width: '100%',
  },
  rvw.gap(11, 8),
])

export const imageWrapper = style([
  {
    position: 'relative',
    width: '100%',
    borderBottom: '1px solid rgba(0,0,0,0.1)',
    borderRadius: '3px 3px 0 0',
    overflow: 'hidden',
    flex: '1 1 0%',
  },
])

export const image = style({
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  objectPosition: '50% 50%',
  borderRadius: '3px 3px 0 0',
})

export const content = style([
  {
    display: 'flex',
    alignItems: 'center',
    width: '100%',
  },
  rvw.gap(20, 15),
])

export const textContent = style([
  {
    display: 'flex',
    flexDirection: 'column',
    flex: '1 1 0%',
    overflow: 'hidden',
  },
  rvw.gap(2, 1),
])

export const caption = style([
  {
    fontFamily: '\'Inter\', \'Noto Sans JP\', sans-serif',
    fontWeight: 'normal',
    color: colors.basic.medium,
    margin: 0,
    width: '100%',
    lineHeight: '19px',
  },
  rvw.fontSize(12, 10),
])

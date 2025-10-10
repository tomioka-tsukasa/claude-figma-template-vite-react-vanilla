import { style, styleVariants } from '@vanilla-extract/css'
import { rvw, hover } from '@/styles/responsive.css'
import { colors } from '@/styles/colors'

export const button = style([
  {
    backgroundColor: colors.basic.dark,
    border: 'none',
    borderRadius: '3px',
    color: colors.basic.white,
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    gap: '20px',
    transition: 'all 0.2s ease',
  },
  hover({
    opacity: 0.8,
  }),
])

export const variants = styleVariants({
  default: [
    rvw.padding([18, 20, 18, 22], [12, 14, 12, 16]),
  ],
  large: [
    rvw.padding([28, 30, 28, 32], [20, 22, 20, 24]),
  ],
})

export const label = style([
  {
    flex: '1 1 0%',
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    fontFamily: '\'Arial\', \'Noto Sans JP\', sans-serif',
    fontWeight: 'bold',
    lineHeight: '16px',
    whiteSpace: 'pre',
  },
  rvw.fontSize(14, 12),
])

export const iconContainer = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  width: '12px',
  height: '12px',
})

export const iconImage = style({
  width: '7px',
  height: '12px',
  objectFit: 'contain',
})

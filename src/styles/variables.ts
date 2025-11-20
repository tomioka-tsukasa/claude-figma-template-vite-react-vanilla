export {
  PcDesignWidth,
  PcDesignHeight,
  TabletDesignWidth,
  SpDesignWidth,
  PcMqWidthMax,
  TabletMqWidthMax,
  SpMqWidthMax,
  usePixelLimit,
  pixelLimitWidth,
} from './responsive.config'

/**
 * カラー定義
 */

export const colors = {
  main: {
    test: 'red'
  },
  base: {
    white: '#ffffff',
    black: '#000000',
    gray: '#d7d7d7',
    bg: '#ffffff',
  },
}

/**
 * フォント定義
 */

export { basicFontStyle, zenOldMinchoStyle, type SetFontFamily } from './fontUtils'

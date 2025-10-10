import { Link, LinkProps } from 'react-router-dom'
import { useUtm } from '../../../hooks/useUtm/useUtm'

/**
 * UtmLinkコンポーネントのプロパティ
 */
type UtmLinkProps = Partial<LinkProps> & {
  /**
   * 外部リンクかどうかを明示的に指定
   * undefinedの場合は自動判定
   */
  external?: boolean;

  /**
   * リンク先URL（toの代わりに使用可能）
   */
  href?: string;

  /**
   * リンクテキスト
   */
  children?: React.ReactNode;
};

/**
 * UTMパラメータを自動付与するリンクコンポーネント
 * - 外部リンクの場合はaタグとして描画し、UTMパラメータを付与
 * - 内部リンクの場合はLinkコンポーネントとして描画し、UTMパラメータをクエリに追加
 */
function UtmLink({
  to,
  href,
  external,
  children,
  ...props
}: UtmLinkProps) {
  const { withUtm, preserveUtm, isExternalUrl } = useUtm()

  // hrefとtoのどちらかが必要
  const targetUrl = href || to
  if (!targetUrl) {
    console.error('UtmLink requires either "to" or "href" prop')
    return null
  }

  // 明示的に外部リンク指定がある場合、またはURLが外部URLの場合
  const isExternal = external !== undefined
    ? external
    : isExternalUrl(targetUrl.toString())

  if (isExternal) {
    // 外部リンクの場合
    const hrefWithUtm = withUtm(targetUrl.toString())
    return (
      <a href={hrefWithUtm} {...props}>
        {children}
      </a>
    )
  } else {
    // 内部リンクの場合
    const pathWithUtm = preserveUtm(targetUrl.toString())
    return (
      <Link to={pathWithUtm} {...props}>
        {children}
      </Link>
    )
  }
}

export default UtmLink

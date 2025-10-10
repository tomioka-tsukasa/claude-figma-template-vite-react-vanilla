import ImgOpt from '@/components/utils/ImgOpt/ImgOpt'
import * as styles from './YoutubePlayer.css'
import { useEffect, useRef, useState } from 'react'
import { useAppSelector } from '@/store/hook'
import { progressMonitoring } from './utils/progressMonitoring/progressMonitoring'
import { PLAYER_STATE_NAMES } from './utils/stateMember/stateMember'

/**
 * プレーヤーのオプション
 */
type PlayerOptions = {
  autoplay: 0 | 1;
  controls: 0 | 1;
  modestbranding: 0 | 1;
  rel: 0 | 1;
}

/**
 * プレーヤーのプロパティ
 */
type Props = {
  videoId: string;
  thumbnailUrl: string;
  title: string;
  options?: Partial<PlayerOptions>;
  monitoring?: boolean;
}

/**
 * Youtubeプレーヤー
 * @param {string} videoId - YoutubeのビデオID
 * @param {string} thumbnailUrl - サムネイル画像のURL
 * @param {string} title - タイトル
 * @param {Partial<PlayerOptions>} options - プレーヤーのオプション
 * @param {boolean} monitoring - 再生進捗監視を有効にするかどうか
 */
export function YoutubePlayer({
  videoId,
  thumbnailUrl,
  title,
  options = {
    autoplay: 0,
    controls: 1,
    modestbranding: 1,
    rel: 0,
  },
  monitoring = false,
}: Props) {
  const containerRef = useRef<HTMLDivElement | null>(null)
  const playerRef = useRef<YT.Player | null>(null)
  const [isPlayed, setIsPlayed] = useState<boolean>(false)
  const [, setIsPlaying] = useState<boolean>(false)
  const isApiReady = useAppSelector((state) => state.YoutubeAPIStore.isApiReady)

  /**
   * プレーヤーの初期化
   * ・初期化は1度のみ行う
   * ・既に playerRef.current が存在する場合は初期化しない
   * ・YouTubeIframeAPI の初期化は Basic レイアウトで行う
   */
  useEffect(() => {
    if (!isApiReady || !containerRef.current || playerRef.current) return

    playerRef.current = new YT.Player(containerRef.current, {
      videoId,
      playerVars: options,
      events: {
        /**
         * 再生状態が変化したときのイベント
         * [Youtube Iframe Player API ドキュメント参考](https://developers.google.com/youtube/iframe_api_reference#Events)
         */
        onStateChange: (event) => {
          console.log('>> YoutubePlayer: State Changed:', {
            state: event.data,
            stateName: PLAYER_STATE_NAMES[event.data as keyof typeof PLAYER_STATE_NAMES]
          })

          switch (event.data) {

            // 再生中
            case YT.PlayerState.PLAYING:
              console.log('>> YoutubePlayer: Playing')
              setIsPlayed(true)
              setIsPlaying(true)
              if (monitoring) progressMonitoring(playerRef)
              break

            // 再生終了
            case YT.PlayerState.ENDED:
              console.log('>> YoutubePlayer: Video Ended')
              setIsPlaying(false)
              break

            // 一時停止中
            case YT.PlayerState.PAUSED:
              console.log('>> YoutubePlayer: Video Paused')
              setIsPlaying(false)
              break
          }
        },
      },
    })
  }, [isApiReady, videoId, monitoring, options])

  /**
   * 再生ボタンクリック時
   */
  const handlePlay = () => {
    if (!playerRef.current) return

    // playVideoメソッドを呼び出すと onStateChange イベントが発火
    playerRef.current.playVideo()
  }

  return <>
    <div className={styles.container}>

      {/* サムネイルコンテナ */}
      <div
        className={`${styles.thumbnailContainer} ${isPlayed ? styles.thumbnailUnactive : ''}`}
        onClick={handlePlay}
      >

        {/* サムネイル画像 */}
        <ImgOpt src={thumbnailUrl} alt={`${title}のサムネイル`} className={styles.thumbnail} />

        {/* 再生ボタン */}
        <div className={styles.playButton}>
          <ImgOpt src={'/assets/images/home/special-movie/play-btn.png'} alt='Youtube再生ボタン' />
        </div>
      </div>

      {/* プレーヤー */}
      <div ref={containerRef} className={styles.player} />
    </div>
  </>
}

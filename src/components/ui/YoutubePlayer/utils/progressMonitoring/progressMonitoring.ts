export const progressMonitoring = (
  playerRef: React.RefObject<YT.Player>
) => {
  const checkProgress = () => {
    if (!playerRef.current) return

    const currentTime = playerRef.current.getCurrentTime()
    const duration = playerRef.current.getDuration()
    const percentage = (currentTime / duration) * 100

    console.log('Progress:', {
      currentTime: currentTime.toFixed(3),
      duration: duration.toFixed(3),
      percentage: percentage.toFixed(2) + '%'
    })

    requestAnimationFrame(checkProgress)
  }

  requestAnimationFrame(checkProgress)
}

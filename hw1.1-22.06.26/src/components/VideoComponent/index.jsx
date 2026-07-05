function VideoComponent() {
  return (
    <div className="video">
      <video
        src="/my_video.mp4"
        autoPlay
        muted
        loop
        playsInline
        controls
        width="600"
      ></video>
    </div>
  )
}

export default VideoComponent;

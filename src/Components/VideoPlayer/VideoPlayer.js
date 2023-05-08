import "./VideoPlayer.scss";

function VideoPlayer(props) {
  return (
    <div className="video">
      <video
        className="video__content"
        poster={props.videoContent.image}
      ></video>
    </div>
  );
}

export default VideoPlayer;

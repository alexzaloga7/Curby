import "./Main.scss";
import ViewsAsset from "../../assets/Icons/views.svg";
import LikesAsset from "../../assets/Icons/likes.svg";

function Main(props) {
  return (
    <main className="main">
      <h1 className="main__header">{props.videoContent.title}</h1>
      <div className="main__container">
        <div className="main__container--left">
          <p className="main__item--author">By {props.videoContent.channel}</p>
          <p className="main__item">
            {new Date(props.videoContent.timestamp).toLocaleDateString(
              "en-US",
              {
                month: "2-digit",
                day: "2-digit",
                year: "numeric",
              }
            )}
          </p>
          <p className="main__item--author">{props.videoContent.location}</p>
        </div>
        <div className="main__container--right">
          <p className="main__item">
            <img
              className="main__icons"
              src={ViewsAsset}
              alt="views emojii"
            ></img>
            {props.videoContent.views}
          </p>
          <p className="main__item">
            <img
              className="main__icons"
              src={LikesAsset}
              alt="likes emojii"
            ></img>
            {props.videoContent.likes}
          </p>
        </div>
      </div>
      <p className="main__copy">{props.videoContent.description}</p>
    </main>
  );
}

export default Main;

import "./VideoList.scss";
import { Link } from "react-router-dom";
import LikesAsset from "../../assets/Icons/likes.svg";

function VideoList({ nextVid }) {
  return (
    <div>
      <h3 className="aside__header">Gallery</h3>
      <aside className="aside">
        {nextVid.map((video) => (
          <Link key={video.id} to={`/${video.id}`} className="aside__link">
            <div key={video.id} className="aside__box">
              <div key={video.id} className="aside__video">
                <img
                  className="aside__video"
                  src={video.image}
                  alt="video preview list"
                ></img>
              </div>
              <div className="aside__text">
                <div className="aside__description">
                  <h2 className="aside__title">{video.title}</h2>
                  <div className="aside__likes">
                    <img
                      className="main__icons"
                      src={LikesAsset}
                      alt="likes emojii"
                    ></img>
                    <p className="aside__creator">{video.likes}</p>
                  </div>
                </div>
                <p className="aside__location">{video.location}</p>
              </div>
            </div>
          </Link>
        ))}
      </aside>
    </div>
  );
}

export default VideoList;

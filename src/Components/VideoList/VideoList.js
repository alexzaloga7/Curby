import "./VideoList.scss";
import { Link } from "react-router-dom";

function VideoList({ nextVid }) {
  return (
    <aside className="aside">
      <h3 className="aside__header">NEXT VIDEOS</h3>
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
            {/* <div className="aside__text">
              <h2 className="aside__title">{video.title}</h2>
              <p className="aside__creator">{video.channel}</p>
            </div> */}
          </div>
        </Link>
      ))}
    </aside>
  );
}

export default VideoList;

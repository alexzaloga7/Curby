import "./SingleListing.scss";

import NavBar from "../../../Components/NavBar/NavBar";
import VideoPlayer from "../../../Components/VideoPlayer/VideoPlayer";
import ItemInfo from "../../../Components/ItemInfo/ItemInfo";
import Comments from "../../../Components/Comments/Comments";
// import VideoList from "../../../Components/VideoList/VideoList";
import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Footer from "../../../Components/Footer/Footer";

function useVideo(id) {
  const [videoContent, setVideoContent] = useState(null);

  useEffect(() => {
    const fetchVideo = async () => {
      const { data } = await axios.get(`http://localhost:3001/videos/${id}`);
      setVideoContent(data);
    };
    fetchVideo();
  }, [id]);

  return videoContent;
}

function useNextVideos(id) {
  const [nextVideos, setNextVideos] = useState([]);

  useEffect(() => {
    const fetchNextVideos = async () => {
      const { data } = await axios.get(`http://localhost:3001/videos/`);
      const videoinfo = data.filter((vid) => vid.id !== id);
      setNextVideos(videoinfo);
      console.log(videoinfo);
    };
    fetchNextVideos();
  }, [id]);

  return nextVideos;
}

function SingleListing() {
  const params = useParams();
  const id = params.id || "84e96018-4022-434e-80bf-000ce4cd12b8";
  const videoContent = useVideo(id);
  const nextVideos = useNextVideos(id);

  if (!videoContent || nextVideos.length === 0) {
    return <div>loading...</div>;
  }

  return (
    <div className="SingleListing">
      <NavBar />
      <VideoPlayer videoContent={videoContent} />
      <div className="Body">
        <section>
          <ItemInfo videoContent={videoContent} />
          {/* <Comments videoContent={videoContent} /> */}
        </section>
        {/* <aside>
          <VideoList nextVid={nextVideos} />
        </aside> */}
        <Footer />
      </div>
    </div>
  );
}
export default SingleListing;

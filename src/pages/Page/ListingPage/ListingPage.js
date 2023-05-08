import "./ListingPage.scss";
import VideoList from "../../../Components/VideoList/VideoList";
import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import PageHeader from "../../../Components/PageHeader/PageHeader";

function ListingPage() {
  const params = useParams();

  const id = params.id || "84e96018-4022-434e-80bf-000ce4cd12b8";

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

  const nextVideos = useNextVideos(id);

  return (
    <div className="ListingPage">
      <PageHeader />
      <aside>
        <VideoList nextVid={nextVideos} />
      </aside>
    </div>
  );
}
export default ListingPage;

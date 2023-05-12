// import "./SingleListing.scss";

// import NavBar from "../../../Components/NavBar/NavBar";
// import ItemDisplay from "../../../Components/ItemDisplay/ItemDisplay";
// import ItemInfo from "../../../Components/ItemInfo/ItemInfo";
// // import Comments from "../../../Components/Comments/Comments";
// // import VideoList from "../../../Components/VideoList/VideoList";
// import { useState, useEffect } from "react";
// import axios from "axios";
// import { useParams } from "react-router-dom";
// import Footer from "../../../Components/Footer/Footer";

// function useItem(id) {
//   const [itemContent, setItemContent] = useState(null);

//   useEffect(() => {
//     const fetchItem = async () => {
//       const { data } = await axios.get(`http://localhost:3001/items/${id}`);
//       setItemContent(data);
//     };
//     fetchItem();
//   }, [id]);

//   return itemContent;
// }

// function useNextItems(id) {
//   const [nextItems, setNextItems] = useState([]);

//   useEffect(() => {
//     const fetchNextItems = async () => {
//       const { data } = await axios.get(`http://localhost:3001/items/`);
//       const iteminfo = data.filter((itm) => itm.id !== id);
//       setNextItems(iteminfo);
//       console.log(iteminfo);
//     };
//     fetchNextItems();
//   }, [id]);

//   return nextItems;
// }

// function SingleListing() {
//   const params = useParams();
//   const id = params.id || "84e96018-4022-434e-80bf-000ce4cd12b8";
//   const itemContent = useItem(id);
//   const nextItems = useNextItems(id);

//   if (!itemContent || nextItems.length === 0) {
//     return <div>loading...</div>;
//   }

//   return (
//     <div className="SingleListing">
//       <NavBar />
//       <ItemDisplay itemContent={itemContent} />
//       <div className="Body">
//         <section>
//           <button className="aside__button">Gone</button>
//           <ItemInfo itemContent={itemContent} />
//           {/* <Comments videoContent={videoContent} /> */}
//         </section>
//         {/* <aside>
//           <VideoList nextVid={nextVideos} />
//         </aside> */}

//         <Footer />
//       </div>
//     </div>
//   );
// }
// export default SingleListing;

import "./SingleListing.scss";

import NavBar from "../../../Components/NavBar/NavBar";
import ItemDisplay from "../../../Components/ItemDisplay/ItemDisplay";
import ItemInfo from "../../../Components/ItemInfo/ItemInfo";
// import Comments from "../../../Components/Comments/Comments";
// import VideoList from "../../../Components/VideoList/VideoList";
import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Footer from "../../../Components/Footer/Footer";

function useItem(id) {
  const [itemContent, setItemContent] = useState(null);

  useEffect(() => {
    const fetchItem = async () => {
      const { data } = await axios.get(`http://localhost:3001/items/${id}`);
      setItemContent(data);
    };
    fetchItem();
  }, [id]);

  return itemContent;
}

function useNextItems(id) {
  const [nextItems, setNextItems] = useState([]);

  useEffect(() => {
    const fetchNextItems = async () => {
      const { data } = await axios.get(`http://localhost:3001/items/`);
      const iteminfo = data.filter((itm) => itm.id !== id);
      setNextItems(iteminfo);
      console.log(iteminfo);
    };
    fetchNextItems();
  }, [id]);

  return nextItems;
}

function SingleListing() {
  const params = useParams();
  const id = params.id || "84e96018-4022-434e-80bf-000ce4cd12b8";
  const itemContent = useItem(id);
  const nextItems = useNextItems(id);

  const handleDelete = async () => {
    await axios.delete(`http://localhost:3001/items/${id}`);
    window.location.href = "/gallery"; // redirect to gallery page after delete
  };

  if (!itemContent || nextItems.length === 0) {
    return <div>loading...</div>;
  }

  return (
    <div className="SingleListing">
      <NavBar />
      <ItemDisplay itemContent={itemContent} />
      <div className="Body">
        <section>
          <ItemInfo itemContent={itemContent} />
          {/* <Comments videoContent={videoContent} /> */}
          <button className="aside__button" onClick={handleDelete}>
            Gone
          </button>
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

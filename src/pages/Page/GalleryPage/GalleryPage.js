import "./GalleryPage.scss";
import ItemList from "../../../Components/ItemList/ItemList";
import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import NavBar from "../../../Components/NavBar/NavBar";
import Footer from "../../../Components/Footer/Footer";

function GalleryPage() {
  const params = useParams();

  const id = params.id || "84e96018-4022-434e-80bf-000ce4cd12b8";

  function useNextItems(id) {
    const [nextItems, setNextItems] = useState([]);

    useEffect(() => {
      const fetchNextItems = async () => {
        const { data } = await axios.get(`http://localhost:3001/items/`);
        const iteminfo = data.filter((itm) => itm.id !== id);
        setNextItems(iteminfo);
      };
      fetchNextItems();
    }, [id]);

    return nextItems;
  }

  const nextItems = useNextItems(id);

  return (
    <div className="GalleryPage">
      <NavBar />
      <aside>
        <ItemList nextItem={nextItems} />
      </aside>

      <Footer />
    </div>
  );
}
export default GalleryPage;

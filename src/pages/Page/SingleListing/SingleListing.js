import "./SingleListing.scss";
import NavBar from "../../../Components/NavBar/NavBar";
import ItemInfo from "../../../Components/ItemInfo/ItemInfo";
import DeleteIcon from "../../../assets/Icons/delete.svg";
import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Footer from "../../../Components/Footer/Footer";
import { useNavigate } from "react-router-dom";

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
  const navigate = useNavigate();

  const params = useParams();
  const id = params.id || "84e96018-4022-434e-80bf-000ce4cd12b8";
  const itemContent = useItem(id);
  const nextItems = useNextItems(id);

  const handleDelete = async () => {
    await axios.delete(`http://localhost:3001/items/${id}`);
    navigate("/gallery"); // navigate to gallery page after delete
  };

  if (!itemContent || nextItems.length === 0) {
    return <div>loading...</div>;
  }

  return (
    <div className="SingleListing">
      <NavBar />
      <section className="single-listing">
        <ItemInfo itemContent={itemContent} />
        <div className="single-listing__container">
          <button className="single-listing__button" onClick={handleDelete}>
            <img
              className="single-listing-icon"
              src={DeleteIcon}
              alt="delete button"
            ></img>
          </button>
        </div>
      </section>
      <Footer />
    </div>
  );
}
export default SingleListing;

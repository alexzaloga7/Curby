// import "./ItemList.scss";
// import { Link } from "react-router-dom";
// import LikesAsset from "../../assets/Icons/likes.svg";
// import React, { useState } from "react";
// import Heart from "react-animated-heart";
// import axios from "axios";

// function ItemList({ nextItem }) {
//   const [isClick, setClick] = useState(false);
//   const [deletedItemId, setDeletedItemId] = useState(null);

//   const handleDelete = async (itemId, event) => {
//     event.preventDefault();
//     try {
//       await axios.delete(`http://localhost:3001/items/${itemId}`);
//       // Refresh the item list after the item has been deleted
//       // window.location.reload();
//       setDeletedItemId(itemId);
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   const filteredNextItem = nextItem.filter((item) => item.id !== deletedItemId);

//   return (
//     <div>
//       <aside className="aside">
//         {filteredNextItem.map((item) => (
//           <Link key={item.id} to={`/${item.id}`} className="aside__link">
//             <div key={item.id} className="aside__box">
//               <div key={item.id} className="aside__video">
//                 <img
//                   className="aside__video"
//                   src={item.image}
//                   alt="item preview list"
//                 ></img>
//               </div>
//               <div className="aside__text">
//                 <div className="aside__description">
//                   <div className="aside__description-box">
//                     <h2 className="aside__title">{item.title}</h2>
//                     <p className="aside__location">{item.location}</p>
//                   </div>
//                   <div className="aside__likes">
//                     <Heart
//                       isClick={isClick}
//                       onClick={(event) => {
//                         event.preventDefault();
//                         setClick(!isClick);
//                       }}
//                       isclick={isClick} // add this line to fix the error
//                     />

//                     <button
//                       className="aside__button"
//                       onClick={(event) => handleDelete(item.id, event)}
//                     >
//                       Gone
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </Link>
//         ))}
//       </aside>
//     </div>
//   );
// }

// export default ItemList;

import "./ItemList.scss";
import { Link } from "react-router-dom";
import LikesAsset from "../../assets/Icons/likes.svg";
import React, { useState, useEffect } from "react";
import Heart from "react-animated-heart";
import axios from "axios";

function ItemList({ nextItem }) {
  const [deletedItemId, setDeletedItemId] = useState(null);
  const [likedItems, setLikedItems] = useState({});

  useEffect(() => {
    // Load the liked status of each item from localStorage
    const newLikedItems = {};
    nextItem.forEach((item) => {
      const storedValue = localStorage.getItem(item.id);
      if (storedValue !== null) {
        newLikedItems[item.id] = storedValue === "true";
      }
    });
    setLikedItems(newLikedItems);
  }, [nextItem]);

  const handleDelete = async (itemId, event) => {
    event.preventDefault();
    try {
      await axios.delete(`http://localhost:3001/items/${itemId}`);
      // Refresh the item list after the item has been deleted
      // window.location.reload();
      setDeletedItemId(itemId);
    } catch (error) {
      console.error(error);
    }
  };

  const filteredNextItem = nextItem.filter((item) => item.id !== deletedItemId);

  const handleLike = (itemId) => {
    const newLikedItems = {
      ...likedItems,
      [itemId]: !likedItems[itemId],
    };
    setLikedItems(newLikedItems);
    localStorage.setItem(itemId, newLikedItems[itemId]);
  };

  return (
    <div>
      <aside className="aside">
        {filteredNextItem.map((item) => (
          <Link key={item.id} to={`/${item.id}`} className="aside__link">
            <div key={item.id} className="aside__box">
              <div key={item.id} className="aside__video">
                <img
                  className="aside__video"
                  src={item.image}
                  alt="item preview list"
                ></img>
              </div>
              <div className="aside__text">
                <div className="aside__description">
                  <div className="aside__description-box">
                    <h2 className="aside__title">{item.title}</h2>
                    <p className="aside__location">{item.location}</p>
                  </div>
                  <div className="aside__likes">
                    <Heart
                      isClick={likedItems[item.id]}
                      onClick={(event) => {
                        event.preventDefault();
                        handleLike(item.id);
                      }}
                      isclick={likedItems[item.id]}
                    />

                    <button
                      className="aside__button"
                      onClick={(event) => handleDelete(item.id, event)}
                    >
                      Gone
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </aside>
    </div>
  );
}

export default ItemList;
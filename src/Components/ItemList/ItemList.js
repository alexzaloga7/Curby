import "./ItemList.scss";
import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import Heart from "react-animated-heart";

function ItemList({ nextItem }) {
  const [likedItems, setLikedItems] = useState({});
  const [claimedItems, setClaimedItems] = useState({});
  const [asideBackground, setAsideBackground] = useState("");

  // useEffect for liked/loved items and claimed

  useEffect(() => {
    const newLikedItems = {};
    const newClaimedItems = {};
    nextItem.forEach((item) => {
      const storedLikedValue = localStorage.getItem(item.id);
      if (storedLikedValue !== null) {
        newLikedItems[item.id] = storedLikedValue === "true";
      }
      const storedClaimedValue = localStorage.getItem(`claimed_${item.id}`);
      if (storedClaimedValue !== null) {
        newClaimedItems[item.id] = storedClaimedValue === "true";
      }
    });
    setLikedItems(newLikedItems);
    setClaimedItems(newClaimedItems);
  }, [nextItem]);

  const filteredNextItem = nextItem.filter((item) => item.id);

  // handlet even for likes/loves & remember state even when refreshing page

  const handleLike = (itemId) => {
    const newLikedItems = {
      ...likedItems,
      [itemId]: !likedItems[itemId],
    };
    setLikedItems(newLikedItems);
    localStorage.setItem(itemId, newLikedItems[itemId]);
  };

  // handle event for items claimed & remember state even when refreshing page

  const handleClaimed = (itemId, event) => {
    event.preventDefault();
    const newClaimedItems = {
      ...claimedItems,
      [itemId]: !claimedItems[itemId],
    };
    setClaimedItems(newClaimedItems);
    localStorage.setItem(`claimed_${itemId}`, newClaimedItems[itemId]);
    setAsideBackground(newClaimedItems[itemId] ? "claimed" : "");
  };

  return (
    <aside className={`aside ${asideBackground}`}>
      {filteredNextItem.map((item) => (
        <Link key={item.id} to={`/${item.id}`} className="aside__link">
          <div key={item.id} className="aside__box">
            <div key={item.id} className="aside__image">
              <img
                className={`aside__image ${
                  claimedItems[item.id] ? "claimed" : ""
                }`}
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
                  />
                  <button
                    className={`aside__button ${
                      claimedItems[item.id] ? "claimed" : ""
                    }`}
                    onClick={(event) => handleClaimed(item.id, event)}
                  >
                    Claimed
                  </button>
                </div>
              </div>
            </div>
          </div>
        </Link>
      ))}
    </aside>
  );
}

export default ItemList;

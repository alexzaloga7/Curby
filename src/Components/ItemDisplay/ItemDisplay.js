import "./ItemDisplay.scss";

function ItemDisplay(props) {
  return (
    <div className="single-item">
      <img
        className="single-item__image"
        src={props.itemContent.image}
        alt="item image"
      ></img>
    </div>
  );
}

export default ItemDisplay;

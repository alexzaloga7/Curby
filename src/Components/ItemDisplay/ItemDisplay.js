import "./ItemDisplay.scss";

function ItemDisplay(props) {
  return (
    <div className="single-item">
      <img
        className="single-item__content"
        src={props.itemContent.image}
        alt="item preview list"
      ></img>
    </div>
  );
}

export default ItemDisplay;

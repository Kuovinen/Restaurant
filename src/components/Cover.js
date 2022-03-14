export default function Cover(props) {
  function hide() {
    props.setCoverDisplay("none");
  }
  return (
    <div
      className="greyout"
      onClick={hide}
      style={{ display: props.coverDisplay }}
    >
      <div className="selectedDishCard">
        <div className="selectedDishCardClose">X</div>
        <div className="selectedDishTitle">
          {props.selectedDish.selectedDishTitle}
        </div>
        <img
          className="selectedDish"
          src={props.selectedDish.selectedDishImg}
          alt="selectedDishImg"
        />

        <p className="ingredients">{props.selectedDish.ingredients}</p>
        <button className="selectedDishClose">CLOSE</button>
      </div>
    </div>
  );
}

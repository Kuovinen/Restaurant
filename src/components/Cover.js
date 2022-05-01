import { useSelector, useDispatch } from "react-redux";
import { toggleDish } from "../actions.js";
export default function Cover(props) {
  const dispatch = useDispatch();
  const dishDisplay = useSelector((state) => {
    return state.visualReducer.dishDisplay;
  });
  function hide() {
    dispatch(toggleDish());
  }
  return (
    <div className="greyout" onClick={hide} style={{ display: dishDisplay }}>
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

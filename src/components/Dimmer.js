import { useSelector, useDispatch } from "react-redux";
import { toggleDish } from "../actions.js";

//Used to dim the main page before overlaying the dishDisplay or ChosenItem
export default function Cover() {
  const dispatch = useDispatch();
  const dishDisplay = useSelector((state) => {
    return state.visualReducer.dishDisplay;
  });
  const selectedDish = useSelector((state) => {
    return state.visualReducer.chosenItem;
  });
  function hide() {
    dispatch(toggleDish());
  }
  return (
    <div className="greyout" onClick={hide} style={{ display: dishDisplay }}>
      <div className="selectedDishCard">
        <div className="selectedDishTitle">
          {selectedDish.selectedDishTitle}
        </div>
        <img
          className="selectedDish"
          src={selectedDish.selectedDishImg}
          alt="selectedDishImg"
        />

        <p className="ingredients">{selectedDish.ingredients}</p>
        <button className="selectedDishClose">CLOSE</button>
      </div>
    </div>
  );
}

import { useSelector, useDispatch } from "react-redux";
import { toggleDish, selectDish, addItem } from "../actions.js";
export default function DishTab(props) {
  const dispatch = useDispatch();

  function addToOrder() {
    let object = {
      title: props.title,
      amount: 1,
      price: props.price,
      img: props.img,
      id: props.id,
    };

    dispatch(addItem(object));
  }
  //function that covers screen in black and produces and more detailed dish tab
  function displayCover() {
    dispatch(toggleDish());
    dispatch(
      selectDish({
        selectedDishTitle: props.title,
        selectedDishImg: props.img,
        ingredients: props.ingredients,
      })
    );
  }
  return (
    <div className={props.class} onClick={displayCover}>
      <img className="img" src={props.img} alt="" />
      <div className="titlePrice">
        <h4 className="title">{props.title}</h4>
        <h4 className="price">{props.price}€</h4>
        <h5 className="calories">{props.calories}</h5>
        <button
          className="add"
          onClick={(e) => {
            e.stopPropagation();
            addToOrder();
          }}
        >
          <span>+</span>
          <span className="addTxt">ADD</span>
        </button>
      </div>
    </div>
  );
}

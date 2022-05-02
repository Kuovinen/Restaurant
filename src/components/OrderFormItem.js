import { useSelector, useDispatch } from "react-redux";
import { addItem, rmvItem } from "../actions.js";
export default function OrderItem(props) {
  const dispatch = useDispatch();

  let object = {
    title: props.title,
    amount: 1,
    price: props.price,
    img: props.img,
    id: props.id,
  };
  function addToOrder() {
    dispatch(addItem(object));
  }
  function substractFromOrder() {
    dispatch(rmvItem(object));
  }
  return (
    <div className={props.class}>
      {props.img && (
        <div style={{ display: "flex", gap: "1vh" }}>
          <img className="orderImg" src={props.img} alt=""></img>
          <div
            className="minus"
            onClick={(e) => {
              e.stopPropagation();
              substractFromOrder();
            }}
            style={{ flex: 0.5 }}
          >
            -
          </div>
          <div
            className="plus"
            onClick={(e) => {
              e.stopPropagation();
              addToOrder();
            }}
            style={{ flex: 0.5 }}
          >
            +
          </div>
        </div>
      )}

      <div className="orderName">{props.title}</div>
      <div className="orderAmount">{props.amount}</div>
      <div className="orderPrice">{props.price}</div>
    </div>
  );
}

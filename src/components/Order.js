import OrderItem from "./OrderItem.js";
import { useSelector, useDispatch } from "react-redux";
import { toggleOrder } from "../actions.js";
export default function Order(props) {
  const dispatch = useDispatch();
  const orderDisplay = useSelector((state) => {
    return state.visualReducer.itemDisplay;
  });
  function hide() {
    console.log("did!");
    dispatch(toggleOrder());
  }
  return (
    <div className="greyout " style={{ display: orderDisplay }}>
      <form
        onSubmit={(event) => {
          event.preventDefault();
        }}
      >
        <div className="uiContainter">
          <button className="uiContainerBtn" onClick={hide}>
            CLOSE
          </button>
          <div className="orderContent">
            CURRENT ORDER:
            {props.orderArray.map((element, index) => (
              <OrderItem
                img={element.img}
                key={index + "order"}
                price={element.price}
                title={element.name}
                amount={element.amount}
                class="orderItemMain"
              /> //use KEY or maybe ID to later target specific element for removal
            ))}
          </div>
          <div className="totalOrderForm">
            TOTAL :{" "}
            {props.orderArray.reduce((previous, next) => {
              let result =
                parseFloat(previous) + next.price * parseFloat(next.amount);
              result = parseFloat(result);
              result = result.toFixed(2);
              return result;
            }, 0)}
            €
          </div>
          <button className="uiContainerBtn" style={{ fontWeight: 700 }}>
            ORDER
          </button>
        </div>
      </form>
    </div>
  );
}

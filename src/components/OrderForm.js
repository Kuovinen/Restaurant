import OrderFormItem from "./OrderFormItem.js";
import { useSelector, useDispatch } from "react-redux";
import { toggleOrder } from "../actions.js";
export default function Order() {
  const dispatch = useDispatch();
  const orderDisplay = useSelector((state) => {
    return state.visualReducer.orderDisplay;
  });
  const orderArray = useSelector((state) => {
    return state.shoppingReducer;
  });
  function hide() {
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
            {orderArray.map((element, index) => (
              <OrderFormItem
                img={element.img}
                key={index + "order"}
                price={element.price}
                title={element.title}
                amount={element.amount}
                class="orderItemMain"
              /> //use KEY or maybe ID to later target specific element for removal
            ))}
          </div>
          <div className="totalOrderForm">
            TOTAL :
            {orderArray.reduce((previous, next) => {
              let result = parseFloat(previous) + next.price[1];
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

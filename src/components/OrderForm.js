import OrderFormItem from "./OrderFormItem.js";
import { useSelector, useDispatch } from "react-redux";
import { toggleOrder, typeUser } from "../actions.js";
export default function Order() {
  const dispatch = useDispatch();
  const orderDisplay = useSelector((state) => {
    return state.visualReducer.orderDisplay;
  });
  const orderArray = useSelector((state) => {
    return state.shoppingReducer;
  });
  const orderTime = useSelector((state) => {
    return state.userReducer.orderTime;
  });
  const userData = useSelector((state) => {
    return state.userReducer.user;
  });
  function hide() {
    dispatch(toggleOrder());
  }
  function typeField(event) {
    let value = event.target.value;
    let field = event.target.name;

    dispatch(typeUser({ [field]: value }));
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
          </div>{" "}
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
          <div
            style={{
              color: "var(--cp-Grey)",
              fontWeight: 700,
              fontSize: "1.5rem",
            }}
          >
            Your order will be delivered to :
          </div>
          <input
            className="orderInput"
            type="text"
            name="name"
            placeholder="Name"
            value={userData.name ? userData.name : ""}
            onChange={typeField}
          />
          <input
            className="orderInput"
            type="text"
            name="address"
            placeholder="Address"
            value={userData.name ? userData.address : ""}
            onChange={typeField}
          />
          <div
            style={{
              color: "var(--cp-Grey)",
              fontWeight: 700,
              fontSize: "1.5rem",
              textAlign: "end",
              width: "90%",
              margin: "0 5%",
            }}
          >
            before {orderTime[0]}:{orderTime[1]} o'clock
          </div>
          <button className="uiContainerBtn" style={{ fontWeight: 700 }}>
            ORDER
          </button>
        </div>
      </form>
    </div>
  );
}

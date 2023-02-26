import OrderFormItem from "./OrderForm/OrderFormItem.js";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { toggleOrder, typeUser, toggleConfirm } from "../actions.js";
import Chart from "./Chart";
export default function Order() {
  const [btnTxt, setBtnTxt] = React.useState("Confirm order");
  const [promptTxt, setPromptTxt] = React.useState(
    "Your order will be delivered to :"
  );
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
  function show() {
    dispatch(toggleConfirm());
  }
  function typeField(event) {
    let value = event.target.value;
    let field = event.target.name;

    dispatch(typeUser({ [field]: value }));
  }
  function makeOrder() {
    console.log(orderArray.length);
    if (orderArray.length > 0 && userData.name && userData.address !== "") {
      //hide();
      //show();
      setBtnTxt(() => "Confirmed");
    } else if (!userData.name == "" || userData.address == "") {
      setPromptTxt(() => "Please fill out the name and addres fields.");
    }
  }
  return (
    <div className="greyout " style={{ display: orderDisplay }}>
      <form
        onSubmit={(event) => {
          event.preventDefault();
        }}
      >
        <div className="uiContainter finalOrderForm">
          <button className="uiContainerBtn" onClick={hide}>
            Close
          </button>
          <div className="orderContent">
            <span>Current order:</span>
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
            Total :{" "}
            {orderArray.reduce((previous, next) => {
              let result = previous + next.price[1];
              result = Math.round(result * 1e2) / 1e2;
              return result;
            }, 0)}{" "}
            €
          </div>
          <div className="orderText">{promptTxt}</div>
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
          <Chart time={orderTime} btnTxt={btnTxt} />
          <button
            onClick={makeOrder}
            className="uiContainerBtn"
            style={{ fontWeight: 700 }}
          >
            {btnTxt}
          </button>
        </div>
      </form>
    </div>
  );
}

import DishTab from "./Main/DishTab.js";
import dishesList from "./foodLists/dailies.js";
import MenuItem from "./Main/MenuItem.js";
import OrderFormItem from "./OrderForm/OrderFormItem.js";
import salads from "./foodLists/salads.js";
import hotDishes from "./foodLists/hots.js";
import coldDishes from "./foodLists/colds.js";
import drinks from "./foodLists/drinks.js";
import { useSelector, useDispatch } from "react-redux";
import { toggleOrder } from "../actions.js";

export default function Main() {
  const dispatch = useDispatch();
  const orderArray = useSelector((state) => {
    return state.shoppingReducer;
  });
  let menuItems = [
    { title: "Salads", dishes: salads },
    { title: "Hot dishes", dishes: hotDishes },
    { title: "Cold dishes", dishes: coldDishes },
    { title: "Drinks", dishes: drinks },
  ];

  let menu = menuItems.map((element, index) => (
    <MenuItem {...element} key={index + "menu"} />
  ));
  let dishes = dishesList.map((element, index) => (
    <DishTab {...element} class={"dishTabDaily"} key={index} id={element.key} />
  ));

  function displayOrder() {
    dispatch(toggleOrder());
  }

  return (
    <main>
      {/*DAILY DISHES*/}
      <div className="dishes">{dishes}</div>
      {/*Order form on the right*/}
      <div className="orderSection">
        <div className="currentOrder">
          Current order:
          {orderArray.map((element, index) => (
            <OrderFormItem
              key={index + "order"}
              price={element.price}
              title={element.title}
              amount={element.amount}
              class="orderItemSide"
            /> //use KEY or maybe ID to later target specific element for removal
          ))}{" "}
          <br />
          <div className="total">
            {orderArray.reduce((previous, next) => {
              let result = previous + next.price[1];
              result = Math.round(result * 1e2) / 1e2;
              return result;
            }, 0)}
            €
          </div>
          <button className="orderButton" onClick={displayOrder}>
            Order
          </button>
        </div>
      </div>

      {/*BOTTOM MENU*/}
      <div className="menu">
        <div className="menuTitle">MENU</div>
        {menu}
      </div>
    </main>
  );
}

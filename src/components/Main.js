import DishTab from "./DishTab.js";
import dishesList from "./dishes.js";
import MenuItem from "./MenuItem.js";
import menuItems from "./menu.js";
import OrderItem from "./OrderItem.js";

export default function Header(props) {
  let menu = menuItems.map((element) => (
    <MenuItem
      {...element}
      orderArray={props.orderArray}
      setOrderArray={props.setOrderArray}
    />
  ));
  let dishes = dishesList.map((element) => (
    <DishTab
      {...element}
      class={"dishTabDaily"}
      id={element.key}
      orderArray={props.orderArray}
      setOrderArray={props.setOrderArray}
    />
  ));

  return (
    <main>
      {/*DAILY DISHES*/}
      <div className="dishes">{dishes}</div>
      {/*Order form on the right*/}
      <div className="orderForm">
        <div className="currentOrder">
          CURRENT ORDER:
          {props.orderArray.map((element, index) => (
            <OrderItem
              key={index}
              price={element.price}
              title={element.name}
              amount={element.amount}
            /> //use KEY or maybe ID to later target specific element for removal
          ))}
          <div className="total">
            {props.orderArray.reduce((previous, next) => {
              console.log(typeof previous + " " + previous);
              let result =
                parseFloat(previous) + next.price * parseFloat(next.amount);
              result = parseFloat(result);
              result = result.toFixed(2);
              return result;
            }, 0)}
            €
          </div>
          <br />
          <button className="orderButton">ORDER</button>
        </div>
      </div>

      {/*BOTTOM MENU*/}
      <div className="menu">{menu}</div>
    </main>
  );
}

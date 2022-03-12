import DishTab from "./DishTab.js";
import dishesList from "./dishes.js";
import MenuItem from "./MenuItem.js";
import menuItems from "./menu.js";
import OrderItem from "./OrderItem.js";
let menu = menuItems.map((element) => <MenuItem {...element} />);

export default function Header(props) {
  let dishes = dishesList.map((element) => (
    <DishTab
      {...element}
      id={element.key}
      orderArray={props.orderArray}
      setOrderArray={props.setOrderArray}
    />
  ));

  return (
    <main>
      <div className="dishes">{dishes}</div>
      <div className="currentOrder">
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
        </div>{" "}
      </div>
      <div className="menu">{menu}</div>
    </main>
  );
}

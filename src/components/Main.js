import DishTab from "./DishTab.js";
import dishesList from "./dishes.js";
import MenuItem from "./MenuItem.js";
import menuItems from "./menu.js";
import OrderItem from "./OrderItem.js";

let dishes = dishesList.map((element) => <DishTab {...element} />);
let menu = menuItems.map((element) => <MenuItem {...element} />);
let order = [
  <OrderItem title="Item 1" amount="1" />,
  <OrderItem title="Item 2" amount="1" />,
];

export default function Header() {
  return (
    <main>
      <div className="dishes">{dishes}</div>
      <div className="currentOrder">
        {order} <div className="total">2</div>{" "}
      </div>
      <div className="menu">{menu}</div>
    </main>
  );
}

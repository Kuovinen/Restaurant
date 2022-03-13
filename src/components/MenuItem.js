import { useState } from "react";

import DishTab from "./DishTab.js";

export default function MenuItem(props) {
  let dishes = props.dishes.map((element) => (
    <DishTab
      {...element}
      class={"dishTab"}
      id={element.key}
      orderArray={props.orderArray}
      setOrderArray={props.setOrderArray}
    />
  ));

  function openMenu() {
    display == "none" ? setDisplay("grid") : setDisplay("none");
  }
  let [display, setDisplay] = useState("none");

  return (
    <div>
      <div
        className="menuButton"
        onClick={() => {
          openMenu();
        }}
      >
        {props.title}
      </div>
      <div className="menuContent" style={{ display: display }}>
        {dishes}
      </div>
    </div>
  );
}

import { useState } from "react";

import DishTab from "./DishTab.js";

export default function MenuItem(props) {
  let dishes = props.dishes.map((element) => (
    <DishTab {...element} class={"dishTab"} id={element.key} />
  ));

  function openMenu() {
    display === "none" ? setDisplay("grid") : setDisplay("none");
  }
  let [display, setDisplay] = useState("none");
  const indicator = display === "none" ? "-" : "▼";
  return (
    <div>
      <div
        className="menuButton"
        onClick={() => {
          openMenu();
        }}
      >
        {indicator} {props.title}
      </div>
      <div className="menuContent" style={{ display: display }}>
        {dishes}
      </div>
    </div>
  );
}

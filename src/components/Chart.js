import React from "react";
import { useSelector } from "react-redux";
//import motoDriver from "./images/motoDriver.svg";
//import foodTray from "./imaes/foodTray.svg";
//Lower section of the calculator with icons and animations.
function Chart(props) {
  const orderArray = useSelector((state) => {
    return state.shoppingReducer;
  });
  const itemAmount = orderArray.reduce((prev, next) => {
    return prev + next.amount;
  }, 0);
  const style =
    props.btnTxt !== "Confirmed" ? { opacity: "1" } : { opacity: "0" }; //dissapear chart icons
  const style2 = //change chart container from flex to allow anition inside
    props.btnTxt !== "Confirmed" ? { display: "flex" } : { opacity: "block" };
  const style3 = //make animated elements appear
    props.btnTxt !== "Confirmed" ? { display: "none" } : { display: "block" };
  //food drop animation refs
  const foodRef = React.useRef(null);
  const isFirstRun = React.useRef(true);
  const oldItemsAmount = React.useRef(itemAmount);
  //useEffect to animate food drop icon
  React.useEffect(() => {
    console.log("ran");
    function animationCleaner() {
      setTimeout(() => {
        if (foodRef?.current !== null && !isFirstRun.current)
          foodRef.current.className = "noneAnimate";
      }, 210);
    }
    if (
      //if item amount increased
      foodRef?.current !== null &&
      !isFirstRun.current &&
      oldItemsAmount.current < itemAmount
    ) {
      //set animation
      foodRef.current.className = "animate";
      oldItemsAmount.current = itemAmount;
      return animationCleaner(); //clean up animation
    } else isFirstRun.current = false;
    oldItemsAmount.current = itemAmount; //update amount on decrease
  }, [itemAmount, foodRef, isFirstRun]);

  return (
    <div className="chart" style={style2}>
      <section className="motoChart" style={style}>
        <div id="foodIcon">
          <img
            id="foodTray"
            ref={foodRef}
            src="/images/foodTray.svg"
            alt="foodTray icon"
          />
        </div>
        <img
          id="motobike"
          src="/images/motoDriver.svg"
          alt="motorbike driver icon"
        />
      </section>

      <section className="arrow" style={style}>
        <div></div>
      </section>
      <section className="endPointChart" style={style}>
        <div className="endPointChartTxt">
          {/*padded with 0 if number is less than 10*/}
          {props.time[0]} :{props.time[1]} o'clock
        </div>
      </section>
      <p id="gratitude" style={style3}>
        Thank you for your order!
      </p>
      <img
        id="motobike2"
        src="/images/motoDriver.svg"
        alt="motorbike driver icon"
        style={style3}
      />
    </div>
  );
}

export default Chart;

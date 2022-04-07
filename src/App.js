import React, { useState } from "react";

import Header from "./components/Header.js";
import Main from "./components/Main.js";
import Cover from "./components/Cover.js";
import Order from "./components/Order.js";
import SignInForm from "./components/SignInForm.js";
function App() {
  let [orderArray, setOrderArray] = useState([]);
  let [coverDisplay, setCoverDisplay] = useState("none");
  let [orderDisplay, setOrderDisplay] = useState("none");
  let [signgInFormDisplay, setSigngInFormDisplay] = useState("none");
  let [selectedDish, setSelectedDish] = useState({
    selectedDishTitle: "Pestromy",
    selectedDishImg: "/images/dish5.jpeg",
    ingredients: "Food item 1, food item 2",
  });
  return (
    <div className="App">
      <img className="bkg" src={"/images/background.jpg"} alt="" />
      <Header setSigngInFormDisplay={setSigngInFormDisplay} />
      <Main
        orderArray={orderArray}
        setOrderArray={setOrderArray}
        coverDisplay={coverDisplay}
        setCoverDisplay={setCoverDisplay}
        setSelectedDish={setSelectedDish}
        setOrderDisplay={setOrderDisplay}
      />
      <Cover
        coverDisplay={coverDisplay}
        setCoverDisplay={setCoverDisplay}
        setSelectedDish={setSelectedDish}
        selectedDish={selectedDish}
      />
      <SignInForm
        signgInFormDisplay={signgInFormDisplay}
        setSigngInFormDisplay={setSigngInFormDisplay}
      />
      <Order
        orderDisplay={orderDisplay}
        orderArray={orderArray}
        setOrderDisplay={setOrderDisplay}
      />
    </div>
  );
}

export default App;

import React, { useState } from "react";
import Header from "./components/Header.js";
import Main from "./components/Main.js";
import Cover from "./components/Cover.js";
import Order from "./components/Order.js";
import SignInForm from "./components/SignInForm.js";
function App() {
  let [orderArray, setOrderArray] = useState([]);
  let [selectedDish, setSelectedDish] = useState({
    selectedDishTitle: "Pestromy",
    selectedDishImg: "/images/dish5.jpeg",
    ingredients: "Food item 1, food item 2",
  });
  return (
    <div className="App">
      <img className="bkg" src={"/images/background.jpg"} alt="" />
      <Header />
      <Main
        orderArray={orderArray}
        setOrderArray={setOrderArray}
        setSelectedDish={setSelectedDish}
      />
      <Cover setSelectedDish={setSelectedDish} selectedDish={selectedDish} />
      <SignInForm />
      <Order orderArray={orderArray} />
    </div>
  );
}

export default App;

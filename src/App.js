import React, { useState } from "react";

import Header from "./components/Header.js";
import Main from "./components/Main.js";
import Cover from "./components/Cover.js";

function App() {
  let [orderArray, setOrderArray] = useState([]);
  let [coverDisplay, setCoverDisplay] = useState("flex");
  let [selectedDish, setSelectedDish] = useState({
    selectedDishTitle: "Pestromy",
    selectedDishImg: "/images/dish5.jpeg",
  });
  return (
    <div className="App">
      <img className="bkg" src={"/images/background.jpg"} alt="" />
      <Header />
      <Main
        orderArray={orderArray}
        setOrderArray={setOrderArray}
        setCoverDisplay={setCoverDisplay}
        setSelectedDish={setSelectedDish}
      />
      <Cover
        coverDisplay={coverDisplay}
        setCoverDisplay={setCoverDisplay}
        setSelectedDish={setSelectedDish}
        selectedDish={selectedDish}
      />
    </div>
  );
}

export default App;

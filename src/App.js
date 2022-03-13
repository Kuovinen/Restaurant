import React, { useState } from "react";

import Header from "./components/Header.js";
import Main from "./components/Main.js";

function App() {
  let [orderArray, setOrderArray] = useState([]);

  return (
    <div className="App">
      <img className="bkg" src={"/images/background.jpg"} alt="" />
      <Header />
      <Main orderArray={orderArray} setOrderArray={setOrderArray} />
    </div>
  );
}

export default App;

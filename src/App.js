import React, { useState } from "react";

import Header from "./components/Header.js";
import Main from "./components/Main.js";
import Cover from "./components/Cover.js";

function App() {
  let [orderArray, setOrderArray] = useState([]);
  let [coverDisplay, setCoverDisplay] = useState(["block"]);
  return (
    <div className="App">
      <img className="bkg" src={"/images/background.jpg"} alt="" />
      <Header />
      <Main orderArray={orderArray} setOrderArray={setOrderArray} />
      <Cover coverDisplay={coverDisplay} setCoverDisplay={setCoverDisplay} />
    </div>
  );
}

export default App;

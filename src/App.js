import React, { useState } from "react";

import Header from "./components/Header.js";
import Main from "./components/Main.js";

function App() {
  let [orderArray, setOrderArray] = useState([]);

  return (
    <div className="App">
      <Header />
      <Main orderArray={orderArray} setOrderArray={setOrderArray} />
    </div>
  );
}

export default App;

import React, { useState } from "react";
import Header from "./components/Header.js";
import Main from "./components/Main.js";
import Cover from "./components/Cover.js";
import OrderForm from "./components/OrderForm.js";
import SignInForm from "./components/SignInForm.js";
function App() {
  let [orderArray, setOrderArray] = useState([]);

  return (
    <div className="App">
      <img className="bkg" src={"/images/background.jpg"} alt="" />
      <Header />
      <Main orderArray={orderArray} setOrderArray={setOrderArray} />
      <Cover />
      <SignInForm />
      <OrderForm orderArray={orderArray} />
    </div>
  );
}

export default App;

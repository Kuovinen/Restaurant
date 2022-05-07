import React, { useState } from "react";
import Header from "./components/Header.js";
import Main from "./components/Main.js";
import Cover from "./components/Cover.js";
import OrderForm from "./components/OrderForm.js";
import SignInForm from "./components/SignInForm.js";
import RegistrationForm from "./components/RegistrationForm.js";
import { useDispatch } from "react-redux";
import { getUsers } from "./actions.js";
function App() {
  let [orderArray, setOrderArray] = useState([]);

  const dispatch = useDispatch();
  //if session storage exist add it's contents to list of users.
  //this is where user sign in data is saved, instead of an actual server for now.
  //THIS IS an improper approach the needs a server solution instead
  sessionStorage.getItem("key") &&
    dispatch(getUsers(JSON.parse(sessionStorage.getItem("key"))));

  return (
    <div className="App">
      <img className="bkg" src={"/images/background.jpg"} alt="" />
      <Header />
      <Main orderArray={orderArray} setOrderArray={setOrderArray} />
      <Cover />
      <SignInForm />
      <RegistrationForm />
      <OrderForm orderArray={orderArray} />
    </div>
  );
}

export default App;

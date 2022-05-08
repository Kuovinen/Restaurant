import React from "react";
import Header from "./components/Header.js";
import Main from "./components/Main.js";
import Cover from "./components/Cover.js";
import OrderForm from "./components/OrderForm.js";
import SignInForm from "./components/SignInForm.js";
import RegistrationForm from "./components/RegistrationForm.js";
import OrderConfirmation from "./components/OrderConfirmation.js";
import { useDispatch } from "react-redux";
import { getUsers } from "./actions.js";
function App() {
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
      <Main />
      <Cover />
      <SignInForm />
      <RegistrationForm />
      <OrderForm />
      <OrderConfirmation />
    </div>
  );
}

export default App;

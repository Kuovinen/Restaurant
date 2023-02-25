import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { changeTime } from "../actions.js";
import LogInRegisterSection from "./Header/LogInRegisterSection.js";

export default function Header() {
  const dispatch = useDispatch();
  //selected time of order
  const orderTime = useSelector((state) => {
    return state.userReducer.orderTime;
  });
  //change time of order
  function modTime(event) {
    dispatch(changeTime([event.target.name, event.target.value]));
  }

  return (
    <div className="headContainer">
      <header>
        <div className="logo">
          <span id="la">la</span>
          <span style={{ color: "var(--cp-Green)" }}>C</span>asa
        </div>
        <LogInRegisterSection />

        <div className="locations">
          <span className="labelPlace">Locations:</span>
          <select className="locationSelect" name="option">
            <option value="1">Keskivuori 78b, Helsinki</option>
            <option value="2">Suomalahti 30, Vantaa</option>
            <option value="3">Laarikoski 10a, Espoo</option>
          </select>
        </div>
        <div className="time">
          <div>
            <span className="labelTime">Delivery time: </span>
            <span className="chosenTime">
              {orderTime[0]}:{orderTime[1]}
            </span>
          </div>
          <div>
            <select className="deliveryTime" name="hours" onChange={modTime}>
              <option value="09">09</option>
              <option value="10">10</option>
              <option value="11">11</option>
              <option value="12">12</option>
              <option value="13">13</option>
              <option value="14">14</option>
              <option value="15">15</option>
              <option value="16">16</option>
              <option value="17">17</option>
            </select>
            <select className="deliveryTime" name="minutes" onChange={modTime}>
              <option value="00">00</option>
              <option value="15">15</option>
              <option value="30">30</option>
              <option value="45">45</option>
            </select>
          </div>
        </div>
      </header>
    </div>
  );
}

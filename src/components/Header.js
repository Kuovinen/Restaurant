import React from "react";
export default function Header(props) {
  const [hours, setHours] = React.useState("09");
  const [minutes, setMinutes] = React.useState("00");
  function chngHours(event) {
    setHours(event.target.value);
  }
  function chngMins(event) {
    setMinutes(event.target.value);
  }
  function openLogIn() {
    props.setSigngInFormDisplay("flex");
  }
  return (
    <header>
      <div className="logo">
        la<span style={{ color: "var(--cp-Green)" }}>C</span>ASA
      </div>

      <div className="login">
        <button className="logBtn" onClick={openLogIn}>
          SignIn
        </button>
      </div>
      <div className="locations">
        <span className="label">LOCATIONS:</span>
        <select className="locationSelect" name="option">
          <option value="1">Keskivuori 78b, Helsinki</option>
          <option value="2">Suomalahti 30, Vantaa</option>
          <option value="3">Laarikoski 10a, Espoo</option>
        </select>
      </div>
      <div className="time">
        <span className="label">DESIRED DELIVERY TIME: </span>{" "}
        <div
          style={{
            color: "var(--cp-White)",
            margin: "0 1rem",
            fontSize: "4vh",
          }}
        >
          {hours}:{minutes}
        </div>
        <select className="deliveryTime" name="option" onChange={chngHours}>
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
        <select className="deliveryTime" name="option" onChange={chngMins}>
          <option value="00">00</option>
          <option value="15">15</option>
          <option value="30">30</option>
          <option value="45">45</option>
        </select>
      </div>
    </header>
  );
}

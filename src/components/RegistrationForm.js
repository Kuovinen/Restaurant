import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { toggleRegDisplay, setRegistration } from "../actions.js";
export default function RegistrationForm() {
  const dispatch = useDispatch();
  const regDisplay = useSelector((state) => {
    return state.userReducer.registrationDisplay;
  });
  const registeringUser = useSelector((state) => {
    return state.userReducer.regUser;
  });
  const registerationFeedback = useSelector((state) => {
    return state.userReducer.registerationFeedback;
  });
  function hide() {
    dispatch(toggleRegDisplay());
  }
  function typeField(event) {
    let value = event.target.value;
    let field = event.target.name;

    dispatch(setRegistration({ ...registeringUser, [field]: value }));
  }

  function handleClose() {
    hide();
  }
  //prevent default behaviour, necessary
  function handleSubmit(event) {
    event.preventDefault();
  }
  return (
    <div className="greyout" style={{ display: regDisplay }}>
      <form
        onSubmit={(event) => {
          handleSubmit(event);
        }}
      >
        <div className="uiContainter" style={{ marginTop: "10vh" }}>
          <button className="uiContainerBtn" onClick={handleClose}>
            CLOSE
          </button>
          <div className="logInGrid">
            <input
              type="text"
              name="username"
              value={registeringUser.username}
              onChange={typeField}
              placeholder="Name"
            />
            <input
              type="text"
              name="address"
              value={registeringUser.address}
              onChange={typeField}
              placeholder="Address"
            />
            <input
              type="password"
              name="password"
              value={registeringUser.password}
              onChange={typeField}
              placeholder="Password"
            />
            <span style={{ color: "red", margin: "0 auto" }}>
              {registerationFeedback}
            </span>
          </div>
          <button
            className="uiContainerBtn"
            /*onClick={handleSignIn}*/
            style={{ fontWeight: 700 }}
          >
            REGISTER
          </button>{" "}
        </div>
      </form>
    </div>
  );
}

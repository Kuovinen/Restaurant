import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { toggleForm, logInUser, setLogIn, resetFeedback } from "../actions.js";

export default function SignInForm() {
  const dispatch = useDispatch();
  const formDisplay = useSelector((state) => {
    return state.userReducer.formDisplay;
  });
  const logIn = useSelector((state) => {
    return state.userReducer.logIn;
  });
  const feedBack = useSelector((state) => {
    return state.userReducer.signInFeedback;
  });
  function hide() {
    dispatch(toggleForm());
  }
  function typeField(event) {
    let value = event.target.value;
    let field = event.target.name;

    dispatch(setLogIn({ ...logIn, [field]: value }));
  }
  function handleClose() {
    dispatch(setLogIn({ username: "", password: "" }));
    dispatch(resetFeedback());
    hide();
  }
  //if data in fields, handle it
  function handleSignIn() {
    if (logIn.username !== "" && logIn.password !== "") {
      //check if login user exists and handle the outcome
      dispatch(logInUser({ name: logIn.name, password: logIn.password }));
      //empty out the filed in any case
      dispatch(setLogIn({ username: "", password: "" }));
      console.log(feedBack);
    }
  }
  //prevent default behaviour, necessary
  function handleSubmit(event) {
    event.preventDefault();
  }
  return (
    <div className="greyout" style={{ display: formDisplay }}>
      <form
        onSubmit={(event) => {
          handleSubmit(event);
        }}
      >
        <div className="uiContainter" style={{ marginTop: "10vh" }}>
          <button className="uiContainerBtn" onClick={handleClose}>
            CLOSE
          </button>
          <p
            style={{
              color: "var(--cp-Grey)",
              opacity: "0.35",
              margin: "0 1rem",
            }}
          >
            Make your own user or use name: 'user1', password: 'pas1' for
            testing
          </p>
          <div className="logInGrid">
            <input
              type="text"
              name="username"
              value={logIn.username}
              onChange={typeField}
              placeholder="Name"
            />

            <input
              type="password"
              name="password"
              value={logIn.password}
              onChange={typeField}
              placeholder="Password"
            />
            <span style={{ color: "red", margin: "0 auto" }}>{feedBack}</span>
          </div>
          <button className="uiContainerBtn" onClick={handleSignIn}>
            SIGN IN
          </button>
        </div>
      </form>
    </div>
  );
}

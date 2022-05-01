import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { toggleForm } from "../actions.js";
export default function SignInForm(props) {
  const dispatch = useDispatch();
  const formDisplay = useSelector((state) => {
    return state.visualReducer.formDisplay;
  });
  const [user, setUser] = React.useState({ name: "", password: "" });
  function hide() {
    dispatch(toggleForm());
  }
  function typeField(event) {
    setUser({ ...user, [event.target.name]: event.target.value });
  }
  function handleSubmit(event) {
    event.preventDefault();
    if (user.name && user.password) {
      console.log(user.name + " " + user.password);
      props.setSigngInFormDisplay("none");
    }
  }
  return (
    <div className="greyout" style={{ display: formDisplay }}>
      <form
        onSubmit={(event) => {
          handleSubmit(event);
        }}
      >
        <div className="uiContainter" style={{ marginTop: "10vh" }}>
          <button className="uiContainerBtn" onClick={hide}>
            CLOSE
          </button>
          <div className="logInGrid">
            <input
              type="text"
              name="name"
              value={user.name}
              onChange={typeField}
              placeholder="name"
            />

            <input
              type="password"
              name="password"
              value={user.password}
              onChange={typeField}
              placeholder="password"
            />
          </div>
          <button className="uiContainerBtn" style={{ fontWeight: 700 }}>
            SIGN IN
          </button>{" "}
        </div>
      </form>
    </div>
  );
}

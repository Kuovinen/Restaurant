import { useSelector, useDispatch } from "react-redux";
import { toggleForm } from "../actions.js";
import userIcon from "../user.svg";
export default function LogIn() {
  const dispatch = useDispatch();
  const user = useSelector((state) => {
    console.log(state.userReducer);
    return state.userReducer.user;
  });

  function openLogIn() {
    dispatch(toggleForm());
  }
  //if there is a user return SignIn button, esle return a user logo
  return user.name === null ? (
    <div className="login">
      <button className="logBtn1" onClick={openLogIn}>
        SignIn
      </button>
    </div>
  ) : (
    <div className="login2">
      <div className="userData">
        <div className="user"> {user.name}</div>
        <div className="points"> Points: {user.points}</div>
      </div>

      <button className="logBtn2" onClick={openLogIn}>
        <img src={userIcon} alt="user icon" id="usericon" />
      </button>
    </div>
  );
}

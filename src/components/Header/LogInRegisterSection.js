import { useSelector, useDispatch } from "react-redux";
import { toggleForm, toggleRegDisplay, logOutUser } from "../../actions.js";
import userIcon from "../../user.svg";
export default function LogInRegisterSection() {
  const dispatch = useDispatch();
  const user = useSelector((state) => {
    console.log(state.userReducer);
    return state.userReducer.user;
  });

  function openLogIn() {
    dispatch(toggleForm());
  }
  function openRegister() {
    dispatch(toggleRegDisplay());
  }

  function logOut() {
    dispatch(logOutUser());
  }
  //if there is a user return SignIn button, esle return a user logo
  return user.name === null ? (
    <div className="login">
      <button className="register" onClick={openRegister}>
        Register
      </button>
      <button className="logBtn1" onClick={openLogIn}>
        SignIn
      </button>
    </div>
  ) : (
    <div className="login2">
      <div className="userData">
        <div className="user"> {user.name}</div>
        <div className="points"> Points: {user.points}</div>
        <button className="logOut" onClick={logOut}>
          Log out
        </button>
      </div>

      <button className="userBtn">
        <img src={userIcon} alt="user icon" id="usericon" />
      </button>
    </div>
  );
}

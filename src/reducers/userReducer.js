export default function userReducer(
  state = {
    formDisplay: "none",
    registrationDisplay: "none",
    regUser: { username: "", password: "", address: "" },
    logIn: { username: "", password: "" },
    user: { name: null, points: 0 },
    users: [
      {
        username: "user1",
        password: "pas1",
        address: "Finland 123",
        points: 10,
      },
      {
        username: "user2",
        password: "pas2",
        address: "American 456",
        points: 20,
      },
    ],
    signInFeedback: "",
    registerationFeedback: "",
  },
  action
) {
  function makeLoginsignInFeedback(foundUser) {
    let reply = "";
    foundUser.length > 1
      ? console.log("more than one user found! ERROR!")
      : (reply = "");
    foundUser.length === 1
      ? (reply = "Logged IN")
      : (reply = "No such user or wrong password.");
    return reply;
  }
  switch (action.type) {
    case "SET_USER":
      console.log("fired off logInUser");

      //check if login user exists
      let foundUser = state.users.filter(
        (element) =>
          element.username === state.logIn.username &&
          element.password === state.logIn.password
      );
      //give signInFeedback about user search
      let reply = makeLoginsignInFeedback(foundUser);
      //return their data if found, or null user template if not

      return foundUser.length === 1
        ? {
            ...state,
            user: { name: foundUser[0].username, points: foundUser[0].points },
            formDisplay: "none",
          }
        : { ...state, user: { name: null, points: 0 }, signInFeedback: reply };
    //for login input
    case "SET_LOGIN":
      return { ...state, logIn: action.payload };
    //for registration input
    case "SET_REG":
      let testName = /^[A-Za-z0-9]*$/.test(action.payload.username);

      return {
        ...state,
        regUser: action.payload,
        registerationFeedback: testName
          ? ""
          : "plese only use letters and numbers for the username",
      };
    case "LOG_OUT":
      return { ...state, user: { name: null, points: 0 }, signInFeedback: "" };
    case "RESET_signInFeedback":
      return { ...state, signInFeedback: "" };
    case "TOGGLE_FORM_DISPLAY":
      console.log("fired off FORM_DISPLAY!");

      return {
        ...state,
        formDisplay: state.formDisplay === "none" ? "flex" : "none",
      };
    case "TOGGLE_REG_DISPLAY":
      console.log("fired off REG_DISPLAY!");

      return {
        ...state,
        registrationDisplay:
          state.registrationDisplay === "none" ? "flex" : "none",
      };
    default:
      return state;
  }
}

/*
function doesRegistrationHappen() {
  //check if username is valid
  let testName = /^[A-Za-z0-9]*$/.test(state.logIn.username);
  if (!testName) {
    state.signInFeedback = "please only use letters or numbers for your username";
  } else state.signInFeedback = "";
}
*/

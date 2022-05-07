export default function userReducer(
  state = {
    formDisplay: "none",
    logIn: { username: "", password: "" },
    user: { name: null, points: 0 },
    users: [
      { username: "user1", password: "pas1", points: 10 },
      { username: "user2", password: "pas2", points: 20 },
    ],
    feedback: "",
  },
  action
) {
  function makeLoginFeedback(foundUser) {
    foundUser.length > 1
      ? console.log("more than one user found! ERROR!")
      : (state.feedback = "");
    foundUser.length === 1
      ? (state.feedback = "Logged IN")
      : (state.feedback = "No such user or wrong password.");
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
      //give feedback about user search
      makeLoginFeedback(foundUser);
      //return their data if found, or null user template if not

      return foundUser.length === 1
        ? {
            ...state,
            user: { name: foundUser[0].username, points: foundUser[0].points },
            formDisplay: "none",
          }
        : { ...state, user: { name: null, points: 0 } };
    case "SET_LOGIN":
      return { ...state, logIn: action.payload };
    case "LOG_OUT":
      return { ...state, user: { name: null, points: 0 }, feedback: "" };
    case "RESET_FEEDBACK":
      return { ...state, feedback: "" };
    case "TOGGLE_FORM_DISPLAY":
      console.log("fired off FORM_DISPLAY!");

      return {
        ...state,
        formDisplay: state.formDisplay === "none" ? "flex" : "none",
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
    state.feedback = "please only use letters or numbers for your username";
  } else state.feedback = "";
}
*/

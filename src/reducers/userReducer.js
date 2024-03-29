export default function userReducer(
  state = {
    formDisplay: "none",
    registrationDisplay: "none",
    regUser: { username: "", password: "", address: "", points: 0 },
    logIn: { username: "user1", password: "pas1" },
    user: { name: null, address: "", points: 0 },
    orderTime: ["09", "00"],
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
        address: "America 456",
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
            user: {
              name: foundUser[0].username,
              address: foundUser[0].address,
              points: foundUser[0].points,
            },
            formDisplay: "none",
          }
        : {
            ...state,
            user: { name: null, address: "", points: 0 },
            signInFeedback: reply,
          };

    case "REG_USER":
      let nametest = /^[A-Za-z0-9]*$/.test(action.payload.username);
      if (nametest) {
        //session storage data check and addition:
        //THIS IS an improper approach the needs a server solution instead
        if (sessionStorage.getItem("key")) {
          let currentData = JSON.parse(sessionStorage.getItem("key"));
          let newData = { ...action.payload, points: 900 };
          sessionStorage.setItem(
            "key",
            JSON.stringify([...currentData, newData])
          );
        } else {
          sessionStorage.setItem(
            "key",
            JSON.stringify([{ ...action.payload, points: 900 }])
          );
        }
        return {
          ...state,
          users: [...state.users, { ...action.payload, points: 900 }],
          registrationDisplay: "none",
        };
      } else {
        return state;
      }
    case "GET_USER":
      return { ...state, users: [...state.users, ...action.payload] };
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
          : "please only use letters and numbers for the username",
      };
    case "LOG_OUT":
      return {
        ...state,
        user: { name: null, address: "", points: 0 },
        signInFeedback: "",
      };
    case "TYPE_USER":
      return { ...state, user: { ...state.user, ...action.payload } };
    case "RESET_signInFeedback":
      return { ...state, signInFeedback: "" };
    case "TOGGLE_FORM_DISPLAY":
      return {
        ...state,
        formDisplay: state.formDisplay === "none" ? "flex" : "none",
      };
    case "CHANGE_TIME":
      //decide which time element is being sent
      let value = 0;
      switch (action.payload[0]) {
        case "hours":
          value = 0;
          break;
        case "minutes":
          value = 1;
          break;
        default:
          value = 1;
      }
      let newData = state.orderTime;
      newData[value] = action.payload[1];
      return {
        ...state,
        orderTime: [...newData],
      };
    case "TOGGLE_REG_DISPLAY":
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

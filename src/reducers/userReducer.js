export default function userReducer(
  state = { user: { name: "UserNameOne", points: 100 } },
  action
) {
  switch (action.type) {
    case "SET_USER":
      return { ...state, user: action.payload };
    case "LOG_OUT":
      return { ...state, user: { name: null, points: 0 } };
    default:
      return state;
  }
}

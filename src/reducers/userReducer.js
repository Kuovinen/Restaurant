export default function userReducer(
  state = { user: { name: "UserNameOne", points: 100 } },
  action
) {
  switch (action.type) {
    case "SET_USER":
      return { ...state, user: action.payload };
    default:
      return state;
  }
}

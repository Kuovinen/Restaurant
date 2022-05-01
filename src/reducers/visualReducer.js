export default function visualReducer(state = { itemDisplay: "none" }, action) {
  switch (action.type) {
    case "TOGGLE_ORDER_DISPLAY":
      console.log("fired off!");
      console.log(state);
      return state.itemDisplay === "none"
        ? { itemDisplay: "flex" }
        : { itemDisplay: "none" };

    default:
      return state;
  }
}

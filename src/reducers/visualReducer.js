export default function visualReducer(
  state = { orderDisplay: "none", dishDisplay: "none", formDisplay: "none" },
  action
) {
  switch (action.type) {
    case "TOGGLE_ORDER_DISPLAY":
      console.log("fired off ORDER_DISPLAY!");
      console.log(state);

      return {
        ...state,
        orderDisplay: state.orderDisplay === "none" ? "flex" : "none",
      };
    case "TOGGLE_DISH_DISPLAY":
      console.log("fired off DISH_DISPLAY!");
      console.log(state);

      return {
        ...state,
        dishDisplay: state.dishDisplay === "none" ? "flex" : "none",
      };
    case "TOGGLE_FORM_DISPLAY":
      console.log("fired off FORM_DISPLAY!");
      console.log(state);

      return {
        ...state,
        formDisplay: state.formDisplay === "none" ? "flex" : "none",
      };
    default:
      return state;
  }
}

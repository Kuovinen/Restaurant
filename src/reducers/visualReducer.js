export default function visualReducer(
  state = {
    orderDisplay: "none",
    dishDisplay: "none",
    confDisplay: "none",
    chosenItem: {
      selectedDishTitle: "Pestromy",
      selectedDishImg: "/images/dish5.jpeg",
      ingredients: "Food item 1, food item 2",
    },
  },
  action
) {
  switch (action.type) {
    case "TOGGLE_ORDER_DISPLAY":
      console.log("fired off ORDER_DISPLAY!");

      return {
        ...state,
        orderDisplay: state.orderDisplay === "none" ? "flex" : "none",
      };
    case "TOGGLE_DISH_DISPLAY":
      console.log("fired off DISH_DISPLAY!");

      return {
        ...state,
        dishDisplay: state.dishDisplay === "none" ? "flex" : "none",
      };
    case "TOGGLE_CONF":
      console.log("fired off TOGGLE_CONF!");

      return {
        ...state,
        confDisplay: state.confDisplay === "none" ? "flex" : "none",
      };
    case "CHANGE_CHOSEN_DISH":
      console.log("fired off CHANGE_CHOSEN_DISH!");

      return {
        ...state,
        chosenItem: { ...action.payload },
      };
    default:
      return state;
  }
}

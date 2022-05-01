export default function shoppingReducer(state = [], action) {
  switch (action.type) {
    case "addItem":
      return [...state, action.payload.item.id];

    case "removeItem":
      return [state.filter((element) => element.id !== action.payload.item.id)];
    default:
      //IMPORTANT to return current state if no action type matched
      return state;
  }
}

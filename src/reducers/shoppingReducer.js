export default function shoppingReducer(state = [], action) {
  switch (action.type) {
    case "ADD_ITEM":
      /***********************************************************/
      console.log("fired off addItem");
      let object = {
        name: action.payload.title,
        amount: 1,
        price: action.payload.price,
        img: action.payload.img,
        key: action.payload.id,
      };
      if (state.length > 0) {
        console.log("got here");
        console.log(object.name);
        console.log(state[0].title);
        console.log(state.filter((element) => element.title == object.name));
        console.log("filtered");
        //if same element exists
        if (state.filter((element) => element.name == object.name).length > 0) {
          //change amount of existing element

          let updatedArray = state.map((element) =>
            element.name === object.name
              ? { ...element, amount: element.amount + 1 }
              : element
          );
          return [...updatedArray];
          //if same element doesn't exists, then just add the new one
        } else {
          return [...state, action.payload];
        }
        //if order form is still emepty add the new one
      } else {
        return [...state, action.payload];
      }
    /********************************************************/

    case "removeItem":
      return [state.filter((element) => element.id !== action.payload.item.id)];
    default:
      //IMPORTANT to return current state if no action type matched
      return state;
  }
}

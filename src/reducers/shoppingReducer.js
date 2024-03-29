export default function shoppingReducer(state = [], action) {
  switch (action.type) {
    case "ADD_ITEM":
      /***********************************************************/
      let object = {
        name: action.payload.title,
        amount: 1,
        price: action.payload.price,
        img: action.payload.img,
        key: action.payload.id,
      };
      if (state.length > 0) {
        //if same element exists
        if (
          state.filter((element) => element.title === action.payload.title)
            .length > 0
        ) {
          //change amount of existing element
          let updatedArray = state.map((element) =>
            element.title === object.name
              ? {
                  ...element,
                  amount: element.amount + 1,
                  price: [
                    element.price[0],
                    Math.round((element.amount + 1) * element.price[0] * 1e2) /
                      1e2,
                  ],
                }
              : element
          );
          return [...updatedArray];
          //if same element doesn't exists, then just add the new one
        } else {
          return [
            ...state,
            {
              ...action.payload,
              price: [action.payload.price[0], action.payload.price[0]],
            },
          ];
        }
        //if order form is still emepty add the new one
      } else {
        return [
          ...state,
          {
            ...action.payload,
            price: [action.payload.price[0], action.payload.price[0]],
          },
        ];
      }
    /********************************************************/

    case "REMOVE_ITEM":
      var updatedArray = state.reduce((result, element) => {
        if (element.title === action.payload.title && element.amount > 1) {
          result.push({
            ...element,
            amount: element.amount - 1,
            price: [
              element.price[0],
              Math.round((element.amount - 1) * element.price[0] * 1e2) / 1e2,
            ],
          });
          return result;
        } else if (
          element.title === action.payload.title &&
          element.amount === 1
        ) {
          return result;
        }
        result.push(element);
        return result;
      }, []);

      return [...updatedArray];

    default:
      //IMPORTANT to return current state if no action type matched
      return state;
  }
}

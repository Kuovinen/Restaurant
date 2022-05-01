let a = 1;
export default a;
export function addItem() {
  return {
    type: "ADD_ITEM",
    payload: {
      item: {
        id: 1,
      },
    },
  };
}
export function rmvItem() {
  return {
    type: "REMOVE_ITEM",
  };
}
export function toggleOrder() {
  return {
    type: "TOGGLE_ORDER_DISPLAY",
  };
}

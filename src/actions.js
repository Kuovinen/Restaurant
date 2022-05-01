let a = 1;
export default a;
export function addItem(item) {
  return {
    type: "ADD_ITEM",
    payload: item,
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
export function toggleDish() {
  return {
    type: "TOGGLE_DISH_DISPLAY",
  };
}
export function toggleForm() {
  return {
    type: "TOGGLE_FORM_DISPLAY",
  };
}
export function selectDish(dish) {
  return {
    type: "CHANGE_CHOSEN_DISH",
    payload: dish,
  };
}

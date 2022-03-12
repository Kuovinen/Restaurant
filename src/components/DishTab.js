export default function DishTab(props) {
  function addToOrder() {
    let object = {
      name: props.title,
      amount: 1,
      price: props.price,
      key: props.id,
    };
    if (props.orderArray.length > 0) {
      //if same element exists
      if (
        props.orderArray.filter((element) => element.name == props.title)
          .length > 0
      ) {
        //change amount of existing element
        props.setOrderArray((array) =>
          array.map((element) =>
            element.name == props.title
              ? { ...element, amount: element.amount + 1 }
              : element
          )
        );
        //if same element doesn't exists, then just add the new one
      } else {
        props.setOrderArray((original) => [...original, object]);
      }
      //if order form is still emepty add the new one
    } else {
      props.setOrderArray((original) => [...original, object]);
    }
  }
  return (
    <div className="dishTab">
      <img className="img" src={props.img} alt="" />
      <div className="titlePrice">
        <h4 className="title">{props.title}</h4>
        <h4 className="price">{props.price}€</h4>
        <h5 className="calories">{props.calories}</h5>
        <button className="add" onClick={addToOrder}>
          <span>+</span>
          <span className="addTxt">ADD</span>
        </button>
      </div>
    </div>
  );
}

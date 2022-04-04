import OrderItem from "./OrderItem.js";
export default function Order(props) {
  function hide() {
    props.setOrderDisplay("none");
  }
  return (
    <div className="greyout " style={{ display: props.orderDisplay }}>
      <form
        onSubmit={(event) => {
          event.preventDefault();
        }}
      >
        <div className="orderContainter">
          <button className="orderContainerBtn" onClick={hide}>
            CLOSE
          </button>
          <div className="orderContent">
            CURRENT ORDER:
            {props.orderArray.map((element, index) => (
              <OrderItem
                img={element.img}
                key={index + "order"}
                price={element.price}
                title={element.name}
                amount={element.amount}
                class="orderItemMain"
              /> //use KEY or maybe ID to later target specific element for removal
            ))}
          </div>
          <button className="orderContainerBtn">ORDER</button>
        </div>
      </form>
    </div>
  );
}

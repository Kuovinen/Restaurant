export default function OrderItem(props) {
  return (
    <div className={props.class}>
      {props.img && (
        <div style={{ display: "flex", gap: "1vh" }}>
          <img className="orderImg" src={props.img} alt=""></img>
          <div className="minus" style={{ flex: 0.5 }}>
            -
          </div>
          <div className="plus" style={{ flex: 0.5 }}>
            +
          </div>
        </div>
      )}

      <div className="orderName">{props.title}</div>
      <div className="orderAmount">{props.amount}</div>
      <div className="orderPrice">{props.price}</div>
    </div>
  );
}

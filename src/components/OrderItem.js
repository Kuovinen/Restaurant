export default function OrderItem(props) {
  return (
    <div className="orderItem">
      <div className="orderName">{props.title}</div>
      <div className="orderAmount">{props.amount}</div>
      <div className="orderPrice">{props.price}</div>
    </div>
  );
}

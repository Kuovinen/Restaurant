export default function OrderItem(props) {
  return (
    <div className="orderItem">
      <div>{props.title}</div>
      <div>{props.amount}</div>
    </div>
  );
}

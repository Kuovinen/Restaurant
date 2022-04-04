export default function OrderItem(props) {
  return (
    <div className={props.class}>
      {props.img && <img className="orderImg" src={props.img} alt="" />}
      <div className="orderName">{props.title}</div>
      <div className="orderAmount">{props.amount}</div>
      <div className="orderPrice">{props.price}</div>
    </div>
  );
}

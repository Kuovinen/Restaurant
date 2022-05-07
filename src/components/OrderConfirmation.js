import { useSelector, useDispatch } from "react-redux";

export default function OrderConfirmation() {
  const dispatch = useDispatch();
  const userData = useSelector((state) => {
    return state.userReducer;
  });
  const orderData = useSelector((state) => {
    return state.shoppingReducer;
  });
  console.log("here's the order data");
  console.log(orderData);
  return (
    ///REMOVE HARDCODED DISPLAY VALUE, REPLACE WITH REDUX STATE!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    <div className="greyout" style={{ display: "none" }}>
      <div className="finishedOrder">
        <button className="closeFinal">X</button>
        <div className="logo" style={{ color: "var(--cp-Grey)" }}>
          <span id="la">la</span>{" "}
          <span style={{ color: "var(--cp-Green)" }}>C</span>asa
        </div>

        <div className="orderDetails">
          <p>NAME</p>
          <p>ADDRESS</p>
          <p>TIME</p>
          <p>FROM</p>
          <p>TOTAL</p>
        </div>
        <div
          style={{
            color: "var(--cp-Green)",
            fontStyle: "italic",
            textAlign: "end",
            marginRight: "1rem",
            marginBottom: "1rem",
          }}
        >
          Enjoy your meal! Thank you for choosing la Casa.
        </div>
      </div>
    </div>
  );
}

import { useSelector, useDispatch } from "react-redux";
import { toggleConfirm } from "../actions.js";
export default function OrderConfirmation() {
  const dispatch = useDispatch();
  const confDisplay = useSelector((state) => {
    return state.visualReducer.confDisplay;
  });
  function hide() {
    dispatch(toggleConfirm());
  }
  return (
    ///REMOVE HARDCODED DISPLAY VALUE, REPLACE WITH REDUX STATE!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    <div className="greyout" style={{ display: confDisplay }}>
      <div className="finishedOrder">
        <button className="closeFinal" onClick={hide}>
          X
        </button>
        <div className="logo" style={{ color: "var(--cp-Grey)" }}>
          <span id="la">la</span>
          <span style={{ color: "var(--cp-Green)" }}>C</span>asa
        </div>

        <div
          style={{
            color: "var(--cp-Grey)",
            fontSize: "2rem",
            textAlign: "center",
            marginBottom: "1rem",
          }}
        >
          Your order is now being prepared.
        </div>
        <div
          style={{
            color: "var(--cp-Green)",
            fontStyle: "italic",
            textAlign: "end",
            fontSize: "1.5rem",
            margin: "2rem",
          }}
        >
          Enjoy your meal and thank you for choosing la Casa.
        </div>
      </div>
    </div>
  );
}

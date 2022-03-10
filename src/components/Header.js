export default function Header() {
  return (
    <header>
      <div className="logo">la CASA</div>

      <div className="login">
        <button className="logBtn">SignIn</button>
      </div>
      <div className="locations">
        <span className="label">LOCATIONS:</span>
        <div className="location">Keskivuori 78b, Helsinki</div>
      </div>
      <div className="time">
        <span className="label">DESIRED DELIVERY TIME: </span>{" "}
        <div className="deliveryTime"></div>
      </div>
    </header>
  );
}

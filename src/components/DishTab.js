export default function DishTab(props) {
  return (
    <div className="dishTab">
      <img className="img" src={props.img} alt="" />
      <div className="titlePrice">
        <h4 className="title">{props.title}</h4>
        <h4 className="price">{props.price}</h4>
        <h5 className="calories">{props.calories}</h5>
        <button className="add">
          <span>+</span>
          <span className="addTxt">ADD</span>
        </button>
      </div>
    </div>
  );
}
//img={dish1} title="Double Avacado Toast" price="19.99$",

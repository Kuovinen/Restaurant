export default function Cover(props) {
  function hide() {
    props.setCoverDisplay("none");
  }
  return (
    <div
      className="greyout"
      onClick={hide}
      style={{ display: props.coverDisplay }}
    >
      <div className="selectedDishCard">
        <div className="selectedDishCardClose">X</div>
        <img
          className="selectedDish"
          src="/images/dish2.jpeg"
          alt="selectedDishImg"
        />
        <div className="selectedDishTitle">DISH TITLE</div>
        <p className="ingredients">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa
          voluptate suscipit harum perferendis, et in corrupti? Ducimus, sequi
          facilis. Iure aliquam aspernatur suscipit cupiditate iste dolore
          dolorum modi id perspiciatis labore blanditiis quia mollitia delectus
          dolor, esse reprehenderit. Aspernatur a, natus quibusdam dolor vel
          iusto dolore animi ullam. Nulla, similique.
        </p>
        <button className="selectedDishClose">CLOSE</button>
      </div>
    </div>
  );
}

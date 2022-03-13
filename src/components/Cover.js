export default function Cover(props) {
  function hide() {
    props.setCoverDisplay("none");
  }
  return (
    <div
      className="greyout"
      onClick={hide}
      style={{ display: props.coverDisplay }}
    ></div>
  );
}

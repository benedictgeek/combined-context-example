import { useContextTwo } from "./state/context2";

let Child = (props) => {
  let {
    state: { content },
  } = useContextTwo();
  return (
    <div style={{ padding: "15px" }}>
      The body content is rendered below
      <i style={{ marginLeft: "10px" }}>{content}</i>
    </div>
  );
};

export default Child;

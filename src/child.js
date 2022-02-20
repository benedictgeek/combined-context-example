import { useContextTwo } from "./state/context2";
import { Reaction } from "reaction-react";

let Child = (props) => {
  let {
    state: { content },
  } = useContextTwo();
  return (
    <div style={{ padding: "15px" }}>
      The body content is rendered below
      <i style={{ marginLeft: "10px" }}>{content}</i>
      <div style={{ display: "flex", alignItems: "center" }}>
        <span style={{ marginRight: "15px" }}>Give a thumbs up</span>

        <Reaction>
          <span style={{ cursor: "pointer", fontSize: "30px" }}>👍</span>
        </Reaction>
      </div>
    </div>
  );
};

export default Child;

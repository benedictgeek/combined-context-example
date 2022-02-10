import { useEffect } from "react";
import Child from "./child";
import { useContextOne } from "./state/context1";
import { useContextTwo } from "./state/context2";

let Parent = (props) => {
  let {
    state: { title },
    setTitleDispatch,
  } = useContextOne();

  let { setContentDispatch } = useContextTwo();

  useEffect(() => {
    let timeout = setTimeout(() => {
      setTitleDispatch("Title Updated 👏,");
      setContentDispatch("Here is a fresh updated content 🥳");
    }, 3000);

    return () => {
      clearTimeout(timeout);
    };
  }, []);

  return (
    <div style={{ marginTop: "15px" }}>
      <span style={{ padding: "15px" }}>
        This is the parent component, title and content updates after 3 seconds
        :)
      </span>

      <br />
      <br />
      <b style={{ padding: "15px" }}>{title}</b>
      <Child />
    </div>
  );
};

export default Parent;

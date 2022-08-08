import { useContext } from "react";
import { ContextApi } from "../../../context/contextApi";

const test = [
  { id: 1, name: "hahahaha" },
  { id: 2, name: "cccc" },
  { id: 3, name: "gggg" },
];
const ExampleComponent = () => {
  const { exCount } = useContext(ContextApi);

  return (
    <>
      <div>{exCount}</div>
      <div>component</div>
    </>
  );
};

export default ExampleComponent;

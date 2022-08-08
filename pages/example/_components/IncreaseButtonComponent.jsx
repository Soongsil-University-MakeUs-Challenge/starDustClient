import { useContext } from "react";
import { ContextApi } from "../../../context/contextApi";

const IncreaseButtonComponent = () => {
  const { setExCount } = useContext(ContextApi);

  const handleIncreaseCount = () => {
    setExCount((prev) => prev + 1);
    // setCount(count + 1);
  };
  return (
    <>
      <button onClick={handleIncreaseCount}>+</button>;
    </>
  );
};

export default IncreaseButtonComponent;

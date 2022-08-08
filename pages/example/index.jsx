import ExampleComponent from "./_components/exampleComponent";
import styles from "./example.module.css";
import { useContext, useEffect, useState } from "react";
import IncreaseButtonComponent from "./_components/IncreaseButtonComponent";
import { ContextApi } from "../../context/contextApi";

const Example = () => {
  localStorage.setItem("first", "this value");
  localStorage.getItem("first");
  // const { example, setExample } = useContext(ContextApi);
  // // const [count, setCount] = useState(0);
  // const [toggle, setToggle] = useState(false);
  // // const handleIncreaseCount = () => {
  // //   setCount((prev) => prev + 1);
  // //   // setCount(count + 1);
  // // };
  // // const handleToggle = () => {
  // //   setToggle((prev) => !prev);
  // // };
  // // console.log(example);

  // useEffect(() => {
  //   // handleIncreaseCount();
  // }, []);

  return (
    <>
      {/* <div className={styles.container}>example</div>
      {/* <button onClick={handleIncreaseCount}>+</button>; */}
      {/* <button onClick={handleToggle}>토글</button> */} */}
      <IncreaseButtonComponent />
      <ExampleComponent />
    </>
  );
};

export default Example;

import ExampleComponent from "./_components/exampleComponent";
import styles from "./example.module.css";

const Example = () => {
  return (
    <>
      <div className={styles.container}>example</div>
      <ExampleComponent />
    </>
  );
};

export default Example;

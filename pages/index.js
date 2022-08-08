import Link from "next/link";
import { useContext } from "react";
import { ContextApi } from "../context/contextApi";
import styles from "../styles/Home.module.css";

export default function Home() {
  const { example, setExample } = useContext(ContextApi);
  console.log(example);

  const handleChangeExmaple = () => {
    setExample("hahahahah");
  };
  
  return (
    <>

      <Link href={"example"}>goToExmaple</Link>
      <button onClick={handleChangeExmaple}>tset</button>
      <div className={styles.container}>hello world</div>
    </>
  );
}

// Props
// useState
// useEffect
// map, filter
// ContextApi
// localStorage

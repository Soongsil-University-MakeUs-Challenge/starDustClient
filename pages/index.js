import { useEffect, useRef, useState } from "react";
import styles from "../styles/Home.module.css";
import { totalText } from "../constant";

export default function Home() {
  const [outputText, setOutputText] = useState(""); //출력될 텍스트를 저장할 변수 만들어주기
  const [count, setCount] = useState(0); // 글자 수 카운터 변수
  const scrollRef = useRef();

  useEffect(() => {
    const textInterval = setInterval(() => {
      if (count < totalText.length) {
        scrollRef.current.scrollIntoView({
          behavior: "smooth",
          block: "end",
          inline: "nearest",
        });
      }
      setOutputText((prev) => {
        const res = prev
          ? prev + totalText.slice(count - 1, count + 1)
          : totalText[0]; //이전 값과 현재의 count가 위치한 인덱스의 글자를 더해 리턴하는 목적

        if (count >= totalText.length) {
          return totalText;
        } else {
          setCount(count + 2);
          return res;
        }
      });
    }, 200);
    return () => {
      clearInterval(textInterval);
    };
  });

  return (
    <div className={styles.background}>
      <div ref={scrollRef} className={styles.container}>
        <div className={styles.logo_img} />
        <div className={styles.content}>{outputText}</div>
      </div>
      <div className={styles.skipBtn}><a href="/">SKIP{">"}</a></div>
    </div>
  );
}

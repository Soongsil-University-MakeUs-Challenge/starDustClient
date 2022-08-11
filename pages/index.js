import { useContext, useEffect, useState } from "react";
import { ContextApi } from "../Contexts/contextApi";
import styles from "../styles/Home.module.css";

export default function Home() {
  const { example } = useContext(ContextApi);
  const [outputText, setOutputText] = useState(''); //출력될 텍스트를 저장할 변수 만들어주기
  const [count, setCount] = useState(0); // 글자 수 카운터 변수
  const totalText = '악동 우주먼지들이 등장했어요! 이 작고 귀여운 친구들은 보기와 다르게 아주 괴팍한 취미를 가지고 있어요\n 바로 축제만 열렸다 하면 나타나서 축제를 아주 쑥대밭으로 만든다는 것이죠! 더 개판이 되기 전에 이 우주먼지들을 잡아서 대동제를 지켜주세요! 최강우주전사 아카데미 숭실대학교 친구들이라면 이 악동들을 손쉽게 잡을 수 있을거에요 사례는 섭섭치 않게 할게요! 그럼 모두 행운을 빌어요';

  useEffect(()=> {
    const textInterval = setInterval(()=> {
      setOutputText((prev) => {
        let res = prev ? prev + totalText[count] : totalText[0]; //이전 값과 현재의 count가 위치한 인덱스의 글자를 더해 리턴하는 목적
      
        setCount((count)+1);

        if(count >= totalText.length) {
          setCount(0);
          setOutputText('');
        }
      
        return res;
      });
    }, 200);
    return () => {
      clearInterval(textInterval);
    };
  });

  console.log(example);

  return <div className={styles.background}>
    <div className={styles.container}>
      <img className={styles.logo_img}/>
      <div className={styles.content}>{outputText}</div>
    </div>
  </div>;
  
}

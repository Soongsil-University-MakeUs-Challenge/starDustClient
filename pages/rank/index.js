import { useEffect, useRef, useState } from "react";
import styles from "../../styles/Rank.module.css";
import Link from "next/link";
import { useRouter } from "next/router";
import { getRanking } from "../../apis/service";

export const Rank = () => {
  const router = useRouter();
  const [rankers, setRankers] = useState([]);

  const getRankingAPI = async () => {
    const response = await getRanking();

    if (response.status == 200) {
      if (response.data.code == 200) {
        console.log(response.data);
        setRankers(response.data.result.rankerList);
      } else {
        console.error(response.data.message);
      }
    } else {
      console.error(response.error);
    }
  };

  useEffect(() => {
    getRankingAPI();
  }, []);

  return (
    <div className={styles.background}>
      <div>
        <input
          type="button"
          className={styles.X_button}
          onClick={() => router.push("/../map")}
        ></input>
        <div className={styles.title}>
          <span style={{ color: "#F9E219" }}>SSU</span> 최강우주전사
          <div className={styles.element}>
            <div className={styles.float1}>RANK</div>
            <div className={styles.float2}>NAME</div>
            <div className={styles.float3}>TIME</div>
          </div>
          {/* 여기를 컨포넌트로 만들고, 리스트의 map 함수를 이용해 개수만큼 Ranker 컴포넌트를 그려줘요 */}
          {rankers &&
            rankers.map((ranker, index) => {
              return (
                <>
                  <div className={styles.ranking}>
                    <div className={styles.li_1}>{index + 1}</div>
                    <div
                      className={styles.li_2}
                    >{`${ranker.nickname} ${ranker.lastNum}`}</div>
                    <div className={styles.li_3}>{ranker.playTime}</div>
                  </div>
                </>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default Rank;

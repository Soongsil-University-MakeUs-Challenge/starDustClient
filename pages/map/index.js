import styles from "../../styles/Map.module.css";
import { KakaoAPIMap } from "./_components/KakaoAPIMap";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { getDusts, startTimer } from "../../apis/service";

export default function Map() {
  const router = useRouter();
  const [dusts, setDusts] = useState([]);

  //API호출 (getDustAPI)
  const getDustsAPI = async () => {
    const response = await getDusts("SSU");
    console.log(response);

    if (response.status == 200) {
      if (response.data.code == 200) {
        setDusts(response.data.result.dustInfo);
      }
    }
  };

  const startTimerAPI = async () => {
    const response = await startTimer();

    if (response.status == 200) {
      if (response.data.code == 200) {
        console.log("GAME START");
      } else {
        console.error(response.data.message);
      }
    } else {
      console.error(response.error.message);
    }
  };

  useEffect(() => {
    getDustsAPI();
    startTimerAPI(); // 이렇게 하면 웹브라우저 나갔다 들어오면 초기화 될 듯? 처음 먼지 잡은거로 서버상에서 자동으로 기록해주는 게 나아보이지만 일단은 이거로
  }, []);

  return (
    <>
      <KakaoAPIMap dusts={dusts} />

      <div className={styles.stardust_container}>
        {dusts.map((dust) => {
          if (dust.dustId == 1) {
            return (
              <div
                key={dust.dustId}
                className={
                  dust.caught
                    ? styles.catched_stardust_black
                    : styles.stardust_black
                }
              />
            );
          } else if (dust.dustId == 2) {
            return (
              <div
                key={dust.dustId}
                className={
                  dust.caught
                    ? styles.catched_stardust_white
                    : styles.stardust_white
                }
              />
            );
          } else if (dust.dustId == 3) {
            return (
              <div
                key={dust.dustId}
                className={
                  dust.caught
                    ? styles.catched_stardust_green
                    : styles.stardust_green
                }
              />
            );
          } else if (dust.dustId == 4) {
            return (
              <div
                key={dust.dustId}
                className={
                  dust.caught
                    ? styles.catched_stardust_yellow
                    : styles.stardust_yellow
                }
              />
            );
          } else if (dust.dustId == 5) {
            return (
              <div
                key={dust.dustId}
                className={
                  dust.caught
                    ? styles.catched_stardust_purple
                    : styles.stardust_purple
                }
              />
            );
          }
        })}
        ;
      </div>

      <div className={styles.map_logo}></div>
      <div className={styles.button_container}>
        <div className={styles.location_btn}></div>
        <div className={styles.refresh_btn} onClick={() => getDustsAPI()}></div>
        <div className={styles.guide_btn}>
          <Link href="/">
            <a></a>
          </Link>
        </div>
        <div
          className={styles.qr_btn}
          onClick={() => router.push("/../qrcode")}
        ></div>
      </div>
    </>
  );
}

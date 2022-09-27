import KakaoAPIMap from "./_components/StaffMap";
import styles from "../../styles/StaffMap.module.css";
import { useState, useEffect } from "react";
import { getDusts, sendDustLocation } from "../../apis/service";

export default function StaffMapPage() {
  const [myLocation, setMyLocation] = useState({
    latitude: 37.496313,
    longitude: 126.957037,
  });
  const [dusts, setDusts] = useState([]);

  const setCurLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        setMyLocation({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        });

        sendDustLocationAPI();

        // console.log(
        //   `gps 모니터 => 현재 위도: ${position.coords.latitude}, 현재 위도: ${position.coords.longitude}`
        // );
        // console.log(
        //   `좌표 state => 현재 위도: ${myLocation.latitude}, 현재 위도: ${myLocation.longitude}`
        // );
      });
    } else {
      console.log("먼지 좌표 업데이트 실패");
    }
  };

  const getDustsAPI = async () => {
    const response = await getDusts("SSU");
    console.log(response);

    if (response.status == 200) {
      if (response.data.code == 200) {
        setDusts(response.data.result.dustInfo);
      }
    }
  };

  useEffect(() => {
    getDustsAPI();

    const timerId = setInterval(() => {
      setCurLocation();
    }, 5000);
    return () => clearTimeout(timerId);
  }, [myLocation]);

  // 좌표전송버튼 눌러도 호출하거나
  const sendDustLocationAPI = async () => {
    // console.log(
    //   `클릭 => 현재 위도: ${myLocation.latitude}, 현재 위도: ${myLocation.longitude}`
    // );
    const response = await sendDustLocation(
      myLocation.latitude,
      myLocation.longitude
    );

    //console.log(response);

    if (response.status == 200 && response.data.code == 200) {
      console.log("먼지 좌표 전송 성공");
      getDustsAPI(); // 자신 좌표 업데이트할 때마다 다시 먼지목록 API 호출
    } else {
      alert("먼지 좌표 전송 실패");
    }
  };

  return (
    <>
      <KakaoAPIMap dusts={dusts} />
      <div className={styles.container}>
        <div className={styles.dust_box}>
          <div className={styles.dust_black}></div>
        </div>
        <div className={styles.stretch}></div>
        <div
          className={styles.send_location}
          onClick={sendDustLocationAPI}
        ></div>
      </div>
    </>
  );
}

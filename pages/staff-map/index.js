import { useRouter } from "next/router";
import Link from "next/link";
import KakaoAPIMap from "./_components/StaffMap";
import styles from "../../styles/StaffMap.module.css";
import { useState, useEffect } from "react";
import { sendDustLocation } from "../../apis/service";

export default function StaffMapPage() {
  const [myLocation, setMyLocation] = useState({
    latitude: 37.496313,
    longitude: 126.957037,
  });

  const setCurLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        setMyLocation({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        });

        // console.log(
        //   `타이머 => 현재 위도: ${position.coords.latitude}, 현재 위도: ${position.coords.longitude}`
        // );

        console.log(
          `타이머 => 현재 위도: ${myLocation.latitude}, 현재 위도: ${myLocation.longitude}`
        );
      });
    } else {
      console.log("먼지좌표 업데이트 실패");
    }
  };

  useEffect(() => {
    const timerId = setInterval(() => {
      setCurLocation();
    }, 2000);
    return () => clearTimeout(timerId);
  }, [myLocation]);

  const onClickSendLocation = async () => {
    console.log(
      `클릭 => 현재 위도: ${myLocation.latitude}, 현재 위도: ${myLocation.longitude}`
    );
    const response = await sendDustLocation(
      myLocation.latitude,
      myLocation.longitude
    );

    console.log(response);

    if (response.status == 200 && response.data.code == 200) {
      alert("먼지 좌표 전송 성공");
    } else {
      alert("먼지 좌표 전송 실패");
    }
  };

  return (
    <>
      <KakaoAPIMap />
      <div className={styles.container}>
        <div className={styles.dust_box}>
          <div className={styles.dust_black}></div>
        </div>
        <div className={styles.stretch}></div>
        <div
          className={styles.send_location}
          onClick={onClickSendLocation}
        ></div>
      </div>
    </>
  );
}

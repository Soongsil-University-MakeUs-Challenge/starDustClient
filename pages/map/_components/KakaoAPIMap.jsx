import { useState, useRef, useEffect } from "react";
import { Map, CustomOverlayMap, MapMarker } from "react-kakao-maps-sdk";
import Image from "next/image";
import styles from "../../../styles/Map.module.css";

const dustMapper = {
  1: styles.dust_black,
  2: styles.dust_white,
  3: styles.dust_green,
  4: styles.dust_orange,
  5: styles.dust_purple,
};

export const KakaoAPIMap = ({ dusts }) => {
  const [myLocation, setMyLocation] = useState("");
  const [isLoadMap, setIsLoadMap] = useState(false);

  useEffect(() => {
    // geolocation 이용 현재 위치 확인, 위치 미동의 시 기본 위치로 지정
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        setMyLocation({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        });
      });
    } else {
      window.alert("현재 위치를 알 수 없어 기본 위치로 지정합니다.");
      setMyLocation({ latitude: 37.4862618, longitude: 127.1222903 });
    }
  }, []);

  // useEffect(() => {
  //   const { latitude, longitude } = myLocation;
  //   console.log(latitude, longitude);
  // });

  useEffect(() => {
    const script = document.createElement("script");
    script.async = true;
    script.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=1664a34e52ea5802af4d289cbdeef3ed&libraries=services&autoload=false`;
    document.head.appendChild(script);

    script.addEventListener("load", () => {
      window.kakao.maps.load(() => {
        setIsLoadMap(true);
      });
    });
  }, []);

  if (!isLoadMap) return <div></div>;

  return (
    <Map
      center={{ lat: 37.496313, lng: 126.957037 }}
      style={{ width: "100%", height: "100vh" }}
    >
      {dusts &&
        dusts.map((dust) => {
          return (
            !dust.caught && (
              <CustomOverlayMap
                key={dust.dustId}
                position={{ lat: dust.latitude, lng: dust.longitude }}
              >
                <div className={dustMapper[dust.dustId]}></div>
              </CustomOverlayMap>
            )
          );
        })}
    </Map>
  );
};

export default KakaoAPIMap;

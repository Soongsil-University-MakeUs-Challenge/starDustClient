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
  const [isLoadMap, setIsLoadMap] = useState(false);

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
      {dusts.map((dust) => {
        return (
          <CustomOverlayMap
            key={dust.dustId}
            position={{ lat: dust.latitude, lng: dust.longitude }}
          >
            <div className={dustMapper[dust.dustId]}></div>
          </CustomOverlayMap>
        );
      })}
    </Map>
  );
};

export default KakaoAPIMap;

// const dusts = [
//   {
//     dustId: 1,
//     longitude: 126.9548168,
//     latitude: 37.495626,
//     caught: true,
//   },
//   {
//     dustId: 2,
//     longitude: 126.9596122,
//     latitude: 37.4954321,
//     caught: false,
//   },
//   {
//     dustId: 3,
//     longitude: 126.9561681,
//     latitude: 37.4957653,
//     caught: false,
//   },
//   {
//     dustId: 4,
//     longitude: 126.9562425,
//     latitude: 37.4972478,
//     caught: false,
//   },
//   {
//     dustId: 5,
//     longitude: 126.9551486,
//     latitude: 37.4965255,
//     caught: false,
//   },
// ];

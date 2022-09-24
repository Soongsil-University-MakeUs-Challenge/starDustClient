import { useState,useRef, useEffect }  from 'react';
import { Map,CustomOverlayMap, MapMarker } from 'react-kakao-maps-sdk';
import Image from 'next/image';
import styles from "../../../styles/Map.module.css";

const dusts = [
  {
      "dustId": 1,
      "longitude": 126.9548168,
      "latitude": 37.495626,
      "caught": true
  },
  {
      "dustId": 2,
      "longitude": 126.9596122,
      "latitude": 37.4954321,
      "caught": false
  },
  {
      "dustId": 3,
      "longitude": 126.9561681,
      "latitude":  37.4957653,
      "caught": false
  },
  {
      "dustId": 4,
      "longitude": 126.9562425,
      "latitude": 37.4972478,
      "caught": false
  },
  {
      "dustId": 5,
      "longitude": 126.9551486,
      "latitude": 37.4965255,
      "caught": false
  }
]

const dustMapper = {
  1: styles.dust_black,
  2: styles.dust_white,
  3: styles.dust_green,
  4: styles.dust_orange,
  5: styles.dust_purple
}

export const KakaoAPIMap = () => {
  const mapRef = useRef(null);
  const [myLocation, setMyLocation] = useState('');
  const latitude=0, longitude=0;
  const currentPosition=[];

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
      window.alert('현재 위치를 알 수 없어 기본 위치로 지정합니다.');
      setMyLocation({ latitude: 37.4862618, longitude: 127.1222903 });
    }
  }, []);

  useEffect(() => {
    if (typeof myLocation !== 'string') {
      // 현재 위치 추적
      currentPosition = [myLocation.latitude, myLocation.longitude];
      console.log(currentPosition[0], currentPosition[1]);
    }

  });


  return (
    <Map center={{ lat: 37.496313, lng: 126.957037 }}style={{ width: "100%", height: "100vh" }}>

      {dusts.map((dust) => {
          return <CustomOverlayMap key={dust.dustId} position={{ lat: dust.latitude, lng: dust.longitude }}>
            <div className={dustMapper[dust.dustId]}></div>
          </CustomOverlayMap>
      })}

      {/* <CustomOverlayMap position={{ lat: 37.495626, lng: 126.9548168 }}>
        <div className={styles.dust_black}></div>

        <Image src="/img-dust-black.svg" width={30} height={30} alt="dust-black-image" />
      </CustomOverlayMap>

      <CustomOverlayMap position={{ lat: 37.4954321, lng: 126.9596122 }}>
        <div className={styles.dust_orange}></div>
      </CustomOverlayMap>

      <CustomOverlayMap position={{ lat: 37.4957653, lng: 126.9561681 }}>
        <div className={styles.dust_green}></div>
      </CustomOverlayMap>

      <CustomOverlayMap position={{ lat: 37.4972478, lng: 126.9562425 }}>
        <div className={styles.dust_purple}></div>
      </CustomOverlayMap>

      <CustomOverlayMap position={{ lat: 37.4965255, lng: 126.9551486 }}>
        <div className={styles.dust_white}></div>
      </CustomOverlayMap> */}
    </Map>
  )
};
//!4d

export default KakaoAPIMap;
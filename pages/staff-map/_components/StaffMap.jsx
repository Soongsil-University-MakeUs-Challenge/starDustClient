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

  return (
    <Map center={{ lat: 37.496313, lng: 126.957037 }}style={{ width: "100%", height: "100vh" }}>

      
    </Map>
  )
};

export default KakaoAPIMap
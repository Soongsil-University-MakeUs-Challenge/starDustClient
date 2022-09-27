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


export const KakaoAPIMap = ({dusts}) => {
  const [myLocation, setMyLocation] = useState("");
  

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

  useEffect(() => {
    const { latitude, longitude } = myLocation;
    console.log(latitude, longitude);
  });
  useEffect(()=> {
    const script = document.createElement("script");
    script.async = true;
    script.src=`//dapi.kakao.com/v2/maps/sdk.js?appkey=1664a34e52ea5802af4d289cbdeef3ed&libraries=services&autoload=false`;
    document.head.appendChild(script);

    script.addEventListener("load",()=>{
      window.kakao.maps.load(()=>{
        const mapContainer = document.getElementById("map");
        const mapOption = {
          center : new window.kakao.maps.LatLng(37.496313, 126.957037 ),
          level : 3,
        };
        
        const map = new window.kakao.maps.Map(mapContainer, mapOption);
        {dusts && dusts.map((dust) => {
          var imageSrc = 'https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/marker_red.png', // 마커이미지의 주소입니다    
              imageSize = new kakao.maps.Size(64, 69), // 마커이미지의 크기입니다
              imageOption = {offset: new kakao.maps.Point(27, 69)};
          
          if(!dust.caught) {
            let markerPosition = new kakao.maps.LatLng(dust.latitude, dust.longitude);
            let markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize, imageOption);
            let marker = new kakao.maps.Marker({
              position : markerPosition,
              image :markerImage
            });
            marker.setMap(map);
          }
          })}    
      })
    });
  },[])


  return (
    <div id="map"
      
      style={{ width: "100%", height: "100vh" }}
    >
      
    </div>
  );
};

export default KakaoAPIMap;

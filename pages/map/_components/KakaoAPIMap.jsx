import { useState,useRef, useEffect }  from 'react';
import { Map,CustomOverlayMap } from 'react-kakao-maps-sdk';

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
    <Map
      center={{ lat: 37.496313, lng: 126.957037 }}
      style={{ width: "100%", height: "100vh" }}
    >
      <CustomOverlayMap position={{ lat: 37.496313, lng: 126.957037 }}>
        <div
          style={{padding:"10px", backgroundColor:"#fff", color:"#000"}}
        >
          숭실대학교 SSUMC
        </div>
      </CustomOverlayMap>
    </Map>
  )
};

export default KakaoAPIMap;
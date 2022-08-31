import React, { FC, useState, useEffect } from 'react';
import { CustomOverlayMap } from 'react-kakao-maps-sdk';
const { kakao } = window;

export const NaverAPIMap = () => {
  const [map,setMap] = useState(null);

  //처음 지도 그리기
  useEffect(()=>{
    

      const container = document.getElementById('map');
      const options = { center: new kakao.maps.LatLng(33.450701, 126.570667) };
      const kakaoMap = new kakao.maps.Map(container, options);
      setMap(kakaoMap);
  },[])

  return (
      <div
          style={{
              width: '100%',
              height: '100%',
              marginLeft: '5px',
              marginRight: '5px',
          }}
          level={3}
      >
        
          <div id="map" style={{ width: '100%', height: '2000px' }}>

          
          </div>
      </div>
  );
};

export default NaverAPIMap;
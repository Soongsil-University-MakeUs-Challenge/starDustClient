import React  from 'react';
import { Map,CustomOverlayMap } from 'react-kakao-maps-sdk';

export const NaverAPIMap = () => {

  return (
    
    <Map
      center={{ lat: 33.5563, lng: 126.79581 }}
      style={{ width: "100%", height: "100vh" }}
    >
      <CustomOverlayMap position={{ lat: 33.55635, lng: 126.795841 }}>
        <div
          style={{padding:"42px", backgroundColor:"#fff", color:"#000"}}
        >
          Custom Overlay!
        </div>
      </CustomOverlayMap>
    </Map>
  );
};

export default NaverAPIMap;
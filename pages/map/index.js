import { useEffect, useRef, useState } from "react";
import styles from "../../styles/Map.module.css";
import NaverAPIMap from "./NaverAPIMap";


export default function Map() {
    return (
    <>
    <script type="text/javascript" src="//dapi.kakao.com/v2/maps/sdk.js?appkey=1664a34e52ea5802af4d289cbdeef3ed"/>
    
        <NaverAPIMap>
        <div className={styles.stardust_container}>
            <div className={styles.stardust_black}></div>
            <div className={styles.stardust_yellow}></div>
            <div className={styles.stardust_blue}></div>
            <div className={styles.stardust_purple}></div>
            <div className={styles.stardust_red}></div>
        
        </div>

        <div className={styles.map_logo}></div>

        <div className={styles.button_container}>
            <div className={styles.location_btn}></div>
            <div className={styles.refresh_btn}></div>
            <div className={styles.guide_btn}></div>
            <div className={styles.qr_btn}></div>

        </div>
        </NaverAPIMap>
        </>
        
    );

    
}

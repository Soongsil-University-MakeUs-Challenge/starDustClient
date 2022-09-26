import styles from "../../styles/Map.module.css";
import { KakaoAPIMap } from "./_components/KakaoAPIMap";
import Link from 'next/link'
import {useRouter} from 'next/router'
import { useEffect, useState } from "react";
import { getDusts } from "../../apis/service";

/*const dusts = [
    {
      dustId: 1,
      longitude: 126.9548168,
      latitude: 37.495626,
      caught: true,
    },
    {
      dustId: 2,
      longitude: 126.9596122,
      latitude: 37.4954321,
      caught: false,
    },
    {
      dustId: 3,
      longitude: 126.9561681,
      latitude: 37.4957653,
      caught: false,
    },
    {
      dustId: 4,
      longitude: 126.9562425,
      latitude: 37.4972478,
      caught: false,
    },
    {
      dustId: 5,
      longitude: 126.9551486,
      latitude: 37.4965255,
      caught: false,
    },
  ];*/

export default function Map() {
    const router = useRouter();
    const [dusts, setDusts] = useState([]); 

    //API호출 (getDustAPI) 
    const getDustsAPI = async() => {
        const response = await getDusts("SSU")
        //console.log(response);

        if(response.status==200) {
            if(response.data.code == 200) {
                setDusts(response.data.result.dustInfo);

            }
        }
      }
      useEffect (()=>{
        getDustsAPI();
      },[])

    
    return (

        <>
            <KakaoAPIMap dusts={dusts}/>


            <div className={styles.stardust_container}>
                <div className={styles.stardust_black}></div>
                <div className={styles.stardust_yellow}></div>
                <div className={styles.stardust_green}></div>
                <div className={styles.stardust_purple}></div>
                <div className={styles.stardust_white}></div>
            </div>

            <div className={styles.map_logo}></div>
                <div className={styles.button_container}>
                    <div className={styles.location_btn}></div>
                    <div className={styles.refresh_btn}></div>
                    <div className={styles.guide_btn}><Link href="/"><a></a></Link></div>
                    <div className={styles.qr_btn} onClick={()=>router.push('/../qrcode')}>
                </div>
            </div>
        </>
    );
}

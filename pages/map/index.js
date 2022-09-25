import styles from "../../styles/Map.module.css";
import { KakaoAPIMap } from "./_components/KakaoAPIMap";
import Link from 'next/link'
import {useRouter} from 'next/router'


export default function Map() {
    const router = useRouter();
    
    return (
        <>
            <KakaoAPIMap/>

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
                    <div className={styles.guide_btn}><Link href="/"><a></a></Link></div>
                    <div className={styles.qr_btn} onClick={()=>router.push('/../qrcode')}>
                </div>
            </div>
        </>
    );
}

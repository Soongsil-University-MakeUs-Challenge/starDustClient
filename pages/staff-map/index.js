import { useRouter } from "next/router";
import Link from 'next/link'
import KakaoAPIMap from "./_components/StaffMap";
import styles from "../../styles/StaffMap.module.css";

export default function StaffMapPage() {
    const router = useRouter()

    return (
        <>
            <KakaoAPIMap />
            <div className={styles.container}>
                <div className={styles.dust_box}><div className={styles.dust_black}></div></div>
                <div className={styles.stretch}></div>
                <div className={styles.send_location}></div>
            </div>
        </>
    )
}
import styles from "../../styles/Map.module.css";
import NaverAPIMap from "./_components/NaverAPIMap";


export default function Map() {
    return (
    <>
        <NaverAPIMap/>
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
        
        </>
        
    );

    
}

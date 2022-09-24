import { useRouter } from "next/router";
import Link from 'next/link'
import KakaoAPIMap from "./_components/StaffMap";
import styles from "../../styles/StaffMap.module.css";

export default function StaffMapPage() {
    const router = useRouter()
    const [myLocation, setMyLocation] = useState('');
  
    useEffect(() => {
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
        const [latitude, longitude] = myLocation
        console.log(`위도 ${latitude}, 경도: ${longitude}`);
    });

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
import { useRouter } from "next/router";
import Link from 'next/link'
import styles from "../../styles/StaffMap.module.css";

export default function StaffMap() {
    const router = useRouter()

    return (
        <div className={styles.container}>
            <div className={styles.send_location}></div>
        </div>
    )
}
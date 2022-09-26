import { useEffect, useRef, useState } from "react";
import styles from "../../styles/Rank.module.css";
import Link from "next/link";
import { useRouter } from "next/router";
import RankList from "./_components/Rank.jsx";

export default function Rank() {
  const router = useRouter();

  return (
    <div className={styles.background}>
      <div>
        <input
          type="button"
          className={styles.X_button}
          onClick={() => router.push("/../map")}
        ></input>
        <div className={styles.title}>
          <span style={{ color: "#F9E219" }}>SSU</span> 최강우주전사
          <div className={styles.element}>
            <div className={styles.float1}>RANK</div>
            <div className={styles.float2}>NAME</div>
            <div className={styles.float3}>TIME</div>
          </div>
          <RankList />
        </div>
      </div>
    </div>
  );
}

import { useState, useRef, useEffect } from "react";
import { Map, CustomOverlayMap, MapMarker } from "react-kakao-maps-sdk";
import Image from "next/image";
import styles from "../../../styles/Rank.module.css";

const ranks = [
  {
    rankId: 1,
    nickname: "듀크",
    phonenumber: 7486,
    time: "00:00:30",
  },
  {
    rankId: 2,
    nickname: "쏘는사라있따야호",
    phonenumber: 7486,
    time: "00:00:40",
  },
  {
    rankId: 3,
    nickname: "미누스",
    phonenumber: 7486,
    time: "00:00:50",
  },
  {
    rankId: 4,
    nickname: "벨라",
    phonenumber: 7486,
    time: "00:01:00",
  },
  {
    rankId: 5,
    nickname: "타미",
    phonenumber: 7486,
    time: "00:01:30",
  },
];

export const RankList = () => {
  return (
    <div>
      {ranks.map((rank) => {
        return (
          <div className={styles.ranking}>
            {true == rank.rankId <= 3 ? (
              <div className={styles.li_1_1}>{rank.rankId}</div>
            ) : (
              <div className={styles.li_1_2}>{rank.rankId}</div>
            )}
            <div className={styles.li_2}>
              {rank.nickname}
              {rank.phonenumber}
            </div>
            <div className={styles.li_3}>{rank.time}</div>
          </div>
        );
      })}
    </div>
  );
};

export default RankList;

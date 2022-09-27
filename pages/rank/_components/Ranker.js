import styles from "../../../styles/Rank.module.css";

export const Ranker = ({ ranker, rank }) => {
  const { nickname, lastNum, playTime } = ranker;

  return (
    <>
      <div className={styles.ranking}>
        <div className={styles.li_1}>{rank + 1}</div>
        <div className={styles.li_2}>{`${nickname} ${lastNum}`}</div>
        <div className={styles.li_3}>{playTime}</div>
      </div>
    </>
  );
};

export default Ranker;

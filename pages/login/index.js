import Link from "next/link";
import { func } from "prop-types";
import { useEffect, useRef, useState } from "react";
import styles from "../../styles/Login.module.css";

export default function Login() {
  const [codeNumber, setCodeNumber] = useState("");
  const onChange = (e) => {
    const { name, value } = e.target;
    console.log(name, value);
    setCodeNumber(value);
  };

  const [isLoginSuccess, setIsLoginSuccess] = useState(false);
  const [isBye, setIsBye] = useState(false);

  const onLoginChange = () => {
    setIsLoginSuccess((prev) => !prev);
  };

  const onByeChange = () => {
    setIsBye((prev) => !prev);
    setIsLoginSuccess(false);
  };

  return (
    <div className={styles.background}>
      {!isBye && (
        <div>
          <div className={styles.logo_img} />
          {!isLoginSuccess && (
            <div>
              <div>
                <a className={styles.inputrequest}>Input your code number..</a>{" "}
                <br />
                <input
                  name="student-id"
                  type="text"
                  value={codeNumber}
                  className={styles.inputBox}
                  onChange={onChange}
                  placeholder="code number"
                />
                <br />
                <a className={styles.prove}>
                  <span style={{ color: "#F9E219" }}>학번</span>으로 대숭실대
                  우주전사임을 증명해주세요!
                </a>
                <div className={styles.loginBtn} onClick={onLoginChange}>
                  Login{">"}
                </div>
              </div>
            </div>
          )}
          {isLoginSuccess && (
            <div>
              <a className={styles.startrequest}>
                Do you want to go <br /> hunting stardust?
              </a>
              <br />
              <button className={styles.goBtn}>Go!</button>
              <br />
              <button className={styles.awayBtn} onClick={onByeChange}>
                Run away?
              </button>
            </div>
          )}
        </div>
      )}
      {isBye && (
        <div className={styles.okBye}>
          <a>Okay, Bye...</a>
        </div>
      )}
      <a className={styles.ssumcLogo}>SSUMC</a>
    </div>
  );
}

import Link from "next/link";
import { func } from "prop-types";
import { useEffect, useRef, useState } from "react";
import styles from "../../styles/Login.module.css";

export default function Login() {
  const [codeNumber, setCodeNumber] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const onNicknameChange = (e) => {
    const { name, value } = e.target;
    console.log(name, value);
    setCodeNumber(value);
  };

  const onPhoneChange = (e) => {
    const { name, value } = e.target;
    console.log(name, value);
    setPhoneNumber(value);
  };

  const [isLoginSuccess, setIsLoginSuccess] = useState(false);
  const [isBye, setIsBye] = useState(false);
  const [isError, setIsError] = useState(false);

  const onLoginChange = () => {
    setIsLoginSuccess((prev) => !prev);
  };

  const onByeChange = () => {
    setIsBye((prev) => !prev);
    setIsLoginSuccess(false);
  };

  const onErrorChange = () => {
    setIsError((prev) => !prev);
  };

  return (
    <div className={styles.background}>
      {!isBye && (
        <div>
          <div className={styles.logo_img} />
          {!isLoginSuccess && (
            <div>
              <div>
                <div className={styles.inputrequest}>
                  Input your{" "}
                  <span style={{ color: "#F9E219" }}>nickname..</span>
                </div>
                <input
                  name="student-nickname"
                  type="text"
                  value={codeNumber}
                  className={styles.inputBox}
                  onChange={onNicknameChange}
                  placeholder="nickname"
                />
                {isError && (
                  <div className={styles.errormessage}>
                    숫자, 특수문자를 제외한 1~8글자를 입력해주세요
                  </div>
                )}
                <div className={styles.inputrequest}>
                  Input your <span style={{ color: "#F9E219" }}>phone </span>
                  number..
                </div>
                <div>
                  <input
                    name="student-phonenumber"
                    type="text"
                    value={phoneNumber}
                    className={styles.inputBox}
                    onChange={onPhoneChange}
                    placeholder="phone number"
                  />
                  {isError && (
                    <div className={styles.errormessage}>
                      휴대폰번호가 올바르지 않아요
                    </div>
                  )}
                </div>
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

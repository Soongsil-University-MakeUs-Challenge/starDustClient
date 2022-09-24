import Link from "next/link";
import { func } from "prop-types";
import { useEffect, useRef, useState } from "react";
import { login } from "../../apis";
import styles from "../../styles/Login.module.css";

export default function Login() {
  const [nickname, setNickname] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [nicknameError, setNicknameError] = useState("");
  const [phoneNumberError, setPhoneNumberError] = useState("");

  const onNicknameChange = (e) => {
    const { name, value } = e.target;
    //console.log(name, value);
    setNickname(value);
  };

  const onPhoneChange = (e) => {
    const { name, value } = e.target;
    //console.log(name, value);
    setPhoneNumber(value);
  };

  const [isLoginSuccess, setIsLoginSuccess] = useState(false);
  const [isBye, setIsBye] = useState(false);
  const [isError, setIsError] = useState(false);

  const onLoginChange = () => {
    setIsLoginSuccess((prev) => !prev);
  };

  const onClickLogin = async (isSuccess) => {
    console.log(nickname + phoneNumber)
    const regexNickname = /^[ㄱ-ㅎ|가-힣|a-z|A-Z|]+$/

    // 벨리데이션
    if (!(nickname.length >= 1 && nickname.length <= 8 && regexNickname.test(nickname))) {
      setNicknameError("숫자, 특수문자를 제외한 1~8글자를 입력해주세요")
    } else {
      setNicknameError("")
    }
    
    if(phoneNumber.length == 0) {
      setPhoneNumberError("휴대폰번호가 올바르지 않아요")
    } else {
      setPhoneNumberError("")
    }
    
    //const response = await login(codeNumber, phoneNumber)
      
    if (isSuccess) {
        setIsLoginSuccess((prev) => !prev);
    } else {
    
    }
  }

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
                  value={nickname}
                  className={styles.inputBox}
                  onChange={onNicknameChange}
                  placeholder="nickname"
                />
                {nicknameError && (
                  <div className={styles.errormessage}>
                    {nicknameError}
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
                  {phoneNumberError && (
                    <div className={styles.errormessage}>
                      {phoneNumberError}
                    </div>
                  )}
                </div>
                <div className={styles.loginBtn} onClick={() => onClickLogin(false)}>
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

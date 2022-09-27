import Link from "next/link";
import { func } from "prop-types";
import { useEffect, useRef, useState } from "react";
import { login, starDustAPI } from "../../apis";
import styles from "../../styles/Login.module.css";
import { useRouter } from "next/router";
import { postuserLogin } from "../../apis/service";

export default function Login() {
  const router = useRouter();
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

  const onClickLogin = async () => {
    // console.log(nickname + phoneNumber);
    const regexNickname = /^[ㄱ-ㅎ|가-힣|a-z|A-Z|]+$/;
    const regexPhoneNumberLength = /^[0-9]+$/;
    const regexPhoneNumber = /^(?:(010\d{4})|(01[1|6|7|8|9]\d{3,4}))(\d{4})$/;
    let isValidate = true;

    // 벨리데이션
    if (
      !(
        nickname.length >= 1 &&
        nickname.length <= 8 &&
        regexNickname.test(nickname)
      )
    ) {
      isValidate = false;
      setNicknameError("숫자, 특수문자를 제외한 1~8글자를 입력해주세요");
    } else {
      setNicknameError("");
    }

    if (
      !(
        phoneNumber.length == 11 &&
        regexPhoneNumberLength.test(phoneNumber) &&
        regexPhoneNumber.test(phoneNumber)
      )
    ) {
      isValidate = false;
      setPhoneNumberError("휴대폰번호가 올바르지 않아요");
    } else {
      setPhoneNumberError("");
    }

    // if (nicknameError.length > 0 || phoneNumberError.length > 0) return;

    if (isValidate) {
      const response = await postuserLogin(nickname, phoneNumber, "SSU");

      if (response.status == 200 && response.data.code == 200) {
        // console.log(response.data.result);

        if (typeof window !== "undefined") {
          localStorage.setItem("jwt", response.data.result.userJwt);
        }

        starDustAPI.defaults.headers["X-ACCESS-TOKEN"] =
          response.data.result.userJwt;
        if (response.data.result.user) {
          setIsLoginSuccess((prev) => !prev);
        } else {
          router.push("/../staff-map");
        }
      } else {
        alert("로그인에 실패했어요,,,");
      }
    }
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
                  value={nickname}
                  className={styles.inputBox}
                  onChange={onNicknameChange}
                  placeholder="nickname"
                />
                <div className={styles.errormessage}>{nicknameError}</div>
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
                  <div className={styles.errormessage}>{phoneNumberError}</div>
                </div>
                <div className={styles.loginBtn} onClick={() => onClickLogin()}>
                  Login{">"}
                </div>
              </div>
            </div>
          )}
          {isLoginSuccess && (
            <div>
              <div className={styles.startrequest}>
                Do you want to go <br /> hunting stardust?
              </div>
              <button
                className={styles.goBtn}
                onClick={() => router.push("/../map")}
              >
                Go!
              </button>
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

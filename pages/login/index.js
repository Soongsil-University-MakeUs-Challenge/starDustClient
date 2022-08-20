import Link from "next/link";
import { func } from "prop-types";
import { useEffect, useRef, useState } from "react";
import styles from "../../styles/Login.module.css";

export default function Login(){
    const [codeNumber, setCodeNumber] = useState("");
    const onChange = (e) => {
        const { name, value } = e.target
        console.log(name, value)
        setCodeNumber( value )
    }

    const [isLoginSuccess, setIsLoginSuccess] = useState(false)

    const onLoginChange = () => {
        setIsLoginSuccess(prev => !prev)
    }

    console.log(isLoginSuccess)

    return(
        <div className={styles.background}>
            <div className={styles.logo_img}/>
                { !isLoginSuccess && 
                    <div><a className={styles.inputrequest}>Input your code number..</a>
                        <div>
                            <input
                                name="student-id"
                                type="text"
                                value={codeNumber}
                                className={styles.inputBox}
                                onChange={onChange}
                                placeholder="code number"/>
                                
                            <div className={styles.prove}>
                                <a><span style={{color:"#F9E219"}}>학번</span>으로 대숭실대 우주전사임을 증명해주세요!</a>
                            </div>
                        </div>
                    </div>
                }
                
                { !isLoginSuccess &&  <div className={styles.loginBtn} onClick={onLoginChange}>Login{">"}</div> }
               
                { isLoginSuccess &&  <div className={styles.startrequest}><a>Do you want to go <br/> hunting stardust?</a></div> }
                { isLoginSuccess && <div><button className={styles.goBtn}>Go!</button></div> }
                { isLoginSuccess && <div><button className={styles.awayBtn} onClick={onLoginChange}>Run away?</button></div> }

                <div className={styles.ssumcLogo}><a>SSUMC</a></div>   
        </div>  
    )
}

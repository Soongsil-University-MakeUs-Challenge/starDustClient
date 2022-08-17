import { useEffect, useRef, useState } from "react";
import styles from "../../styles/Login.module.css";


export default function Login(){

    const[codeNumber,setCodeNumber]=useState("");
    const onChange = (event) => {
        console.log(event.target.value);
    }
return(
    <div className={styles.background}>
        <div className={styles.logo_img}/>
            <div><a className={styles.inputrequest}>Input your code number...</a>
                <div>
                    <input
                        id="id"
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
            <div className={styles.loginBtn}><a href="/login">Login{">"}</a></div>
            <div className={styles.ssumcBtn}><a>SSUMC</a></div>
    </div>  
)
}

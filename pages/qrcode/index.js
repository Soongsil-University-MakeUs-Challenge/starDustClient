import React, {useState, useEffect} from "react";
import { QrReader } from "react-qr-reader";

export default function QrcodeScanner () {
    const [data, setData] = useState('No result');
    const [hasRendered, setHasRendered] = useState(false);
    

    useEffect(() => {
        setHasRendered(true)
      }, [])

      const postDustNum = async(dustNum) => {
        const response = await postcatchedDust(dustNum)

        if(response.status==200) {
            if(response.body.code == 200) {
                //router.back() //map화면으로 다시 돌아가게 해줘야함 근데이게맞아?ㅋ
                //

            }
        }
      }

      const dustMapper = {
        1: styles.dust_black,
        2: styles.dust_white,
        3: styles.dust_green,
        4: styles.dust_orange,
        5: styles.dust_purple,
      };

    return (
        <>
            {hasRendered && (
                <QrReader
                    onResult={(result, error) => {
                    if (!!result) {
                        setData(result?.text);
                        postDustNum(Number(data));

                    }

                    if (!!error) {
                        console.info(error);
                    } }}
                    style={{ width: '100%' }} />
            )}
             <p>{data}</p>
        </>
    )
}
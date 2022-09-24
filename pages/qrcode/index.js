import React, {useState, useEffect} from "react";
import { QrReader } from "react-qr-reader";
import { postcatchedDust } from "../../apis/service";
import { useRouter } from "next/router";

export default function QrcodeScanner () {
    const [data, setData] = useState('No result');
    const [hasRendered, setHasRendered] = useState(false);
    const [dustNum, setDustNum] = useState(0);
    const router=useRouter();

    useEffect(() => {
        setHasRendered(true)
      }, [])

      const postDustNum = async() => {
        const response = await postcatchedDust(dustNum)

        if(response.status==200) {
            if(response.body.code == 200) {
                //router.back() //map화면으로 다시 돌아가게 해줘야함 근데이게맞아?ㅋ
                //

            }
        }
      }
    
    return (
        <>
            {hasRendered && (
                <QrReader
                    onResult={(result, error) => {
                    if (!!result) {
                        setData(result?.text);
                        //setDustNum(Number(data)); //dustnum설정해주깅~
                        //postDustNum
                        
                        
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
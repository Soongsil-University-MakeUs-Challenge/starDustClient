import React, {useState, useEffect} from "react";
import { QrReader } from "react-qr-reader";
import { postcatchedDust } from "../../apis/service";
import { useRouter } from "next/router";


export default function QrcodeScanner () {
    const router = useRouter();
    const [data, setData] = useState('No result');
    const [hasRendered, setHasRendered] = useState(false);
    useEffect(() => {
        setHasRendered(true)
      }, [])

       const postDustNum = async(dustNum) => {
        const response = await postcatchedDust(dustNum)
        
        if(response.status==200) {
            if(response.data.code == 200) {
                router.replace("/../map")
            }
        }
    }


    return (
        <>
            {hasRendered && (
                <QrReader
                    constraints={{
                        facingMode: 'environment'
                    }}
                    onResult={(result, error) => {
                    if (!!result) {
                        setData(result?.text);
                        postDustNum(Number(result.text));
                        

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
import React, {useState, useEffect} from "react";
import { QrReader } from "react-qr-reader";

export default function QrcodeScanner () {
    const [data, setData] = useState('No result');
    const [hasRendered, setHasRendered] = useState(false);
    useEffect(() => {
        setHasRendered(true)
      }, [])

    return (
        <>
       <div>
        {hasRendered && (
        <QrReader
        onResult = {(result, error) =>{
        if(!result) {
            setData(result?.text);
            console.log(result?.text);
        }
        if(!error) {
            console.info(error);
        }
        }}
        styles={{width : '100%'}}>
        </QrReader>
            )}
    
    </div>
    <p>{data}</p>
        
    </>
    )
}
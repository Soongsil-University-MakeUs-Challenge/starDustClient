import React, { useState, useEffect } from "react";
import { QrReader } from "react-qr-reader";
import { postcatchedDust } from "../../apis/service";
import { useRouter } from "next/router";

export default function QrcodeScanner() {
  const router = useRouter();
  const [data, setData] = useState("No result");
  const [hasRendered, setHasRendered] = useState(false);
  useEffect(() => {
    setHasRendered(true);

    return () => setHasRendered(false);
  }, []);

  const postDustNum = async (dustNum) => {
    const response = await postcatchedDust(dustNum);
    console.log("CALL");

    if (response.status == 200) {
      if (response.data.code == 200) {
        console.log("DONE");
        setHasRendered(false);
        router.replace("/../map");
      }
    }
  };

  return (
    <>
      {hasRendered && (
        <QrReader
          constraints={{
            facingMode: "environment",
          }}
          onResult={(result, error) => {
            if (!!result) {
              let code = result?.text;
              if (Number(code) != NaN) {
                postDustNum(Number(result.text));
              }

              setData(result?.text);
            }
            if (!!error) {
              //   console.info(error);
            }
          }}
          onScan={hasRendered}
          style={{ width: "100%" }}
        />
      )}
      <p>{data}</p>
    </>
  );
}

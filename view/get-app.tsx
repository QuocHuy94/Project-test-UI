import React from "react";
import Image from "next/image";
import QRCode from "../assets/images/qrcode.svg";

const GetApp: React.FC = () => {
  return (
    <div key="get-app" className="card_qrCode">
      <div className="container-qrCode">
        <div className="content-app">
          <div className="title">{"Get The App"}</div>
          <div className="content">
            {
              "Love this title? Scan the QR code to continue reading right on your mobile devices."
            }
          </div>
        </div>
        <div className="qr">
          <Image src={QRCode} alt="qr" className="qr-code" />
        </div>
      </div>
    </div>
  );
};
export default GetApp;

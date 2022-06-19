import React from "react";
import Feedbox from "../feedbox";
import Help from "./Help.svg";
import Success from "./Success.svg";
import Pending from "./Pending.svg";
import Error from "./Error.svg";

const Feedboxtitle = () => {
  return (
    <div style={{ marginLeft: "30px" }}>
      <div
        style={{
          marginTop: "20px",
          marginBottom: "20px",
          display: "flex",
          justifyContent: "left",
          fontSize: "16px",
          fontWeight: "700",
        }}
      >
        Help Alert Box With Title
      </div>
      <Feedbox
        {...{
          type: "Help",
          Icon: <img src={Help} style={{ height: "26px" }} />,
        }}
      />
      <div
        style={{
          marginTop: "20px",
          marginBottom: "20px",
          display: "flex",
          justifyContent: "left",
          fontSize: "16px",
          fontWeight: "700",
        }}
      >
        Success Alert Box With Title
      </div>
      <Feedbox
        {...{
          type: "Success",
          Icon: <img src={Success} style={{ height: "26px" }} />,
        }}
      />
      <div
        style={{
          marginTop: "20px",
          marginBottom: "20px",
          display: "flex",
          justifyContent: "left",
          fontSize: "16px",
          fontWeight: "700",
        }}
      >
        Warning Alert Box With Title
      </div>
      <Feedbox
        {...{
          type: "Warning",
          Icon: <img src={Pending} style={{ height: "26px" }} />,
        }}
      />
      <div
        style={{
          marginTop: "20px",
          marginBottom: "20px",
          display: "flex",
          justifyContent: "left",
          fontSize: "16px",
          fontWeight: "700",
        }}
      >
        Error Alert Box With Title
      </div>
      <Feedbox
        {...{
          type: "Error",
          Icon: <img src={Error} style={{ height: "26px" }} />,
        }}
      />
    </div>
  );
};

export default Feedboxtitle;

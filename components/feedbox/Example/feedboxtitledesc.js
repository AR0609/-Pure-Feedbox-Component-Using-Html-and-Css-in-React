import React from "react";
import Help from "./Help.svg";
import Success from "./Success.svg";
import Pending from "./Pending.svg";
import Error from "./Error.svg";

import Feedbox from "../feedbox";

const Feedboxtitledesc = () => {
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
        Help Alert Box with Title And Description
      </div>
      <Feedbox
        {...{
          type: "Help",
          desc: "Content is the information contained within communication media.",
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
        Success Alert Box With Title And Description
      </div>
      <Feedbox
        {...{
          type: "Success",
          desc: "Content is the information contained within communication media.",
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
        Warning Alert Box With Title And Description
      </div>
      <Feedbox
        {...{
          type: "Warning",
          desc: "Content is the information contained within communication media.",
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
        Error Alert Box With Title And Description
      </div>
      <Feedbox
        {...{
          type: "Error",
          desc: "Content is the information contained within communication media.",
          Icon: <img src={Error} style={{ height: "26px" }} />,
        }}
      />
    </div>
  );
};

export default Feedboxtitledesc;

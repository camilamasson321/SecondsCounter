import React, { useState, useEffect } from "react";

const SecondsCounter = () => {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds(seconds => seconds + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, []);
  let onesecond = seconds % 10
  let tensecond= Math.floor(seconds/ 10) % 10
  let hundredsecond= Math.floor(seconds/100) % 10
  let thousandsecond=Math.floor(seconds/1000) % 10

  return (
    <div className=" main text-white d-flex justify-content-evenly py-2 text-center align-items-center flex-wrap" >
      <div className="clock card ">
        <i className="fas fa-clock"></i>
      </div>
      <div className="card thousands">{thousandsecond}</div>
      <div className="card hundreds">{hundredsecond}</div>
      <div className="card tens">{tensecond}</div>
      <div className="card ones">{onesecond}</div>
    </div>
  );
};

export default SecondsCounter;

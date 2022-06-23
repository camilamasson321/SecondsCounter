import React, { useState, useEffect } from "react";

const SecondsCounter = (props) => {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds(seconds => seconds + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="d-flex flex-wrap" >
      <div className="clock">
        <i className="fas fa-clock"></i>
      </div>
      <div className="thousands">{props.thousandsecond}</div>
      <div className="ones">{props.onesecond}</div>
      <div className="tens">{props.tensecond}</div>
      <div className="hundreds">{props.hundredsecond}</div>
    </div>
  );
};

export default SecondsCounter;

import React, { useState, useEffect } from "react";


const SecondsCounter = (props) => {
  console.log(props)
  const [seconds, setSeconds] = useState(0);
  // useEffect(() => {
  //   // Update the document title using the browser API

  //   const interval = setInterval(() => {
  //     setSeconds((seconds) => seconds + 1);
  //   }, 1000);
  // });


  return (
    <div className="d-flex flex-wrap">
      <div className="clock">
      <i className="fas fa-clock"></i>
      </div>
      <div className="ones">{props.onesecond}</div>
      <div className="tens">{props.tenseconds}</div>
      <div className="hundreds">{props.hundredseconds}</div>
      <div className="thousands">{props.thousandsecond}</div>

    </div>
  );
};

export default SecondsCounter;

// const interval = setInterval(() => {
//   setSeconds((seconds) => seconds + 1);
// }, 1000);

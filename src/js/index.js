//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";
import SecondsCounter from "/workspace/react-hello/src/js/component/SecondsCounter.jsx";

//import your own components



//render your react application
let seconds=0

let onesecond=(seconds/1)
let tensecond=(seconds/10)
let hundredsecond=(seconds/100)
let thousandsecond=(seconds/1000)




ReactDOM.render( <SecondsCounter onesecond={onesecond} tensecond={tensecond} hundredsecond={hundredsecond} thousandsecond={thousandsecond}/>, document.querySelector("#app") )


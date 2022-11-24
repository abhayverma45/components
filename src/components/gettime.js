import React, { useState } from "react";

const Currtime=()=>{
    const[time,settime]=useState(new Date().toLocaleTimeString());
    // new Date().toLocaleTimeString()

    const ctime=()=>{
        settime(new Date().toLocaleTimeString())
    }
    setInterval(ctime,1000);
    return(
        <>
        <div className="divstyle">

        <h1> Currtime time : <span style={{color:"white"}}>{time}</span></h1>
        {/* <button onClick={ctime}>gettime</button> */}
        </div>


        </>
    )
}
export default Currtime;
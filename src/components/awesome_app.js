import React, { useState } from "react";

const Awesome=()=>{
    const yellow= "#274ca0";
    const [name,setname]=useState("click me 🙂")
    const [coloring,setcoloring]=useState(yellow);

    const changeback = () => {
        const purple="#471e3e";
        setcoloring(purple);
        setname("☘️ radhe radhe 🍂");
    };

    const changedouble = () => {
        const green="#285c2a";
        setcoloring(green);
        setname("💯 On a scale from 1 to 10, you're an 11 🤟🏻");
    };

    return(
        <>
        
        <div className="divstyle" style={{backgroundColor: coloring }}>

        <button  className="buttonstyle" onClick={changeback} onDoubleClick={changedouble}>{name}</button>

        </div>
        

        </>
    )
}
export default Awesome;
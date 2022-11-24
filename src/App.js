import React from "react";
import SLOTM from "./components/abhay"
import Gettime from "./components/gettime";
import Awesomeapp from "./components/awesome_app";
import Form from "./components/form";


const App=()=>{
    return(
        <>
        <h1><center>✨welcome to slot machine game✨</center></h1>
        <div className="style">
        <center>
        <SLOTM x="✨" y="✨" z="✨"/>
        <SLOTM x="✨" y="💔" z="☘️" />
        <SLOTM x="💯" y="🥺" z="😒" />
        </center>
        </div>

        <Gettime/>
        <Awesomeapp/>
        <Form/>


        </>
    )
}
export default App;
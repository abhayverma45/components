import React, { useState } from "react";

 const Form=()=>{

    const [name,setname]=useState("");

    const[fullname,setfullname]=useState("");

    const inputtext=(e)=>{
        console.log(name);
        setname(e.target.value);
    }
    
    const abhay=()=>{
        setfullname(name)
    }

    const resetname=()=>{
        setfullname("");
        setname("");
    }


     return(
         <>
         <div className="formstyle">
         <h1>hello {fullname}</h1>
         <br/><br/>
         <input 
         className="buttonstyle"
         type="text" 
             placeholder="enter your name"
             onChange={inputtext}
             value={name}

         />
       <br/>
       <br/>
         <button className="buttonstyle" onClick={abhay}>click me</button>
         <br/>
         <br/>

         <button className="buttonstyle" onClick={resetname}>reset</button>


        </div>
         </>
     )
 }
 export default Form;
import React from "react";

const Abhay=(props)=>{
        let x=props.x;
        let y=props.y;
        let z=props.z;
    if( x===y && y===z ){
        
        return(
            <>
              <h1>{x} {y} {z}</h1>
                <h1>this is matching</h1>
            </>

        );
    }
    else{
        return(
            <>
            <h1> {x} {y} {z}  </h1>
                <h1>this is not matching</h1>
            </>
        )
    }
        
    }

export default Abhay;
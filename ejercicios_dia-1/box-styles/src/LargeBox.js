import React from 'react';
import './App.css';


function LargeBox({myClass, moreStyles}){

   const myStyle={
        ...moreStyles,   
        fontStyle:'italic',
    };

    
    return(
       <div className={`box ${myClass}`} style={myStyle}>large orange box</div>
    )

};

export default LargeBox
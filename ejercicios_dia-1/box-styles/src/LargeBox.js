import React from 'react';
import './App.css';


function LargeBox(){

   const myStyle={
        backgroundColor:'orange',
        fontStyle:'italic',
    };

    
    return(
       <div className='box box--large' style={myStyle}>large orange box</div>
    )

};

export default LargeBox
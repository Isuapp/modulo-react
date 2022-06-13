import React from 'react';
import './App.css';


function SmallBox({myClass, moreStyles}){

    const myStyle={
        ...moreStyles,
        fontStyle:'italic',
    };

     return(
        <div className={`box ${myClass}`} style={myStyle}>small lightblue box</div>
     )

};

export default SmallBox;
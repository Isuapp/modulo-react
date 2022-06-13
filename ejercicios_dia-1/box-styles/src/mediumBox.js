import React from 'react';
import './App.css';


function MediumBox({myClass, moreStyles}){

    const myStyle={
        ...moreStyles,
        fontStyle:'italic',
    };

    return(
        <div className={`box ${myClass}`} style={myStyle}>medium pink box</div>
    )
};

export default MediumBox;
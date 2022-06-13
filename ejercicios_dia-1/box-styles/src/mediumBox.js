import React from 'react';
import './App.css';


function MediumBox(){

    const myStyle={
        backgroundColor:'pink',
        fontStyle:'italic',
    };

    return(
        <div className='box box--medium' style={myStyle}>medium pink box</div>
    )
};

export default MediumBox;
import React from 'react';
import './App.css';


function SmallBox(){

    const myStyle={
        backgroundColor:'lightBlue',
        fontStyle:'italic',
    };

     return(
        <div className='box box--small' style={myStyle}>small lightblue box</div>
     )

};

export default SmallBox;
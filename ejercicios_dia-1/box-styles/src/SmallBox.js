import React from 'react';
import './App.css';

//MyClass lo igualamos a un string vacio por si acasioi alguien no pasa myClass :)
function SmallBox({myClass='', moreStyles}){

    // Copiamos el objeto moreStyles, el objeto moreStyles es lo que le pasemos
    // en app.js denro del atributo moreStyles de cada uno de los componentes 0.0
    const myStyle={
        ...moreStyles,
        fontStyle:'italic',
    };

     return(
        <div className={`box ${myClass}`} style={myStyle}>small lightblue box</div>
     )

};

export default SmallBox;
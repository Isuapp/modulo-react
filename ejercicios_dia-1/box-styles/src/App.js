import * as React from 'react';
import './App.css';
import Box from './Box';

// Añade una prop "className" a cada uno y aplica la clase correcta.
// Las clases disponibles son: "box", "box--large", "box--medium", "box--small".

// Añade también una prop "style" a cada uno de forma que su "background color"
// encaje con lo que dice el texto. Añade también [fontStyle: 'italic'].




function App() {
    return (
        <div>
            <Box myClass="box--small"  moreStyles={{backgroundColor:"lightBlue"}}>medium lightBlue box</Box>
            <Box myClass="box--medium"  moreStyles={{backgroundColor:"pink"}}>medium pink box</Box>
            <Box myClass="box--large" moreStyles={{backgroundColor:"orange"}}>medium orange box</Box>
        </div>
    );
}

export default App;

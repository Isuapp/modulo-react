import * as React from 'react';
import './App.css';
import LargeBox from './LargeBox';
import MediumBox from './mediumBox';
import SmallBox from './SmallBox';

// Añade una prop "className" a cada uno y aplica la clase correcta.
// Las clases disponibles son: "box", "box--large", "box--medium", "box--small".

// Añade también una prop "style" a cada uno de forma que su "background color"
// encaje con lo que dice el texto. Añade también [fontStyle: 'italic'].




function App() {
    return (
        <div>
            <SmallBox/>
            <MediumBox/>
            <LargeBox/>
        </div>
    );
}

export default App;

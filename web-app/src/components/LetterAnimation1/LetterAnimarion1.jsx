import React from 'react';
import './LetterAnimation1.css';

const LetterAnimation1 = ({ string }) => {

    // Creamos un arreglo "letters" que contiene cada uno de los caracteres enviados en la cadena "string"
    const letters = string.split('');

    return (
    <div className='letter-container'>
        {/* Crea un elemento span para cada elemento existente dentro del arreglo "letters" */}
            {letters.map((letter, index) => (
            <span key={index} className="letter-animation-1">
                {letter}
            </span>
            ))}
    </div>
    );
};

export default LetterAnimation1;

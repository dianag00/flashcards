import { useState } from 'react';

const Card = (props) => { // passing props (from App.jsx) to the Card component

    let content; // storing the value of props here

    if (props.isFlipped) { 
        content = props.answer;
    }
    else {
        content = props.question;
    }

    return ( // setting an event handler onClick which expects a function as its value -- hence the arrow functiuon which wraps around the props setIsFlipped to execute until the click actually happens!
        <div onClick={() => props.setIsFlipped(!props.isFlipped)}>
            {content}
        </div>

    )
}

export default Card;
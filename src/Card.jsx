import { useState } from 'react';

const Card = (props) => { // passing props (from App.jsx) to the Card component
    return(
    <div className="flip-card" onClick={() => props.setIsFlipped(!props.isFlipped)}>
        <div className={props.isFlipped ? "flip-card-inner flipped" : "flip-card-inner"}> {/* if isFlipped is true then use class flip-card-inner flipped, otherwise just use flip-card-inner */}
            <div className="flip-card-front">
                {props.question}
            </div>
            <div className="flip-card-back">
                {props.answer}
            </div>
        </div>
    </div>
    )
}

export default Card;
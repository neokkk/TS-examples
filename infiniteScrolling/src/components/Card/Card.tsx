import React from 'react';

import './Card.scss';

interface CardInterface {
    color: string;
}

const cardStyle = (color: string): object => {
    return {
        backgroundColor: color
    }
}

function Card({ color }: CardInterface) {
    return (
        <div className={`Card ${color}`} style={cardStyle(color)}></div>
    );
}

export default Card;
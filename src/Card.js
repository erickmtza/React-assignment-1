import React from 'react';
import './index.css';

function Card(props) {
    return (
        <div
            className='Card'
        >
            <h3>{props.title}</h3>
            <p>{props.content}</p>
            <button
                onClick={() => props.onDeleteItem(props.id)}
            >Delete Card</button>
        </div>
    )
}

export default Card;
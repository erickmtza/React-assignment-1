import React from 'react';
import Card from './Card'
import './index.css';

function List(props) {

    const cardInfo = props.cards.map(card => 
        <Card
            title={card.title}
            content={card.content}
            onDeleteItem={props.onDeleteItem}
            key={card.id}
            id={card.id}
        />    
    )

    return (
        <section className='List'>
            <header className='List-header'>
                <h2>{props.header}</h2>
            </header>
            <div className='List-cards'>
                {cardInfo}
            </div>
            <button
                onClick={ () => props.addRandomCard(props.id)}
            >Add Card
            </button>
        </section>
    )
}

export default List;
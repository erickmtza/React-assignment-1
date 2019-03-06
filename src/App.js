import React from 'react';
import List from './List'
import './index.css';

import STORE from './store'

const newRandomCard = () => {
  const id = Math.random().toString(36).substring(2, 4)
    + Math.random().toString(36).substring(2, 4);
  return {
    id,
    title: `Random Card ${id}`,
    content: 'lorem ipsum',
  }
}

class App extends React.Component {

  state = {
    store: STORE,
  };

  handleDelete = (cardId) => {
    const { lists, allCards } = this.state.store;

    const newLists = lists.map(list => {
      list.cardIds = list.cardIds.filter(id => id !== cardId);
      return list;
    });

    delete allCards[cardId];

    this.setState({
      store: {
        lists: newLists,
        allCards
      }
    })
  }

  handleAddCard = (listId) => {
    const newCard = newRandomCard()

    const newLists = this.state.store.lists.map(list => {
      if (list.id === listId) {
        list.cardIds.push(newCard.id)
      }
      return list
    })

    this.setState({
      store: {
        lists: newLists,
        allCards: {
          ...this.state.store.allCards,
          [newCard.id]: newCard
        }
      }
    })
  };


  render() {
    return (
      <main className='App'>
        <header className='App-header'>
          <h1>Trelloyes!</h1>
        </header>  
          <div className='App-list'>
            {this.state.store.lists.map( list => (
              <List
                key={list.id}
                id={list.id}
                header={list.header}
                cards={list.cardIds.map( id => this.state.store.allCards[id])}
                onDeleteItem={this.handleDelete}
                addRandomCard={this.handleAddCard}
              />
            ))}
          </div>
      </main>
    );
  }
  
}

export default App;

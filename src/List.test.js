import React from 'react';
import ReactDOM from 'react-dom';
import List from './List';
import store from './store'

import renderer from 'react-test-renderer';

describe('Messages component', () => {
    const lists = store.lists.map( list => 
        <List
          key={list.id}
          header={list.header}
          cards={list.cardIds.map( id => store.allCards[id])}
        />
      )

    it('renders without crashing', () => {
      const div = document.createElement('div');
      ReactDOM.render(lists, div);
      ReactDOM.unmountComponentAtNode(div);
    });

    it('renders the UI as expected', () => {
        const tree = renderer
          .create(lists)
          .toJSON();
          expect(tree).toMatchSnapshot();
      });
    
});
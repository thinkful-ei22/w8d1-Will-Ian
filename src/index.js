import React from 'react';
import ReactDOM from 'react-dom';

import './reset.css';
import './index.css';

import Game from './components/game';
import { addGuess } from './actions';
import store from './store';
import {Provider} from 'react-redux';


//store.dispatch(addGuess(2));
// store.dispatch(addGuess(8));
// console.log(store.getState());
// store.dispatch(addGuess(55));
// console.log(store.getState());


ReactDOM.render(
  <Provider store={store}>
    <Game />
  </Provider>,
  document.getElementById('root')
);

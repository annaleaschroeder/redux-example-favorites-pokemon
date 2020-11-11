import { createStore } from 'redux';
import reducer from './reducer';

const store = createStore(reducer);

fetch('https://pokeapi.co/api/v2/pokemon/')
  .then((res) => res.json())
  .then((data) => {
    store.dispatch({ type: 'list/replace', items: data.results })
  })


export default store;

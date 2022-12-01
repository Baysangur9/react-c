
import React from 'react';
import Number from './Number';
import Buttons from './Buttons';
import { Provider } from 'react-redux';
import { createStore } from 'redux';


const App = () => {

  const initialState = {
     number: 0,
     
  }

  const reducer = (state = initialState, action) => {
      switch (action.type) {
        case 'plus':
        return {
           ...state,
           number: state.number + 1,
        };
        case 'minus':
          return {
            ...state,
            number: state.number - 1,
          };
          default:
          return state;
      }
 
  };

  const store = createStore(reducer)

  return (
     <Provider store={store} >
       <Number />
       <Buttons />
    </Provider>
    
  );
};

export default App;

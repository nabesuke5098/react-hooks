import React, { useReducer } from 'react';
import reducer from '../reducers';
import AppContext from '../contexts/AppContext';
import Events from './Events';
import EventForm from './EventForm';
import 'bootstrap/dist/css/bootstrap.min.css';
console.log({ AppContext });
const App = () =>  {
  const [state, dispatch] = useReducer(reducer,[]);
  console.log(state, ' in App.js');

  return (
    <AppContext.Provider value={'Hello, Provider'}>
      <div className="container-fluid">
        <EventForm state={state} dispatch={dispatch} />
        <Events state={state} dispatch={dispatch} />
      </div>
    </AppContext.Provider>
  );
}

export default App;

import React, { useReducer } from 'react';
import reducer from '../reducers';
import Events from './Events';
import EventForm from './EventForm';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () =>  {
  const [state, dispatch] = useReducer(reducer,[]);
  console.log(state, ' in App.js');

  return (
    <div className="container-fluid">
      <EventForm state={state} dispatch={dispatch} />
      <Events state={state} dispatch={dispatch} />
    </div>
  );
}

export default App;

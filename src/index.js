import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter } from 'react-router-dom';
import { ShiftListProvider } from './contexts/shiftHistoryContext';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faTrashAlt, faEdit, faPencilAlt, faEraser, faTimes, faPlusCircle, faPlus, faSpinner, faBars } from '@fortawesome/free-solid-svg-icons';

library.add(
  faTrashAlt,
  faEdit,
  faPencilAlt,
  faEraser,
  faTimes,
  faPlusCircle,
  faPlus,
  faSpinner,
  faBars,
)

console.log(process.env)

ReactDOM.render(
  <BrowserRouter>
    <ShiftListProvider>
      <App />
    </ShiftListProvider>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
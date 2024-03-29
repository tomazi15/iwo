import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import LoanCalculator from './container/LoanCalculator';
import * as serviceWorker from './serviceWorker';

import { createStore } from 'redux';
import rootReducers from './reducers';
import { Provider } from 'react-redux'


const store = createStore(
    rootReducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    
);


ReactDOM.render(
    <Provider store={store}>
        <LoanCalculator />
    </Provider>
, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

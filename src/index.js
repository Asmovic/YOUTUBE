import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import App from './components/app';
import { setUserInput } from './reducers';

const createStoreWithMiddleware = applyMiddleware()(createStore);

const store = createStore(setUserInput);

ReactDOM.render(
    /*     <Provider store={createStoreWithMiddleware(reducers)}>
        <App />
    </Provider>, */
    /* <App />, */

    /*     <Provider store={store}>
        <App />
    </Provider> */

    <App />,
    document.querySelector('.container')
);

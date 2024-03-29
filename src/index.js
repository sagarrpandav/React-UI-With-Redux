import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {App} from './js/components/App';
import registerServiceWorker from './registerServiceWorker';
import {Provider} from "react-redux"
import {store} from "./js/store/store";

window.myStore = store;

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('root'));
registerServiceWorker();

//  Initialize by dispatching a call to get the hackathon data
//store.dispatch(viewHackathons());
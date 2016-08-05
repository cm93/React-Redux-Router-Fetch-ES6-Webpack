import 'core-js/fn/object/assign';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import CommonContainer from '../../containers/CommonContainer';
import OnlineStoreContainer from '../../containers/OnlineStoreContainer';
import injectTapEventPlugin from 'react-tap-event-plugin'
import { Router, Route, IndexRoute, useRouterHistory } from 'react-router';
import { createHashHistory } from 'history/lib/';
import configureStore from '../../stores/store';
import UTIL  from '../../helper/util';

const appHistory = useRouterHistory(createHashHistory)({ queryKey: false });
const store = configureStore();

injectTapEventPlugin();

// Render the main component into the dom
ReactDOM.render(
    <Provider store={store}>
        <Router history = { appHistory }>
            <Route path='/' component={CommonContainer} >
            	<Route path='/index' component={OnlineStoreContainer} />
            </Route>
        </Router>
    </Provider>
    , document.getElementById('app'));

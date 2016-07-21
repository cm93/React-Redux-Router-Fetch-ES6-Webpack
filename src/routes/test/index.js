import 'core-js/fn/object/assign';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import Test from '../../components/Test';
import injectTapEventPlugin from 'react-tap-event-plugin'
import { Router, Route, IndexRoute, browserHistory, useRouterHistory } from 'react-router';
import { createHashHistory } from 'history/lib/';

const appHistory = useRouterHistory(createHashHistory)({ queryKey: false });

injectTapEventPlugin();
// Render the main component into the dom
ReactDOM.render(
    <Provider >
        <Router history = { appHistory }>
            <Route path='/' component={Test} >
            </Route>
        </Router>
    </Provider>
    , document.getElementById('app'));

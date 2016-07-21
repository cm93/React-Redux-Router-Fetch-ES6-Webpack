import 'core-js/fn/object/assign';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import LoginContainer from '../../containers/LoginContainer';
import LayoutContainer from '../../containers/LayoutContainer';
import AdminContainer from '../../containers/AdminContainer';
import AdminListContainer from '../../containers/AdminListContainer';
import App from '../../containers/LoginContainer';
import injectTapEventPlugin from 'react-tap-event-plugin'
import { Router, Route, IndexRoute, useRouterHistory } from 'react-router';
import { createHashHistory } from 'history/lib/';
import configureStore from '../../stores/configureStore.js';
import UTIL  from '../../helper/util';

const appHistory = useRouterHistory(createHashHistory)({ queryKey: false });
const store = configureStore();

injectTapEventPlugin();

const isGuest = (nextState, replace) => {
    if (!UTIL.isGuest()) {
        replace('/admin-index');
    }
};

const isLogin = (nextState, replace) => {
    if (UTIL.isGuest()) {
        replace('/');
    }
};

// Render the main component into the dom
ReactDOM.render(
    <Provider store={store}>
        <Router history = { appHistory }>
            <Route path='/' onEnter={isGuest}  component={LoginContainer} >
            </Route>
            <Route path='/' onEnter={isLogin}  component={LayoutContainer}>
                <Route path="admin-index" component={AdminContainer} />
                <Route path="admin-list" component={AdminListContainer} />
            </Route>
        </Router>
    </Provider>
    , document.getElementById('app'));

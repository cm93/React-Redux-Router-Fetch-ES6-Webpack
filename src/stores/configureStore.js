import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import reducer from '../reducers/reducers'
import index from '../reducers/index'
import { combineReducers } from 'redux'
import createLogger from 'redux-logger'

const loggerMiddleware = createLogger();
const createStoreWithMiddleware = applyMiddleware(
    thunkMiddleware,
    loggerMiddleware
)(createStore);

const rootReducer = combineReducers(Object.assign(reducer, index));

export default function configureStore(initialState) {
    return createStoreWithMiddleware(rootReducer, initialState)
}

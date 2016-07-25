import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import loginReducer from '../reducers/loginReducer'
import { combineReducers } from 'redux'
import createLogger from 'redux-logger'

const loggerMiddleware = createLogger();
 
const createStoreWithMiddleware = applyMiddleware(
    thunkMiddleware,
    loggerMiddleware
)(createStore);

const rootReducer = combineReducers(Object.assign(loginReducer));

export default function configureStore(initialState) {
    return createStoreWithMiddleware(rootReducer, initialState)
}

import { MODAL_CLOSE, MODAL_OPEN, IS_GUEST, IS_LOGIN, ERROR, RIGHT } from '../actions/loginAction'

function modalStatus(state = {
    loginModal: false,
    holder: false
}, action) {
    switch (action.type) {
        case MODAL_OPEN:
            return Object.assign({}, state, {
                loginModal: true,
                holder: true
            });
        case MODAL_CLOSE:
            return Object.assign({}, state, {
                loginModal: false,
                holder: false
            });
        default:
            return state
    }
}

function loginStatus(state={
    hasError: false,
    loginStatus: false
}, action) {
    switch (action.type) {
        case IS_LOGIN:
            return Object.assign({}, state, {
                hasError: false,
                loginStatus: true
            });
        case IS_GUEST:
            return Object.assign({}, state, {
                hasError: false,
                loginStatus: false
            });
        case ERROR:
            return Object.assign({}, state, {
                hasError: true,
                loginStatus: false
            });
        case RIGHT:
            return Object.assign({}, state, {
                hasError: false,
                loginStatus: false
            });
        default:
            return Object.assign({}, state, {
                hasError: false,
                loginStatus: false
            });
    }
}

const index = {
    modalStatus,
    loginStatus
};

export default index

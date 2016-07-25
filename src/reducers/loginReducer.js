import { MODAL_CLOSE, MODAL_OPEN } from '../actions/loginAction'

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

const index = {
    modalStatus
};

export default index

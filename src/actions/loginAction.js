/**
 * Created by dev on 16/7/22.
 */
import fetchPost from '../helper/api';
import UTIL from '../helper/util';
import  DIX  from '../helper/const';

export const MODAL_OPEN = 'MODAL_OPEN';
export const MODAL_CLOSE = 'MODAL_CLOSE';
export const IS_LOGIN = 'IS_LOGIN';
export const IS_GUEST = 'IS_GUEST';
export const ERROR = 'ERROR';
export const RIGHT = 'RIGHT';

export function userLogin(phone, password) {
    return (dispatch) => {
        fetchPost(DIX.API.USER_LOGIN, {
            phone: phone,
            password: password
        }).then(data => {
            switch (data.code) {
                case 0:
                    //UTIL.set(DIX.KEY.KEY_USER, JSON.stringify(data.user));
                    //UTIL.setToken(data.token);
                    return dispatch({type: IS_LOGIN});
                case -1:
                    return dispatch({type: ERROR});
                default:
                    return dispatch({type: IS_GUEST});
            }
        })
    }
}

export function right() {
    return {type: RIGHT}
}

export function modalOpen() {
    return {type: MODAL_OPEN}
}

export function modalClose() {
    return {type: MODAL_CLOSE}
}
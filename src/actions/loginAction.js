/**
 * Created by dev on 16/7/22.
 */
import fetchPost from '../helper/api';
import UTIL from '../helper/util';
import  DIX  from '../helper/const';

export const MODAL_OPEN = 'MODAL_OPEN';
export const MODAL_CLOSE = 'MODAL_CLOSE';

export function adminLogin(username, password) {
    return (dispatch) => {
        fetchPost(DIX.API.ADMIN_LOGIN, {
            username: username,
            password: password
        }).then(res => {
            if (res.ok)
            {
                res.json().then(function(data) {
                    switch (data.code) {
                        case 0:
                            UTIL.go('./#/admin-index');
                            UTIL.set(DIX.KEY.KEY_USER, JSON.stringify(data.user));
                            UTIL.setToken(data.token);
                            return dispatch({type: '', status: data.code});
                        default:
                            return dispatch({type: '', status: data.code});
                    }
                });
            }
        })
    }
}

export function modalOpen() {
    return {type: MODAL_OPEN}
}

export function modalClose() {
    return {type: MODAL_CLOSE}
}
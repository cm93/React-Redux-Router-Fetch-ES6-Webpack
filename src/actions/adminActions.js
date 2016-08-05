/**
 * Created by dev on 16/7/1.
 */
import fetchPost from '../helper/api';
import UTIL from '../helper/util';
import  DIX  from '../helper/const';

export function adminLogin(username, password) {
    return (dispatch) => {
        fetchPost(DIX.API.ADMIN_LOGIN, {
            username: username,
            password: password
        }).then(function(data) {
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
}

export function getAdminList () {
  return (dispatch) => {
      fetchPost(DIX.API.ADMIN_LIST).then(function (data) {
              return dispatch({type: data.code, list: data.list});
          })
  }
}


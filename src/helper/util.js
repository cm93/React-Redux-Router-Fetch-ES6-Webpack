/**
 * Created by dev on 16/7/1.
 */
import  DIX from './const'

class UTIL {
    static set(key, value) {
        localStorage.setItem(key, value);
    };
    static get(key) {
        return localStorage.getItem(key);
    };
    static remove(key) {
        return localStorage.removeItem(key);
    };
    static getToken() {
        return this.get(DIX.KEY.KEY_TOKEN);
    };
    static setToken(token) {
        this.set(DIX.KEY.KEY_TOKEN, token);
    };
    static go(url) {
        window.location.href = url;
    };
    static isGuest() {
        return !(this.getToken());
    }
}

export default UTIL;

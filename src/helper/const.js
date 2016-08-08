/**
 * Created by dev on 16/7/1.
 */
const DIX = {
    HOST: 'https://api.zhixingche.com/admin/100/',
    API: {
        ADMIN_LOGIN: 'admin/login',
        ADMIN_LIST: 'admin/admin-list',
        USER_LOGIN: 'user/login'
    },
    KEY: {
        KEY_TOKEN : 'dix-token',
        KEY_USER : 'dix-user'
    },
    ERROR: {
        ERROR_INVALID : -1,
        ERROR_PARAM_NOT_SET : 1,
        ERROR_TOKEN_INVALID : 2,
        ERROR_WRONG_TYPE : 3,
        ERROR_WRONG_USERNAME : 4,
        ERROR_WRONG_PASSWORD : 5,
        ERROR_WRONG_PARAM : 6,
        ERROR_SAVE_ERROR : 7,
        ERROR_NOT_EXIST : 8,
        ERROR_EXIST : 9,
        ERROR_ACTION_NOT_ALLOWED : 10,
        ERROR_WRONG_VERIFICATION_CODE : 11,
        ERROR_ACTION_ERROR : 12,
        ERROR_ACTION_TOO_OFTEN : 13,
        ERROR_VEHICLE_IS_BEING_SHARED : 14,
        ERROR_WRONG_VEHICLE_SHARE_AUTH_CODE : 15,
        ERROR_PASSWORD_ILLEGAL : 16,
        ERROR_STOCK_NOT_ENOUGH : 17,
        ERROR_PRIORITY_CODE_INVALID : 18,
        ERROR_PURCHASE_COUNT_LIMIT : 19,
        ERROR_REGION_NOT_AVAILABLE : 21,
        ERROR_ITEM_BUY_LIMIT : 101
    },
    ROUTE: {
        USER: 10000,
        CONTENT: 20000,
        DATA: 30000,
        STORE: 40000,
        SHOP: 50000,
        VEHICLE: 60000,
        SETTING: 70000
    },

    TYPE: {
        USER: '用户',
        CONTENT: '内容',
        DATA: '数据',
        STORE: '商家',
        SHOP: '商城',
        VEHICLE: '设备',
        SETTING: '设置',
    }
};

export default DIX;

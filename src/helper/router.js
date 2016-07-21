/**
 * Created by dev on 16/7/2.
 */
import DIX from './const';

const ROUTE = [
  {
    'id': DIX.ROUTE.USER,
    'parent': 0,
    'title': DIX.TYPE.USER,
    'icon': 'fa fa-user',
    'children': [
      {
        'id': 10001,
        'parent': DIX.ROUTE.USER,
        'title': '基本',
        'link': '/user/user-list'
      },
      {
        'id': 10002,
        'parent': DIX.ROUTE.USER,
        'title': '内部',
        'icon': 'fa fa-bookmark',
        'link':  '/user/inside'
      }
    ]
  },
  {
    'id': DIX.ROUTE.CONTENT,
    'parent': 0,
    'title': DIX.TYPE.CONTENT,
    'icon': 'fa fa-edit',
    'children': [
      {
        'id': 20001,
        'parent': DIX.ROUTE.CONTENT,
        'title': '内容管理',
        'icon': 'fa fa-file-text',
        'link': '/config/index-big-img',
      }
    ]
  },
  {
    'id': DIX.ROUTE.DATA,
    'parent': 0,
    'title': DIX.TYPE.DATA,
    'icon': 'fa fa-database',
    'children': [
      {
        'id': 30001,
        'parent': DIX.ROUTE.DATA,
        'title': '新增用户数统计',
        'icon': 'fa fa-user-md',
        'link': '/data/user-increase-records',
      },
      {
        'id': 30002,
        'parent': DIX.ROUTE.DATA,
        'title': '点击量/访问量',
        'icon':'fa fa-external-link',
        'link': '',
      },
      {
        'id': 30003,
        'parent': DIX.ROUTE.DATA,
        'title': '活动数据',
        'icon':'fa fa-bars',
        'link': '/event/read-pre-order-user',
      },
      {
        'id': 30004,
        'parent': DIX.ROUTE.DATA,
        'title': 'X1预订数统计',
        'icon':'fa fa-bars',
        'link': '/data/pre-order-stat-x1',
      },
      {
        'id': 30005,
        'parent': DIX.ROUTE.DATA,
        'title': '优惠券',
        'icon':'fa fa-bars',
        'link': '/coupon/agent',
      }
    ]
  },
  {
    'id': DIX.ROUTE.STORE,
    'parent': 0,
    'title': DIX.TYPE.STORE,
    'icon':'fa fa-shopping-cart',
    'children': [
      {
        'id': 40001,
        'parent': DIX.ROUTE.STORE,
        'title': '基本',
        'icon':'fa fa-magic',
        'link': '/service/apply-list',
      },
      {
        'id': 40002,
        'parent': DIX.ROUTE.STORE,
        'title': '内部',
        'icon':'fa fa-bell-o',
        'link': '/service/apply-extra',
      },
      {
        'id': 40003,
        'parent': DIX.ROUTE.STORE,
        'title': '服务点管理',
        'icon':'fa fa-server',
        'link': '/store/list',
      },
      {
        'id': 40004,
        'parent': DIX.ROUTE.STORE,
        'title': '提现审核',
        'icon':'fa fa-server',
        'link': '/withdraw/list',
      }
    ]
  },
  {
    'id': DIX.ROUTE.SHOP,
    'parent': 0,
    'title': DIX.TYPE.SHOP,
    'link': '',
    'icon':'fa fa-apple',
    'children': [
      {
        'id': 50001,
        'parent': DIX.ROUTE.SHOP,
        'title': '商品类目',
        'icon':'fa fa-th-list',
        'link': '/item/category-list',
      },
      {
        'id': 50002,
        'parent': DIX.ROUTE.SHOP,
        'title': '商品管理',
        'icon':'fa fa-trello',
        'link': '/item/item-list',
      },
      {
        'id': 50003,
        'parent': DIX.ROUTE.SHOP,
        'title': '订单管理',
        'icon':'fa fa-reorder',
        'link': '/shop/order-list',
      },
      {
        'id': 50004,
        'parent': DIX.ROUTE.SHOP,
        'title': '运费设置',
        'icon':'fa fa-reorder',
        'link': '/item/item-freight-list',
      },
      {
        'id': 50005,
        'parent': DIX.ROUTE.SHOP,
        'title': '售后服务',
        'icon':'fa fa-reorder',
        'link': '/shop/after-sale',
      },
      {
        'id': 50006,
        'parent': DIX.ROUTE.SHOP,
        'title': '优先购买码',
        'icon':'fa fa-reorder',
        'link': '/shop/prior',
      }

    ]
  },
  {
    'id': DIX.ROUTE.VEHICLE,
    'parent': 0,
    'title': DIX.TYPE.VEHICLE,
    'icon':'fa fa-desktop',
    'children': [
      {
        'id': 60001,
        'parent': DIX.ROUTE.VEHICLE,
        'title': '设备管理',
        'icon':'fa fa-mobile',
        'link': '/vehicle/list',
      },
      {
        'id': 60002,
        'parent': DIX.ROUTE.VEHICLE,
        'title': '固件升级',
        'icon':'fa fa-mobile',
        'link': '/vehicle/firmware-list',
        'page': '6-2',
      }
    ]
  },
  {
    'id': DIX.ROUTE.SETTING,
    'parent': 0,
    'title': DIX.TYPE.SETTING,
    'icon': 'fa fa-windows',
    'children': [
      {
        'id': 70001,
        'parent': DIX.ROUTE.SETTING,
        'title': '管理员',
        'icon': 'fa fa-user-plus',
        'link': '/admin-list',
      },
      {
        'id': 70002,
        'parent': DIX.ROUTE.SETTING,
        'title': '部门管理',
        'icon': 'fa fa-street-view',
        'link': '/admin/department-list',
      },
      {
        'id': 70003,
        'parent': DIX.ROUTE.SETTING,
        'title': '权限管理',
        'icon': 'fa fa-user-times',
        'link': '/admin/auth-setting',
      },
      {
        'id': 70004,
        'parent': DIX.ROUTE.SETTING,
        'title': '操作日志',
        'icon': 'fa fa-envelope-o',
        'link': '/admin/action-list',
      }
    ]
  }
];

export default ROUTE;

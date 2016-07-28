import React,{ Component } from 'react';

class StoreNav extends Component{
	constructor(){
		super()
	}

	render(){
		return(
			<div>
				<nav id="store-menu-holder">
    				<div className="store-nav" id="store-menu">
				        <ul className="ym-nav-items">
				            <li className="item active">
				                <a href="./store/index.html">商城首页</a>
				            </li>
				            <li className="item ">
				                <a href="./store/category.html?id=6">云马C1</a>
				            </li><li className="item ">
				                <a href="./store/category.html?id=11">配件</a>
				            </li>
				        </ul>
			        <div id="cart-holder">
			            <span className="uk-icon uk-icon-cart"></span>
			            购物车
			            <div className="uk-badge uk-badge-notification uk-badge-danger" id="cart-num">2</div>
				            <div id="cart-detail" className="hide">
				                <ul className="cart-group">
				                    <li className="uk-list-group-triangle"></li>
				                    <li className="loading">
				                        <img src="./img/store/loading.gif" alt="" />
				                    </li>
				                </ul>
				            </div>
	       			 	</div>
    				</div>
				</nav>
			</div>
		)
	}

}

export default StoreNav



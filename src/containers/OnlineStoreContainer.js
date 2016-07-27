import React,{ Component } from 'react';
import StoreNav from '../components/common/StoreNav';
import Slider from '../components/common/Slider';
import Banner from '../components/Banner';

class OnlineStoreContainer extends Component{

	constructor(props){
		super(props);
	}

	render(){
		const img = "../img/store/x1.png";
		const url = 'https://zhixingche.com/product/x1#pre-order';
		const data = [
			{	
				id:1,
				img:'https://zhixingche-static.b0.upaiyun.com/zhixingche/img/07e2f88cde70337d4e366b07cd747b9e.jpg',
				url:'https://www.baidu.com'
			},
			{	
				id:2,
				img:'https://zhixingche-static.b0.upaiyun.com/zhixingche/img/0c1e19c8e18d120915b117326197ab4f.jpg',
				url:'https://www.baidu.com'
			},
			{	
				id:3,
				img:'https://zhixingche-static.b0.upaiyun.com/zhixingche/img/07e2f88cde70337d4e366b07cd747b9e.jpg',
				url:'https://www.baidu.com'
			},
		];
		let Style = {
			position: 'relative',
    		width: '1120px',
		    margin: '20px auto 0',
		    minHeight: '600px'
		};


		return(
			<div>
				<StoreNav />
				<div style={Style}>
					<Slider data={data}/>
					<Banner img={img} url={url} />
					<div className="uk-grid service-holder">
		            <div className="uk-width-1-3">
		                <a href="./store/preemption.html">
		                    <div className="img">
		                        <img src="../img/store/preemption.png" alt="" />
		                    </div>
		                    <p className="dec">优先购买通道</p>
		                </a>
		            </div>
		            <div className="uk-width-1-3">
		                <a href="./store/wholesale.html">
		                    <div className="img">
		                        <img className="purchase" src="../img/store/purchase.png" alt="" />
		                    </div>
		                    <p className="dec">大宗采购合作</p>
		                </a>
		            </div>
		            <div className="uk-width-1-3">
		                <a href="http://www.sobot.com/chat/pc/index.html?sysNum=50d910d56c624e08adaff10191b06794" target="_blank">
		                    <div className="img">
		                        <img className="purchase" src="../img/store/after-sale.png" alt="" />
		                    </div>
		                    <p className="dec">售后服务</p>
		                </a>
		            </div>
            	</div>
				</div>
				
			</div>
	  )
	}




}

export default OnlineStoreContainer
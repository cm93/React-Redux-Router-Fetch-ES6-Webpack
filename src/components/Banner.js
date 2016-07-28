import React,{ Component } from 'react'

class Banner extends Component{

	constructor(props){
		super(props);
	}

	render(){


		const { img,url } = this.props;

		return(
			<div className='banner'>
				<a href={url}>
					<img src={img} />
				</a>
			</div>
			)
	}





}

export default Banner
import React,{ Component,propTypes} from 'react';
import Slick from 'react-slick';

class Slider extends Component{

	constructor(props){
		super(props);
	}

	render(){
		
    	let settings = {
		    dots: true,
		    infinite: true,
		    speed: 500,
			autoplaySpeed: 10000,
		    autoplay:true,
		    slidesToShow: 1,
		    slidesToScroll: 1,
	    };

	    let style = {
	    	borderRadius:'8px',
	    	border:'1px solid #e5eaf0'
	    };

	    const { data } = this.props;
	    
    	return (
		    <Slick {...settings}>
		        {data.map(
		        	tmp =>(
		        		<div className='banner' key={tmp.id}>
		  	      		    <a href={tmp.url} >
		  	      		    	<img src={tmp.img} />
		  	      		    </a>
		        		</div>
		        		)
		        	)
		        }
		    </Slick>
    	);
  	}
}
Slider.propTypes = {
};

export default Slider

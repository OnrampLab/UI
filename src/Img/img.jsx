'use strict';

let ui = ui || {};
ui.Img = React.createClass({
	mouseOverHandler: function(){
		$('#button-x-'+this.props.data.title).show();
	},
	mouseOutHandler: function(){
		$('#button-x-'+this.props.data.title).hide();
	},
	delete: function(){
		$('#section-img-'+this.props.data.title).remove();
	},
	render(){
		let imgStyle = {};
		let xStyle = {};
        xStyle['background']  = 'black';
        xStyle['color']  = 'white';
        xStyle['text-align']  = 'center';
        xStyle['width']  = '20px';
        xStyle['height']  = '20px';
        xStyle['border-radius']  = '10px';
        xStyle['position']  = 'absolute';
        xStyle['top']  = '0px';
        xStyle['opacity']  = '0.3';
        xStyle['display']  = 'none';
		let sectionId = 'section-img-'+this.props.data.title;
		let imgId = 'img-'+this.props.data.title;
		let xId = 'button-x-'+this.props.data.title;
		return (
			<section id={sectionId}>
				<img id={imgId} src={this.props.data.src} title={this.props.data.description} style={imgStyle} onMouseOver={this.mouseOverHandler} onMouseOut={this.mouseOutHandler}/>
				<div id={xId} style={xStyle} onClick={this.delete} onMouseOver={this.mouseOverHandler}>x</div>
			</section>
		);
	}
});

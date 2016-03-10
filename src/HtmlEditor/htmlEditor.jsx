'use strict';

/**
 *  HtmlEditor
 *
 *      params:
 *
 *      code:
 *          <HtmlEditor />
 *
 */
let ui = ui || {};
ui.HtmlEditor = React.createClass({
	view: function(){
		$('iframe')[0].contentDocument.documentElement.innerHTML=$('textarea').val();
	},
    // --------------------------------------------------------------------------------
    // render
    // --------------------------------------------------------------------------------
    render() {
		let textareaStyle = {};
        textareaStyle['width']  = '45%';
        textareaStyle['height']  = '300px';
        textareaStyle['margin']  = '2%';
        textareaStyle['font-family']  = 'courier';
		let viewStyle = {};
        viewStyle['width']  = '45%';
        viewStyle['height']  = '300px';
        viewStyle['margin']  = '2%';
		viewStyle['border']  = 'none';
        return (
			<div>
				<div>
					<input type="button" onClick={this.view} value="View"/>
				</div>
				<textarea style={textareaStyle}>{this.props.content}</textarea>
				<iframe style={viewStyle}></iframe>
			</div>
		);
    },

});

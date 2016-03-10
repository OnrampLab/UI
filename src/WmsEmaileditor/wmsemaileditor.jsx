'use strict';

/**
 *  WmsEmaileditor
 *
 *      params:
 *
 *      code:
 *          <WmsEmaileditor />
 *
 */

let ui = ui || {};
ui.WmsEmaileditor = React.createClass({
 
    getDefaultProps: function() {
        return {
            placeholder: 'Enter your message here...',
            body: ""
        };
    },
    
    componentDidMount: function () {
        $('#editor').trumbowyg({
            fullscreenable: false
        });
        
        $('#editor').trumbowyg('html', this.props.body);
    },

    // --------------------------------------------------------------------------------
    // helper
    // --------------------------------------------------------------------------------
    

    getElementHtml() {
        return this.refs.emailEditor.innerHTML;
    },

    // --------------------------------------------------------------------------------
    // event
    // --------------------------------------------------------------------------------
    
    

    // --------------------------------------------------------------------------------
    // render
    // Read only: readOnly=true
    // --------------------------------------------------------------------------------
    render() {
        return (
            <span>
                <div id="editor" placeholder={this.props.placeholder} ref="emailEditor" ></div>
            </span>
        );
    },
});



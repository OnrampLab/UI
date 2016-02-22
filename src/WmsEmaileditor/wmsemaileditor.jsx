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
    

    // --------------------------------------------------------------------------------
    // event
    // --------------------------------------------------------------------------------
    handleChange: function(event) {
        
    },
    
    handleLink: function(i) {
        if (this.props.listenLink) {
            this.props.listenLink(i);
        }
    },
    
    handleRow: function(row) {
        if (this.props.handleRow) {
            row = this.props.handleRow(row);
        }
        return row;
    },

    // --------------------------------------------------------------------------------
    // render
    // Read only: readOnly=true
    // --------------------------------------------------------------------------------
    render() {
        return (
            <span>
                <div id="editor" placeholder={this.props.placeholder}></div>
            </span>
        );
    },
});



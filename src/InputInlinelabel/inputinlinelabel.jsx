'use strict';

/**
 *  InputInlinelabel
 *
 *      params:
 *
 *      code:
 *          <InputLabel name="InputInlinelabel" />
 *
 */

let ui = ui || {};
ui.InputInlinelabel = React.createClass({
 
    getInitialState() {
        return {};
    },

    // --------------------------------------------------------------------------------
    // helper
    // --------------------------------------------------------------------------------
    getElementWidth() {
        let dom = this.refs.labelinput;
        return dom.offsetWidth;
    },

    setElementValue(value) {
        let dom = this.refs.labelinput;
        dom.value = value;
    },

    getElementValue() {
        let dom = this.refs.labelinput;
        return dom.value;
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
            <div className="input-group">
                <span className="input-group-addon" id="basic-addon1">{this.props.require}{this.props.label}</span>
                <input type="text" className="form-control" aria-describedby="basic-addon1" name={this.props.name} ref="labelinput" maxLength={this.props.maxlength} placeholder={this.props.name} readOnly={this.props.readonly} />
            </div>
        );
    },

});

'use strict';

/**
 *  InputLabel
 *
 *      params:
 *
 *      code:
 *          <InputLabel name="InputLabel" />
 *
 */

let ui = ui || {};
ui.InputLabel = React.createClass({
 
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
            <span>
                <label for="">{this.props.require}{this.props.label}</label>
                <input type="text" className="form-control" name={this.props.name} ref="labelinput" maxLength={this.props.maxlength} placeholder={this.props.name} required />
            </span>
        );
    },

});

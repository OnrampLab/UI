'use strict';

/**
 *  InputDate
 *
 *      params:
 *
 *      code:
 *          <InputLbel name="customerName" />
 *
 */
let ui = ui || {};
ui.Textarea = React.createClass({

    getInitialState() {
        return {
            'name': this.props.name,
        };
    },

    // --------------------------------------------------------------------------------
    // helper
    // --------------------------------------------------------------------------------
    getElementWidth() {
        let dom = this.refs.textarea1;
        return dom.offsetWidth;
    },

    setElementValue(value) {
        let dom = this.refs.textarea1;
        dom.value = value;
    },

    getElementValue() {
        let dom = this.refs.textarea1;
        return dom.value;
    },

    // --------------------------------------------------------------------------------
    // event
    // --------------------------------------------------------------------------------
    

    // --------------------------------------------------------------------------------
    // render
    // --------------------------------------------------------------------------------
    render() {
        return (
            <span>
                <label for="">{this.props.label}</label>
                <textarea className="form-control" name={this.props.name} rows={this.props.rows} ref="textarea1" maxLength="1000" placeholder={this.props.name} />
            </span>
        );
    },

});

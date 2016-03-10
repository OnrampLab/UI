'use strict';

let ui = ui || {};
ui.Selection = React.createClass({
    propTypes: {
        // props
        myoptions:    React.PropTypes.string,
    },
    
    getInitialState() {
        return this.props;
    },

    // --------------------------------------------------------------------------------
    // helper
    // --------------------------------------------------------------------------------
    
    // --------------------------------------------------------------------------------
    // event
    // --------------------------------------------------------------------------------
    /**
     *  
     */
    handleChange: function() {
        this.setState({'selectedValue': this.refs.menu.value});
    },

    // --------------------------------------------------------------------------------
    // render
    // --------------------------------------------------------------------------------
    render() {
        return (
            <select ref="menu" onChange={this.handleChange.bind(this)}>
                {this.props.myoptions.map((o, i) => (
                    <option key={i} value={o.selectValue}>{o.selectLabel}</option>
                ))}
            </select>
        );
    },

});

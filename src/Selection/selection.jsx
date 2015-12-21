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
    // render
    // --------------------------------------------------------------------------------
    render() {
        return (
            <select ref="menu" >
                {this.props.myoptions.map((o, i) => (
                    <option key={i} value={o.selectValue}>{o.selectLabel}</option>
                ))}
            </select>
        );
    },

});

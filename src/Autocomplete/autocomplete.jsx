'use strict';

/**
 *  Autocomplete
 *
 *      params:
 *
 *      code:
 *          <Autocomplete name="customerName" />
 *
 */

let ui = ui || {};
ui.Autocomplete = React.createClass({
 
    getInitialState() {
        return {
            'name': this.props.name,
            'dropClass': '',
            'list': ['default1','default2'],
        };
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
    handleChange: function(event) {
        
        // 供外部使用的 listenClick 是否有建立
        if (this.props.listenChange) {
            this.props.listenChange(event, this);
        }
        
    },
    
    handleClick: function(event) {
        if (this.props.listenClick) {
            this.props.listenClick(event, this);
        }
    },

    // --------------------------------------------------------------------------------
    // render
    // Read only: readOnly=true
    // --------------------------------------------------------------------------------
    render() {
        let list = this.state.list;
        let dropClass = "dropdown " + this.state.dropClass;
        let boundChange = this.handleChange.bind(this);
        let boundClick = this.handleClick.bind(this);
        return (
            <span>
                <label for="">{this.props.require}{this.props.label}</label>
                <input type="text" className="form-control" name={this.props.name} ref="labelinput" maxLength={this.props.maxlength} placeholder={this.props.name} required onChange={boundChange} />
                <div className={dropClass}>
                    <button className="btn btn-default dropdown-toggle hide" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                        Dropdown
                        <span class="caret"></span>
                    </button>
                    <ul className="dropdown-menu">
                        {list.map(function(listValue){
                            return <li onClick={boundClick} ><a href="#">{listValue}</a></li>;
                        })}
                    </ul>
                </div>
            </span>
        );
    },

});

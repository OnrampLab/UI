'use strict';

/**
 *  InputDate
 *
 *      params:
 *          
 *
 *      code:
 *          <InputDate name="birthDate" />
 *
 */
let InputDate = React.createClass({

    getInitialState() {
        return {
            'name': this.props.name,
            'combobox': {
                'actionName': this.props.name,
                'width': '',
                'options': [],
            },
        };
    },

    // --------------------------------------------------------------------------------
    // helper
    // --------------------------------------------------------------------------------

    // --------------------------------------------------------------------------------
    // event
    // --------------------------------------------------------------------------------
    handleKey: function(event) {

        // update combobox width
        let $inputBox = $('input[name="'+ this.props.name +'"]');
        this.state.combobox.width = $inputBox.css('width');

        // 輸入 ↓ 的時候, 要跳到 ComboBox, 並且預選第一個項目
        if ( event.keyCode == 40 && this.state.combobox.options.length > 0 ) {
            React.findDOMNode(this.refs.box).focus();
            React.findDOMNode(this.refs.box).selectedIndex = 0;
        }
        // 輸入 8 個數字時
        else if( event.target.value.length == 8 && -1 === event.target.value.indexOf('-') ) {

            let result = '';
            let guess = parseInt(event.target.value.substr(0,2));
            if ( guess >= 19 ) {
                // guess yyyymmdd
                result = event.target.value.substr(0,4)
                       + '-'
                       + event.target.value.substr(4,2)
                       + '-'
                       + event.target.value.substr(6,2)
            }
            else {
                // guess mmddyyyy
                result = event.target.value.substr(4,4)
                       + '-'
                       + event.target.value.substr(0,2)
                       + '-'
                       + event.target.value.substr(2,2)
            }

            this.state.combobox.options = [
                [result,result]
            ];

            // update state
            this.setState({'combobox': this.state.combobox});
        }
        // 輸入英文字 的時候
        else if( event.target.value.match(/[a-z]/ig) ) {
            let date    = new Date();
            let yyyy    = date.getFullYear().toString();
            let mm      = (date.getMonth()+1).toString();
            let dd      = date.getDate().toString();
            let format  = yyyy + '-' + (mm[1]?mm:"0"+mm[0]) + '-' + (dd[1]?dd:"0"+dd[0]);
            let options = [
                [format, format + ' (today)'],
            ];

            // update combobox options
            let combobox = this.state.combobox;
            combobox.options = options;

            // update state
            this.setState({'combobox': combobox});
        }
        else {
            this.state.combobox.options = [];
            this.setState({'combobox': this.state.combobox});
        }

    },

    // --------------------------------------------------------------------------------
    // render
    // --------------------------------------------------------------------------------
    render() {
        return (
            <span>
                <input type="text" name={this.props.name} ref={this.props.name} onKeyUp={this.handleKey} maxLength="10" placeholder="yyyy-mm-dd" />
                <ComboBox data={this.state.combobox} ref="box" />
            </span>
        );
    },

});





let ComboBox = React.createClass({

    getInitialState() {
        return this.getDefault( this.props.data );
    },

    /**
     *  當一個掛載的組件接收到新的 props 的時候被調用
     */
    componentWillReceiveProps(nextProps) {
        this.state = this.getDefault( nextProps.data );
    },

    // --------------------------------------------------------------------------------
    // helper
    // --------------------------------------------------------------------------------
    /**
     *  取得預設值
     *  如果參數中有相同的 key, 則覆蓋該值
     */
    getDefault(params) {
        let def = {
            'actionName': '',
            'width': '',
            'maxOption': 5,
            'options': [],
        };
        for (let key in def) {
            if( typeof(params[key])!=="undefined" ) {
                def[key] = params[key];
            }
        }
        return def;
    },

    /**
     *  每次 "新" 產生的元件, unique id 將會不同
     */
    uniqueId: utils.getUniqueId(),

    getUniqueId(prefix) {
        return prefix + this.uniqueId;
    },

    // --------------------------------------------------------------------------------
    // event
    // --------------------------------------------------------------------------------
    handKey: function(event) {
        // console.log(event.type, event.keyCode, event.which, event.timeStamp, event.target.value);
        let ENTER_KEY = 13;

        if ( event.keyCode == ENTER_KEY ) {
            let $inputBox = $('input[name="'+ this.state.actionName +'"]');
            // TODO: 這應該是錯誤的寫法!! 請更正!!
            $inputBox.val( event.target.value );
            this.setState({options:[]});
        }
    },

    handClick: function(event) {
        let $inputBox = $('input[name="'+ this.state.actionName +'"]');
        // TODO: 這應該是錯誤的寫法!! 請更正!!
        $inputBox.val( event.target.value );
        this.setState({options:[]});
    },

    // --------------------------------------------------------------------------------
    // render
    // --------------------------------------------------------------------------------
    render() {
        let id          = this.getUniqueId('combobox-id-');
        let options     = this.state.options;
        let selectSize  = (options.length > this.state.maxOption ? this.state.maxOption : options.length);

        let selectStyle = {};
        selectStyle['overflow'] = 'hidden';
        selectStyle['display']  = 'none';
        if ( options.length > 0 ) {
            selectStyle['display'] = 'block';
        }

        if ( this.state.width ) {
            selectStyle['width'] = this.state.width;
        }

        return (
            <select style={selectStyle} size={selectSize} onKeyUp={this.handKey} onClick={this.handClick}>
                {options.map(this.renderOption)}
            </select>
        );
    },

    renderOption(arr, index) {
        let value = arr[0];
        let show  = arr[1];
        return (
            <option key={index} value={value}>{show}</option>
        );
    },

});


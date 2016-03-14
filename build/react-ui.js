'use strict';

(function (myNameSpace) {
    'use strict';

    window[myNameSpace] = {

        /**
         *  get unique id
         */
        getUniqueId: function getUniqueId(prefix) {
            var s4 = function s4() {
                return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
            };
            if (!prefix) {
                return s4() + s4() + s4() + s4();
            }
            return prefix + s4() + s4() + s4() + s4();
        },

        /**
         *  格式化 Date() 物件成為 yyyy-mm-dd 格式
         *
         *  @param Date()
         *  @return string
         */
        getDate: function getDate(date) {
            var yyyy = date.getFullYear().toString();
            var mm = (date.getMonth() + 1).toString();
            var dd = date.getDate().toString();
            return yyyy + '-' + (mm[1] ? mm : "0" + mm[0]) + '-' + (dd[1] ? dd : "0" + dd[0]);
        },

        /**
         *  each
         *      - 可以代入 object & array
         *      - 在 callback 中使用 "return false" 將離開整個迴圈
         *
         */
        each: function each(obj, callback) {
            var isArray = false;
            if (Object.prototype.toString.call(obj) === '[object Array]') {
                isArray = true;
            } else if (Object.prototype.toString.call(obj) !== '[object Object]') {
                return;
            }

            var value = undefined,
                i = 0,
                length = obj.length;

            if (isArray) {
                for (; i < length; i++) {
                    value = callback.call(obj[i], i, obj[i]);
                    if (value === false) {
                        break;
                    }
                }
            } else {
                for (i in obj) {
                    value = callback.call(obj[i], i, obj[i]);
                    if (value === false) {
                        break;
                    }
                }
            }
            return obj;
        }

    };
})('utils');
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

var ui = ui || {};
ui.Autocomplete = React.createClass({
    displayName: 'Autocomplete',

    getInitialState: function getInitialState() {
        return {
            'name': this.props.name,
            'dropClass': '',
            'list': ['default1', 'default2']
        };
    },

    // --------------------------------------------------------------------------------
    // helper
    // --------------------------------------------------------------------------------
    getElementWidth: function getElementWidth() {
        var dom = this.refs.labelinput;
        return dom.offsetWidth;
    },

    setElementValue: function setElementValue(value) {
        var dom = this.refs.labelinput;
        dom.value = value;
    },

    getElementValue: function getElementValue() {
        var dom = this.refs.labelinput;
        return dom.value;
    },

    // --------------------------------------------------------------------------------
    // event
    // --------------------------------------------------------------------------------
    handleChange: function handleChange(event) {

        // �ѥ~���ϥΪ� listenClick �O�_���إ�
        if (this.props.listenChange) {
            this.props.listenChange(event, this);
        }
    },

    handleClick: function handleClick(event) {
        if (this.props.listenClick) {
            this.props.listenClick(event, this);
        }
    },

    // --------------------------------------------------------------------------------
    // render
    // Read only: readOnly=true
    // --------------------------------------------------------------------------------
    render: function render() {
        var list = this.state.list;
        var dropClass = "dropdown " + this.state.dropClass;
        var boundChange = this.handleChange.bind(this);
        var boundClick = this.handleClick.bind(this);
        return React.createElement(
            'span',
            null,
            React.createElement(
                'label',
                { 'for': '' },
                this.props.require,
                this.props.label
            ),
            React.createElement('input', { type: 'text', className: 'form-control', name: this.props.name, ref: 'labelinput', maxLength: this.props.maxlength, placeholder: this.props.name, required: true, onChange: boundChange }),
            React.createElement(
                'div',
                { className: dropClass },
                React.createElement(
                    'button',
                    { className: 'btn btn-default dropdown-toggle hide', type: 'button', id: 'dropdownMenu1', 'data-toggle': 'dropdown', 'aria-haspopup': 'true', 'aria-expanded': 'true' },
                    'Dropdown',
                    React.createElement('span', { 'class': 'caret' })
                ),
                React.createElement(
                    'ul',
                    { className: 'dropdown-menu' },
                    list.map(function (listValue) {
                        return React.createElement(
                            'li',
                            { onClick: boundClick },
                            React.createElement(
                                'a',
                                { href: '#' },
                                listValue
                            )
                        );
                    })
                )
            )
        );
    }

});
'use strict';

/**
 *  AutocompleteMuti
 *
 *      params:
 *
 *      code:
 *          <AutocompleteMuti name="customerName" />
 *
 */

var ui = ui || {};
ui.AutocompleteMuti = React.createClass({
    displayName: 'AutocompleteMuti',

    getInitialState: function getInitialState() {
        return {
            'name': this.props.name,
            'dropClass': '',
            'list': ['default1', 'default2']
        };
    },

    // --------------------------------------------------------------------------------
    // helper
    // --------------------------------------------------------------------------------
    getElementWidth: function getElementWidth() {
        var dom = this.refs.labelinput;
        return dom.offsetWidth;
    },

    setElementValue: function setElementValue(value) {
        var dom = this.refs.labelinput;
        dom.value = value;
    },

    getElementValue: function getElementValue() {
        var dom = this.refs.labelinput;
        return dom.value;
    },

    // --------------------------------------------------------------------------------
    // event
    // --------------------------------------------------------------------------------
    handleChange: function handleChange(event) {

        // �ѥ~���ϥΪ� listenClick �O�_���إ�
        if (this.props.listenChange) {
            this.props.listenChange(event, this);
        }
    },

    handleClick: function handleClick(event) {
        if (this.props.listenClick) {
            this.props.listenClick(event, this);
        }
    },

    // --------------------------------------------------------------------------------
    // render
    // Read only: readOnly=true
    // --------------------------------------------------------------------------------
    render: function render() {
        var list = this.state.list;
        var dropClass = "dropdown " + this.state.dropClass;
        var boundChange = this.handleChange.bind(this);
        var boundClick = this.handleClick.bind(this);
        return React.createElement(
            'span',
            null,
            React.createElement(
                'label',
                { 'for': '' },
                this.props.require,
                this.props.label
            ),
            React.createElement('input', { type: 'text', className: 'form-control', name: this.props.name, ref: 'labelinput', maxLength: this.props.maxlength, placeholder: this.props.name, required: true, onChange: boundChange }),
            React.createElement(
                'div',
                { className: dropClass },
                React.createElement(
                    'button',
                    { className: 'btn btn-default dropdown-toggle hide', type: 'button', id: 'dropdownMenu1', 'data-toggle': 'dropdown', 'aria-haspopup': 'true', 'aria-expanded': 'true' },
                    'Dropdown',
                    React.createElement('span', { 'class': 'caret' })
                ),
                React.createElement(
                    'ul',
                    { className: 'dropdown-menu' },
                    list.map(function (listValue, i) {
                        return React.createElement(
                            'li',
                            { onClick: boundClick, 'data-index': i },
                            React.createElement(
                                'a',
                                { href: '#' },
                                listValue
                            )
                        );
                    })
                )
            )
        );
    }

});
'use strict';

var ui = ui || {};
ui.Breadcrumb = React.createClass({
    displayName: 'Breadcrumb',

    /**
     *
     */
    getDefaultProps: function getDefaultProps() {
        return {
            rows: []
        };
    },

    /**
     *  已掛載的組件接收到新的 props 被調用
     */
    componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
        if (nextProps) {
            this.props = nextProps;
        }
    },

    /**
     *  每次更新都調用
     */
    componentDidUpdate: function componentDidUpdate() {},

    // --------------------------------------------------------------------------------
    // event
    // --------------------------------------------------------------------------------
    /**
     *  管理點擊的 row 資訊
     */
    handleCheck: function handleCheck(row) {
        // 供外部使用的 listenClick 是否有建立
        if (this.props.listenClick) {
            this.props.listenClick(row);
        }
    },

    // --------------------------------------------------------------------------------
    // render
    // --------------------------------------------------------------------------------
    render: function render() {
        return React.createElement(
            'div',
            null,
            this.props.rows.map(this.renderItem.bind(this))
        );
    },

    renderItem: function renderItem(row, i) {
        var iconStyle = {
            'margin-left': '10px',
            'margin-right': '10px'
        };

        var icon = '';
        if (row.icon) {
            var className = "fa-lg fa fa-" + row.icon;
            icon = React.createElement('i', { className: className, style: iconStyle });
        }

        var nextIcon = '';
        if (i !== 0) {
            nextIcon = React.createElement('span', { className: 'glyphicon glyphicon-chevron-right', style: iconStyle });
        }

        var show = React.createElement(
            'button',
            { type: 'button', className: 'btn btn-default', onClick: this.handleCheck.bind(this, row) },
            icon,
            row.name
        );
        if (row.href) {
            show = React.createElement(
                'a',
                { href: row.href },
                show
            );
        }

        return React.createElement(
            'span',
            null,
            nextIcon,
            show
        );
    }

});
'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var ui = ui || {};
ui.ButtonGroup = React.createClass({
    displayName: 'ButtonGroup',

    /**
     *
     */
    getDefaultProps: function getDefaultProps() {
        return {
            // lg, sm, xs
            size: '',

            //
            rows: [],

            // focus options
            options: {
                showName: null,
                type: null
            }
        };
    },

    /**
     *  已掛載的組件接收到新的 props 被調用
     */
    componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
        if (nextProps) {
            this.props = nextProps;
        }
    },

    /**
     *  每次更新都調用
     */
    componentDidUpdate: function componentDidUpdate() {},

    // --------------------------------------------------------------------------------
    // event
    // --------------------------------------------------------------------------------
    /**
     *  管理點擊的 row 資訊
     */
    handleCheck: function handleCheck(row) {
        // 供外部使用的 listenClick 是否有建立
        if (this.props.listenClick) {
            this.props.listenClick(row);
        }
    },

    // --------------------------------------------------------------------------------
    // check
    // --------------------------------------------------------------------------------
    isFocusShowName: function isFocusShowName() {
        if (this.props.options.showName === false) {
            return false;
        }
        return true;
    },

    // --------------------------------------------------------------------------------
    // get
    // --------------------------------------------------------------------------------
    getSizeClass: function getSizeClass() {
        switch (this.props.size) {
            case 'lg':
                return 'btn-group-lg';
            case 'sm':
                return 'btn-group-sm';
            case 'xs':
                return 'btn-group-xs';
        }
        return '';
    },

    getTypeClass: function getTypeClass(type) {
        switch (type) {
            case 'primary':
                return 'btn-primary';
            case 'success':
                return 'btn-success';
            case 'info':
                return 'btn-info';
            case 'warning':
                return 'btn-warning';
            case 'danger':
                return 'btn-danger';
            case 'link':
                return 'btn-link';
        }
        return '';
    },

    getFocusTypeClass: function getFocusTypeClass() {
        var type = this.props.options.type;
        if (type === null) {
            type = '';
        }
        return this.getTypeClass(type);
    },

    // --------------------------------------------------------------------------------
    // render
    // --------------------------------------------------------------------------------
    render: function render() {
        var className = 'btn-group ' + this.getSizeClass();
        return React.createElement(
            'div',
            { className: className, role: 'group' },
            this.props.rows.map(this.renderButton.bind(this))
        );
    },

    renderButton: function renderButton(row, i) {
        var options = {};
        var linkIcon = null;
        var loadIcon = null;
        var className = 'btn btn-default';
        var buttonStyle = null;
        var type = this.getTypeClass(row.type);
        if (type) {
            className += ' ' + type;
        }

        // is link
        if (row.href) {
            var style = {
                'margin-left': '5px'
            };
            options.href = row.href;

            // 內連結
            if (!row.target) {
                linkIcon = React.createElement('i', { className: 'fa fa-link', style: style });
            }
            // 跳出連結
            else {
                    options.target = row.target;
                    linkIcon = React.createElement('i', { className: 'fa fa-external-link-square', style: style });
                }
        }

        if (row.disabled) {
            options.disabled = "disabled";
        }

        if (row.display === false) {
            buttonStyle = {
                'display': 'none'
            };
        } else if (row.visibility === false) {
            buttonStyle = {
                'visibility': 'hidden'
            };
        }

        if (row.status === 'load') {
            var style = {
                'margin-left': '5px'
            };
            loadIcon = React.createElement('i', { className: 'fa fa-circle-o-notch fa-spin', style: style });
        }

        if (row.status === 'active') {
            className += ' active';
        }

        // 在 focus 的情況下, 可以覆蓋 "type" 來指定不同的顏色
        var focusType = this.getFocusTypeClass();
        if (focusType) {
            row.type = focusType;
            var _type = this.getTypeClass(row.type);
            if (_type) {
                className += ' ' + _type;
            }
        }

        //
        //  status
        //      false    => not focus
        //      'load'   => loading
        //      'active' => active
        //
        if (row.status === 'load' && !this.isFocusShowName()) {
            return React.createElement(
                'a',
                _extends({ key: i, type: 'button', className: className, style: buttonStyle, onClick: this.handleCheck.bind(this, row) }, options),
                linkIcon,
                loadIcon
            );
        }
        return React.createElement(
            'a',
            _extends({ key: i, type: 'button', className: className, style: buttonStyle, onClick: this.handleCheck.bind(this, row) }, options),
            row.name,
            linkIcon,
            loadIcon
        );
    }

});
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
var ui = ui || {};
ui.HtmlEditor = React.createClass({
  displayName: 'HtmlEditor',

  view: function view() {
    $('iframe')[0].contentDocument.documentElement.innerHTML = $('textarea').val();
  },
  // --------------------------------------------------------------------------------
  // render
  // --------------------------------------------------------------------------------
  render: function render() {
    var textareaStyle = {};
    textareaStyle['width'] = '45%';
    textareaStyle['height'] = '300px';
    textareaStyle['margin'] = '2%';
    textareaStyle['font-family'] = 'courier';
    var viewStyle = {};
    viewStyle['width'] = '45%';
    viewStyle['height'] = '300px';
    viewStyle['margin'] = '2%';
    viewStyle['border'] = 'none';
    return React.createElement(
      'div',
      null,
      React.createElement(
        'div',
        null,
        React.createElement('input', { type: 'button', onClick: this.view, value: 'View' })
      ),
      React.createElement(
        'textarea',
        { style: textareaStyle },
        this.props.content
      ),
      React.createElement('iframe', { style: viewStyle })
    );
  }

});
'use strict';

var ui = ui || {};
ui.Img = React.createClass({
	displayName: 'Img',

	mouseOverHandler: function mouseOverHandler() {
		$('#button-x-' + this.props.data.title).show();
	},
	mouseOutHandler: function mouseOutHandler() {
		$('#button-x-' + this.props.data.title).hide();
	},
	'delete': function _delete() {
		$('#section-img-' + this.props.data.title).remove();
	},
	render: function render() {
		var imgStyle = {};
		var xStyle = {};
		xStyle['background'] = 'black';
		xStyle['color'] = 'white';
		xStyle['text-align'] = 'center';
		xStyle['width'] = '20px';
		xStyle['height'] = '20px';
		xStyle['border-radius'] = '10px';
		xStyle['position'] = 'absolute';
		xStyle['top'] = '0px';
		xStyle['opacity'] = '0.3';
		xStyle['display'] = 'none';
		var sectionId = 'section-img-' + this.props.data.title;
		var imgId = 'img-' + this.props.data.title;
		var xId = 'button-x-' + this.props.data.title;
		return React.createElement(
			'section',
			{ id: sectionId },
			React.createElement('img', { id: imgId, src: this.props.data.src, title: this.props.data.description, style: imgStyle, onMouseOver: this.mouseOverHandler, onMouseOut: this.mouseOutHandler }),
			React.createElement(
				'div',
				{ id: xId, style: xStyle, onClick: this['delete'], onMouseOver: this.mouseOverHandler },
				'x'
			)
		);
	}
});
'use strict';

var ui = ui || {};
ui.Info = React.createClass({
    displayName: "Info",

    /**
     *
     */
    getDefaultProps: function getDefaultProps() {
        return {
            rows: []
        };
    },

    /**
     *  已掛載的組件接收到新的 props 被調用
     */
    componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
        if (nextProps) {
            this.props = nextProps;
        }
    },

    /**
     *  每次更新都調用
     */
    componentDidUpdate: function componentDidUpdate() {},

    // --------------------------------------------------------------------------------
    // render
    // --------------------------------------------------------------------------------
    render: function render() {
        return React.createElement(
            "ul",
            { className: "nav nav-pills" },
            this.props.rows.map(this.renderBlock.bind(this))
        );
    },

    renderBlock: function renderBlock(row, i) {
        var showValue = null;
        if (row.value) {
            showValue = React.createElement(
                "span",
                { className: "badge" },
                row.value
            );
        }

        var icon = null;
        if (row.icon) {
            var iconStyle = { 'margin-right': '5px' };
            var iconClass = "fa fa-" + row.icon;
            icon = React.createElement("i", { className: iconClass, style: iconStyle });
        }

        // className="active"
        return React.createElement(
            "li",
            { role: "presentation" },
            React.createElement(
                "a",
                { href: "javascript:void(0);" },
                icon,
                row.name,
                showValue
            )
        );
    }

});
'use strict';

/**
 *  InputDate
 *
 *      params:
 *
 *      code:
 *          <InputDate name="birthDate" />
 *
 */
var ui = ui || {};
ui.InputDate = React.createClass({
    displayName: 'InputDate',

    // TODO: 請分離 state & props
    getInitialState: function getInitialState() {
        return {
            'name': this.props.name,
            'combobox': {
                'width': '',
                'options': []
            }
        };
    },

    // --------------------------------------------------------------------------------
    // helper
    // --------------------------------------------------------------------------------
    getElementWidth: function getElementWidth() {
        var dom = this.refs.container;
        return dom.offsetWidth;
    },

    setElementValue: function setElementValue(value) {
        var dom = this.refs.container;
        dom.value = value;
    },

    getElementValue: function getElementValue() {
        var dom = this.refs.container;
        return dom.value;
    },

    /**
     *  驗証日期格式 yyyy-mm-dd
     */
    isValidDate: function isValidDate(date) {
        var matches = /^(\d{4})[-\/](\d{2})[-\/](\d{2})$/.exec(date);
        if (matches == null) {
            return false;
        }
        var d = matches[3];
        var m = matches[2] - 1;
        var y = matches[1];
        var composedDate = new Date(y, m, d);
        return composedDate.getDate() == d && composedDate.getMonth() == m && composedDate.getFullYear() == y;
    },

    /**
     *  為日期 加 one day
     */
    getDatePlus: function getDatePlus(originDate, numDay) {
        var numDay = numDay || 1;

        var matches = /^(\d{4})[-\/](\d{2})[-\/](\d{2})$/.exec(originDate);
        if (matches == null) {
            return false;
        }

        var date = new Date(originDate);
        date.setDate(date.getDate() + numDay);

        var month = (date.getMonth() + 1).toString();
        if (month.length == 1) {
            month = '0' + month;
        }
        var day = date.getDate().toString();
        if (day.length == 1) {
            day = '0' + day;
        }

        return date.getFullYear() + '-' + month + '-' + day;
    },

    /**
     *  為日期 減 one day
     */
    getDateMinus: function getDateMinus(date) {
        return this.getDatePlus(date, -1);
    },

    // --------------------------------------------------------------------------------
    // event
    // --------------------------------------------------------------------------------
    handleKey: function handleKey(event) {

        // update combobox width
        this.state.combobox.width = this.getElementWidth();

        // 輸入 ↓ 的時候, 要跳到 ComboBox, 並且預選第一個項目
        if (event.keyCode == 40 && this.state.combobox.options.length > 0) {
            ReactDOM.findDOMNode(this.refs.box).focus();
            ReactDOM.findDOMNode(this.refs.box).selectedIndex = 0;
        }
        // 輸入 8 個數字時, 直接完成 yyyy-mm-dd 的格式設定
        else if (event.target.value.length == 8 && -1 === event.target.value.indexOf('-')) {

                var result = '';
                var guess = parseInt(event.target.value.substr(0, 2));
                if (guess >= 19) {
                    // guess yyyymmdd
                    result = event.target.value.substr(0, 4) + '-' + event.target.value.substr(4, 2) + '-' + event.target.value.substr(6, 2);
                } else {
                    // guess mmddyyyy
                    result = event.target.value.substr(4, 4) + '-' + event.target.value.substr(0, 2) + '-' + event.target.value.substr(2, 2);
                }
                this.setElementValue(result);
            }
            // 輸入英文字 的時候
            else if (event.target.value.match(/[a-z]/ig)) {

                    var today = utils.getDate(new Date());
                    var tomorrow = utils.getDate(new Date(new Date().getTime() + 86400 * 1000));
                    var options = [[today, today + ' (today)'], [tomorrow, tomorrow + ' (tomorrow)']];

                    // update combobox options
                    this.state.combobox.options = options;

                    // update state
                    this.setState({ 'combobox': this.state.combobox });
                }
                // 當日期完整時, 輸入 ↑ 表示加日期
                else if (event.keyCode == 38) {
                        var value = this.getElementValue();
                        if (!this.isValidDate(value)) {
                            return;
                        }
                        this.setElementValue(this.getDatePlus(value));

                        //  游標位置
                        // event.stopPropagation()
                        // event.preventDefault();
                        // console.log(event.target.selectionStart);
                    }
                    // 當日期完整時, 輸入 ↓ 表示減日期
                    else if (event.keyCode == 40) {
                            var value = this.getElementValue();
                            if (!this.isValidDate(value)) {
                                return;
                            }
                            this.setElementValue(this.getDateMinus(value));
                        } else {
                            this.state.combobox.options = [];
                            this.setState({ 'combobox': this.state.combobox });
                        }
    },

    /**
     *  comboBox 選取之後觸發的 event
     */
    handleChoose: function handleChoose(value) {
        this.setElementValue(value);
    },

    // --------------------------------------------------------------------------------
    // render
    // --------------------------------------------------------------------------------
    render: function render() {
        return React.createElement(
            'span',
            null,
            React.createElement('input', { type: 'text', name: this.props.name, ref: 'container', onKeyUp: this.handleKey, maxLength: '10', placeholder: 'yyyy-mm-dd' }),
            React.createElement(ui.InputDateComboBox, { data: this.state.combobox, listenChoose: this.handleChoose, ref: 'box' })
        );
    }

});

ui.InputDateComboBox = React.createClass({
    displayName: 'InputDateComboBox',

    getInitialState: function getInitialState() {
        return this.getDefault(this.props.data);
    },

    /**
     *  當一個掛載的組件接收到新的 props 的時候被調用
     */
    componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
        this.state = this.getDefault(nextProps.data);
    },

    // --------------------------------------------------------------------------------
    // helper
    // --------------------------------------------------------------------------------
    /**
     *  取得預設值
     *  如果參數中有相同的 key, 則覆蓋該值
     */
    getDefault: function getDefault(params) {
        var def = {
            'width': '',
            'maxOption': 5,
            'options': []
        };
        for (var key in def) {
            if (typeof params[key] !== "undefined") {
                def[key] = params[key];
            }
        }
        return def;
    },

    /**
     *  每次 "新" 產生的元件, unique id 將會不同
     */
    uniqueId: utils.getUniqueId(),

    getUniqueId: function getUniqueId(prefix) {
        return prefix + this.uniqueId;
    },

    // --------------------------------------------------------------------------------
    // event
    // --------------------------------------------------------------------------------
    handKey: function handKey(event) {
        // console.log(event.type, event.keyCode, event.which, event.timeStamp, event.target.value);
        var ENTER_KEY = 13;

        if (event.keyCode == ENTER_KEY) {
            this.props.listenChoose(event.target.value);
            this.setState({ options: [] });
        }
    },

    handClick: function handClick(event) {
        this.props.listenChoose(event.target.value);
        this.setState({ options: [] });
    },

    // --------------------------------------------------------------------------------
    // render
    // --------------------------------------------------------------------------------
    render: function render() {
        var id = this.getUniqueId('inputdate-combobox-id-');
        var options = this.state.options;
        var selectSize = options.length > this.state.maxOption ? this.state.maxOption : options.length;

        var selectStyle = {};
        selectStyle['overflow'] = 'hidden';
        selectStyle['display'] = 'none';
        if (options.length > 0) {
            selectStyle['display'] = 'block';
        }

        if (this.state.width) {
            selectStyle['width'] = this.state.width;
        }

        return React.createElement(
            'select',
            { style: selectStyle, size: selectSize, onKeyUp: this.handKey, onClick: this.handClick },
            options.map(this.renderOption)
        );
    },

    renderOption: function renderOption(arr, index) {
        var value = arr[0];
        var show = arr[1];
        return React.createElement(
            'option',
            { key: index, value: value },
            show
        );
    }

});
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

var ui = ui || {};
ui.InputInlinelabel = React.createClass({
    displayName: "InputInlinelabel",

    getInitialState: function getInitialState() {
        return {};
    },

    // --------------------------------------------------------------------------------
    // helper
    // --------------------------------------------------------------------------------
    getElementWidth: function getElementWidth() {
        var dom = this.refs.labelinput;
        return dom.offsetWidth;
    },

    setElementValue: function setElementValue(value) {
        var dom = this.refs.labelinput;
        dom.value = value;
    },

    getElementValue: function getElementValue() {
        var dom = this.refs.labelinput;
        return dom.value;
    },

    // --------------------------------------------------------------------------------
    // event
    // --------------------------------------------------------------------------------

    // --------------------------------------------------------------------------------
    // render
    // Read only: readOnly=true
    // --------------------------------------------------------------------------------
    render: function render() {
        return React.createElement(
            "div",
            { className: "input-group" },
            React.createElement(
                "span",
                { className: "input-group-addon", id: "basic-addon1" },
                this.props.require,
                this.props.label
            ),
            React.createElement("input", { type: "text", className: "form-control", "aria-describedby": "basic-addon1", name: this.props.name, ref: "labelinput", maxLength: this.props.maxlength, placeholder: this.props.name, readOnly: this.props.readonly })
        );
    }

});
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

var ui = ui || {};
ui.InputLabel = React.createClass({
    displayName: "InputLabel",

    getInitialState: function getInitialState() {
        return {};
    },

    // --------------------------------------------------------------------------------
    // helper
    // --------------------------------------------------------------------------------
    getElementWidth: function getElementWidth() {
        var dom = this.refs.labelinput;
        return dom.offsetWidth;
    },

    setElementValue: function setElementValue(value) {
        var dom = this.refs.labelinput;
        dom.value = value;
    },

    getElementValue: function getElementValue() {
        var dom = this.refs.labelinput;
        return dom.value;
    },

    // --------------------------------------------------------------------------------
    // event
    // --------------------------------------------------------------------------------

    // --------------------------------------------------------------------------------
    // render
    // Read only: readOnly=true
    // --------------------------------------------------------------------------------
    render: function render() {
        return React.createElement(
            "span",
            null,
            React.createElement(
                "label",
                { "for": "" },
                this.props.require,
                this.props.label
            ),
            React.createElement("input", { type: "text", className: "form-control", name: this.props.name, ref: "labelinput", maxLength: this.props.maxlength, placeholder: this.props.name, required: true })
        );
    }

});
'use strict';

var ui = ui || {};
ui.Pagination = React.createClass({
    displayName: 'Pagination',

    propTypes: {
        // props
        listenClick: React.PropTypes.func,
        pageShowCount: React.PropTypes.number,
        rowCount: React.PropTypes.number.isRequired,
        gap: React.PropTypes.number,
        show: React.PropTypes.string,
        showPrev: React.PropTypes.node,
        showNext: React.PropTypes.node,
        showFirst: React.PropTypes.node,
        showLast: React.PropTypes.node,
        // state
        page: React.PropTypes.number
    },

    getDefaultProps: function getDefaultProps() {
        return {
            pageShowCount: 15, // 每頁顯示幾筆資料 (用來計算總共有多少page)
            rowCount: 0, // 總筆數
            gap: 5, // 顯示多少可點擊頁數  << < 1 2 3 4 5 > >>
            show: 'prev next page', // 'prev next page first last'
            showPrev: React.createElement(
                'span',
                null,
                '‹ Prev'
            ),
            showNext: React.createElement(
                'span',
                null,
                'Next ›'
            ),
            showFirst: React.createElement(
                'span',
                null,
                '«'
            ),
            showLast: React.createElement(
                'span',
                null,
                '»'
            )
        };
    },

    getInitialState: function getInitialState() {
        return this.getDefault(this.props);
    },

    /**
     *  當一個掛載的組件接收到新的 props 的時候被調用
     */
    componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
        this.state = this.getDefault(nextProps);
    },

    // --------------------------------------------------------------------------------
    // helper
    // --------------------------------------------------------------------------------
    /**
     *  取得預設值
     *  如果參數中有相同的 key, 則覆蓋該值
     */
    getDefault: function getDefault(params) {
        var def = {
            page: params.page ? params.page : 1
        };
        return def;
    },

    /**
     *  檢查是否有指定字串
     *      example:
     *          "prev next page first last"
     */
    hasTag: function hasTag(tag) {
        if (-1 !== this.props.show.indexOf(tag)) {
            return true;
        }
        return false;
    },

    /**
     *  總共幾頁
     */
    getTotalPage: function getTotalPage() {
        return Math.ceil(this.props.rowCount / this.props.pageShowCount);
    },

    /**
     *  取得要顯示哪幾頁 page
     *      example:
     *          [5,6,7,8,9]
     *
     *  @return array
     */
    getShowPages: function getShowPages() {
        var total = this.getTotalPage();
        var start = undefined,
            stop = undefined;
        if (total >= this.props.gap) {
            // 顯示 gap 的數量
            // 必須要計算 active page 在中間的位置
            start = this.state.page - Math.floor(this.props.gap / 2);
            if (start < 1) {
                start = 1;
            }
            stop = start + this.props.gap - 1;
            if (stop > total) {
                stop = total;
                start = total - this.props.gap + 1; // 開始的頁數要回補, 不然在尾頁的數量會少於 gap
            }
        } else {
                // 顯示間距若少於 gap, 那麼就都顯示
                start = 1;
                stop = total;
            }

        var arr = new Array();
        var index = 0;
        for (var i = start; i <= stop; i++) {
            arr[index++] = i;
        }
        return arr;
    },

    // --------------------------------------------------------------------------------
    // event
    // --------------------------------------------------------------------------------
    /**
     *  點擊任何有關頁數的功能
     */
    handlePage: function handlePage(p) {
        if (p < 1) {
            p = 1;
        } else if (p > this.getTotalPage()) {
            p = this.getTotalPage();
        }

        // custom event
        if (this.props.listenClick) {
            this.props.listenClick(p);
        }

        this.setState({ page: p });
    },

    // --------------------------------------------------------------------------------
    // render
    // --------------------------------------------------------------------------------
    render: function render() {
        var tags = this.props.show.split(' ');
        var order = [];
        for (var index in tags) {
            switch (tags[index]) {
                case 'page':
                    order.push(this.getShowPages().map(this.renderPage));break;
                case 'prev':
                    order.push(this.renderPrev());break;
                case 'next':
                    order.push(this.renderNext());break;
                case 'first':
                    order.push(this.renderFirst());break;
                case 'last':
                    order.push(this.renderLast());break;
            }
        }
        return React.createElement(
            'ul',
            { className: 'pagination' },
            order
        );
    },

    renderPrev: function renderPrev() {
        if (!this.hasTag('prev')) {
            return;
        }
        if (this.state.page === 1) {
            return React.createElement(
                'li',
                { key: 'prev', className: 'disabled' },
                React.createElement(
                    'a',
                    { href: 'javascript:void(0)' },
                    this.props.showPrev
                )
            );
        }
        return React.createElement(
            'li',
            { key: 'prev', onClick: this.handlePage.bind(this, this.state.page - 1) },
            React.createElement(
                'a',
                { href: 'javascript:void(0)' },
                this.props.showPrev
            )
        );
    },

    renderNext: function renderNext() {
        if (!this.hasTag('next')) {
            return;
        }
        if (this.state.page === this.getTotalPage()) {
            return React.createElement(
                'li',
                { key: 'next', className: 'disabled' },
                React.createElement(
                    'a',
                    { href: 'javascript:void(0)' },
                    this.props.showNext
                )
            );
        }
        return React.createElement(
            'li',
            { key: 'next', onClick: this.handlePage.bind(this, this.state.page + 1) },
            React.createElement(
                'a',
                { href: 'javascript:void(0)' },
                this.props.showNext
            )
        );
    },

    renderFirst: function renderFirst() {
        if (!this.hasTag('first')) {
            return;
        }
        if (this.state.page === 1) {
            return React.createElement(
                'li',
                { key: 'first', className: 'disabled' },
                React.createElement(
                    'a',
                    { href: 'javascript:void(0)' },
                    this.props.showFirst
                )
            );
        }
        return React.createElement(
            'li',
            { key: 'first', onClick: this.handlePage.bind(this, 1) },
            React.createElement(
                'a',
                { href: 'javascript:void(0)' },
                this.props.showFirst
            )
        );
    },

    renderLast: function renderLast() {
        if (!this.hasTag('last')) {
            return;
        }
        var total = this.getTotalPage();
        if (this.state.page === total) {
            return React.createElement(
                'li',
                { key: 'last', className: 'disabled' },
                React.createElement(
                    'a',
                    { href: 'javascript:void(0)' },
                    this.props.showLast
                )
            );
        }
        return React.createElement(
            'li',
            { key: 'last', onClick: this.handlePage.bind(this, total) },
            React.createElement(
                'a',
                { href: 'javascript:void(0)' },
                this.props.showLast
            )
        );
    },

    renderPage: function renderPage(n, i) {
        if (!this.hasTag('page')) {
            return;
        }
        if (this.state.page === n) {
            return React.createElement(
                'li',
                { key: i, className: 'active' },
                React.createElement(
                    'a',
                    { href: 'javascript:void(0)' },
                    n
                )
            );
        }
        return React.createElement(
            'li',
            { key: i, onClick: this.handlePage.bind(this, n) },
            React.createElement(
                'a',
                { href: 'javascript:void(0)' },
                n
            )
        );
    }

});
'use strict';

var ui = ui || {};
ui.Selection = React.createClass({
    displayName: 'Selection',

    propTypes: {
        // props
        myoptions: React.PropTypes.string
    },

    getInitialState: function getInitialState() {
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
    handleChange: function handleChange() {
        this.setState({ 'selectedValue': this.refs.menu.value });
    },

    // --------------------------------------------------------------------------------
    // render
    // --------------------------------------------------------------------------------
    render: function render() {
        return React.createElement(
            'select',
            { ref: 'menu', onChange: this.handleChange.bind(this) },
            this.props.myoptions.map(function (o, i) {
                return React.createElement(
                    'option',
                    { key: i, value: o.selectValue },
                    o.selectLabel
                );
            })
        );
    }

});
'use strict';

var ui = ui || {};
ui.TableChoose = React.createClass({
    displayName: 'TableChoose',

    /**
     *  只掛載第一次 (?)
     *  順序
     *      getDefaultProps()
     *      getInitialState()
     *      componentDidMount()
     */
    getDefaultProps: function getDefaultProps() {
        return {
            headKey: '', // by heads, 一般來說會是放置資料的主鍵 example 'id' 'email'
            heads: [],
            rows: []
        };
    },
    // sort: [],       // by heads
    /**
     *  取得該 component 預設值
     */
    getInitialState: function getInitialState() {
        return {
            saveCheckbox: {}, // 儲存 checkbox item
            saveControlCheckbox: 0 };
    },
    // 控制 checkbox all 的功能, 並以圖示表示狀態
    /**
     *  在掛載結束之後馬上被調用
     *  DOM init in here
     */
    componentDidMount: function componentDidMount() {
        this.resetAllCheckbox();
    },

    /**
     *  已掛載的組件接收到新的 props 被調用
     */
    componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
        if (nextProps) {
            this.props = nextProps;
        }
        this.state.saveCheckbox = this.getInitialState().saveCheckbox;
        this.state.saveControlCheckbox = this.getInitialState().saveControlCheckbox;
        this.resetAllCheckbox();
    },

    /**
     *  每次更新都調用
     */
    componentDidUpdate: function componentDidUpdate() {},

    // --------------------------------------------------------------------------------
    // item checkbox store
    // --------------------------------------------------------------------------------
    /**
     *  manager checkbox
     */
    getCheckbox: function getCheckbox(key, defaultValue) {
        key = key.toString();
        if (typeof this.state.saveCheckbox[key.toString()] == "undefined") {
            return defaultValue ? defaultValue : null;
        }
        return this.state.saveCheckbox[key.toString()];
    },

    setCheckbox: function setCheckbox(key, value) {
        key = key.toString();
        var originValue = this.getCheckbox(key);

        this.state.saveCheckbox[key.toString()] = value;
        this.setState({ saveCheckbox: this.state.saveCheckbox });
        this.updateControlIcon();

        // 供外部使用的 listenCheck 是否有建立
        if (!this.props.listenCheck) {
            return;
        }
        // 如果值無改變, 不會觸發外部 event
        if (originValue === value) {
            return;
        }
        // 如果值原本是 null, 將不會觸發, 所以在新建立參數時, 不會觸發 event
        if (null === originValue) {
            return;
        }
        this.props.listenCheck(key, value);
    },

    /**
     *  將所有 rows 的 checkbox 設定為 false
     */
    resetAllCheckbox: function resetAllCheckbox() {
        var headKey = this.props.headKey;
        var that = this;
        var key = undefined;
        utils.each(this.props.rows, function (index, obj) {
            key = obj[headKey];
            that.setCheckbox(key, false);
        });
    },

    getAllCheckbox: function getAllCheckbox() {
        return this.state.saveCheckbox;
    },

    /**
     *  row checkbox 是否 全部都選
     */
    isAllCheck: function isAllCheck() {
        if (!this.state.saveCheckbox) {
            return false;
        }
        var result = true;
        utils.each(this.state.saveCheckbox, function (key, value) {
            if (value !== true) {
                result = false;
                return false; // is break
            }
        });
        return result;
    },

    /**
     *  row checkbox 是否 全部沒有選
     */
    isAllNotCheck: function isAllNotCheck() {
        if (!this.state.saveCheckbox) {
            return false;
        }
        var result = true;
        utils.each(this.state.saveCheckbox, function (key, value) {
            if (value !== false) {
                result = false;
                return false; // is break
            }
        });
        return result;
    },

    // --------------------------------------------------------------------------------
    // control checkbox store
    // --------------------------------------------------------------------------------
    /**
     *  get control checkbox icon
     *
     *  0 沒有任何點擊  的圖示  -> 囗
     *  1 部份點擊      的圖示  -> 囗 + 一
     *  2 全點擊圖      的圖示  -> 囗 + Ｖ
     *
     */
    getControlClassName: function getControlClassName() {
        switch (this.state.saveControlCheckbox) {
            case 1:
                return 'fa fa-lg fa-minus-square-o';
            case 2:
                return 'fa fa-lg fa-check-square';
            default:
                return 'fa fa-lg fa-square-o';
        }
    },

    /**
     *  依照現在 item checkbox 的狀態, 改變 control icon 
     */
    updateControlIcon: function updateControlIcon() {
        if (this.isAllCheck()) {
            this.state.saveControlCheckbox = 2;
        } else if (this.isAllNotCheck()) {
            this.state.saveControlCheckbox = 0;
        } else {
            this.state.saveControlCheckbox = 1;
        }
        this.setState({ saveControlCheckbox: this.state.saveControlCheckbox });
    },

    /**
     *  依照現在 control icon 的狀態, 在點擊該 icon 之後
     *  必須對 item checkbox 做狀態的變更
     *
     *  0 沒有任何點擊  的圖示 -> 2 全選取
     *  1 部份點擊      的圖示 -> 0 全取消
     *  2 全點擊圖      的圖示 -> 0 全取消
     *
     *  @return boolean
     */
    clickControlIcon: function clickControlIcon() {
        var control = undefined;
        switch (this.state.saveControlCheckbox) {
            case 1:
            case 2:
                this.state.saveControlCheckbox = 0;
                control = false;
                break;
            default:
                this.state.saveControlCheckbox = 2;
                control = true;
        }
        this.setState({ saveControlCheckbox: this.state.saveControlCheckbox });

        var that = this;
        utils.each(this.getAllCheckbox(), function (key, value) {
            that.setCheckbox(key, control);
        });
    },

    // --------------------------------------------------------------------------------
    // helper
    // --------------------------------------------------------------------------------
    getRowKey: function getRowKey(index) {
        if (!this.props.rows[index]) {
            return null;
        }
        return this.props.rows[index][this.props.headKey].toString();
    },

    /**
     *  引用者所需要的資訊
     */
    getInfo: function getInfo() {
        var numChoose = 0;
        utils.each(this.getAllCheckbox(), function (key, value) {
            if (value === true) {
                numChoose++;
            }
        });
        return {
            numChoose: numChoose,
            chooseItems: this.getAllCheckbox()
        };
    },

    validate: function validate() {
        if (!this.props.headKey) {
            console.log('table error: element headKey not found!');
            return false;
        }
        if (Object.prototype.toString.call(this.props.heads) !== '[object Array]') {
            return false;
        }
        if (Object.prototype.toString.call(this.props.rows) !== '[object Array]') {
            return false;
        }
        return true;
    },

    // --------------------------------------------------------------------------------
    // event
    // --------------------------------------------------------------------------------
    /**
     *  管理點擊的 row 資訊
     */
    handleCheck: function handleCheck(key, event) {
        this.setCheckbox(key, event.target.checked);
    },

    handleCheckAll: function handleCheckAll() {
        this.clickControlIcon();
    },

    // --------------------------------------------------------------------------------
    // render
    // --------------------------------------------------------------------------------
    render: function render() {
        if (!this.validate()) {
            return false;
        }
        var style = {
            "width": "20px"
        };

        var icon = this.getControlClassName();
        return React.createElement(
            'span',
            null,
            React.createElement(
                'table',
                { className: 'table table-condensed table-bordered table-hover' },
                React.createElement(
                    'thead',
                    null,
                    React.createElement(
                        'tr',
                        null,
                        React.createElement(
                            'th',
                            { style: style },
                            React.createElement('i', { className: icon, onClick: this.handleCheckAll })
                        ),
                        this.props.heads.map(this.renderHead)
                    )
                ),
                React.createElement(
                    'tbody',
                    null,
                    this.props.rows.map(this.renderRow)
                )
            )
        );
    },

    renderRow: function renderRow(row, i) {
        var key = this.getRowKey(i);
        var data = this._sortRowByHeadToArray(row, this.props.heads);
        var color = this.getCheckbox(key) ? 'info' : '';
        return React.createElement(
            'tr',
            { key: i, className: color },
            React.createElement(
                'td',
                null,
                React.createElement('input', {
                    type: 'checkbox',
                    key: i,
                    onChange: this.handleCheck.bind(this, key),
                    checked: this.getCheckbox(key) })
            ),
            data.map(this.renderCell)
        );
    },

    renderCell: function renderCell(data, i) {
        return React.createElement(
            'td',
            { key: i },
            data
        );
    },

    renderHead: function renderHead(title, i) {
        title = title.toLowerCase().replace(/\b[a-z]/g, function (letter) {
            return letter.toUpperCase();
        });
        return React.createElement(
            'th',
            { key: i },
            title
        );
    },

    /**
     *  將 row object 重新依照 head 排序, 並且轉成 "二維陣列"
     *  注意, 是轉為二維陣列!
     *
     *      {name:'ken', age:20, birth:'2000-01-01'}
     *      ->
     *          [
     *              ['ken'],
     *              [20],
     *              ['2000-01-01']
     *          ]
     *
     *  @return Array
     */
    _sortRowByHeadToArray: function _sortRowByHeadToArray(row, heads) {
        var data = [];
        var index = 0;
        for (var idx in heads) {
            var _name = heads[idx];
            data[index++] = [row[_name]];
        }
        return data;
    }

});
'use strict';

var ui = ui || {};
ui.TableShow = React.createClass({
    displayName: 'TableShow',

    getDefaultProps: function getDefaultProps() {
        return {
            heads: [],
            rows: []
        };
    },

    // --------------------------------------------------------------------------------
    // helper
    // --------------------------------------------------------------------------------

    validate: function validate() {
        if (Object.prototype.toString.call(this.props.heads) !== '[object Array]') {
            return false;
        }
        if (Object.prototype.toString.call(this.props.rows) !== '[object Array]') {
            return false;
        }
        return true;
    },

    // --------------------------------------------------------------------------------
    // event
    // --------------------------------------------------------------------------------
    /**
     *  提供給外界處理 row
     */
    handleRow: function handleRow(row) {
        // custom event
        if (this.props.handleRow) {
            row = this.props.handleRow(row);
        }
        return row;
    },

    // --------------------------------------------------------------------------------
    // render
    // --------------------------------------------------------------------------------
    render: function render() {
        if (!this.validate()) {
            return false;
        }
        return React.createElement(
            'span',
            null,
            React.createElement(
                'table',
                { className: 'table table-condensed table-bordered table-striped' },
                React.createElement(
                    'thead',
                    null,
                    React.createElement(
                        'tr',
                        null,
                        this.props.heads.map(this.renderHead)
                    )
                ),
                React.createElement(
                    'tbody',
                    null,
                    this.props.rows.map(this.renderRow)
                )
            )
        );
    },

    renderRow: function renderRow(row, i) {
        row = this.handleRow(row);
        var data = this._sortRowByHeadToArray(row, this.props.heads);
        return React.createElement(
            'tr',
            { key: i },
            data.map(this.renderCell)
        );
    },

    renderCell: function renderCell(data, i) {
        return React.createElement(
            'td',
            { key: i },
            data
        );
    },

    renderHead: function renderHead(title, i) {
        title = title.toLowerCase().replace(/\b[a-z]/g, function (letter) {
            return letter.toUpperCase();
        });
        return React.createElement(
            'th',
            { key: i },
            title
        );
    },

    /**
     *  將 row object 重新依照 head 排序, 並且轉成 "二維陣列"
     *  注意, 是轉為二維陣列!
     *
     *      {name:'ken', age:20, birth:'2000-01-01'}
     *      ->
     *          [
     *              ['ken'],
     *              [20],
     *              ['2000-01-01']
     *          ]
     *
     *  @return Array
     */
    _sortRowByHeadToArray: function _sortRowByHeadToArray(row, heads) {
        var data = [];
        var index = 0;
        for (var idx in heads) {
            var _name = heads[idx];
            data[index++] = [row[_name]];
        }
        return data;
    }

});
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
var ui = ui || {};
ui.Textarea = React.createClass({
    displayName: 'Textarea',

    getInitialState: function getInitialState() {
        return {
            'name': this.props.name
        };
    },

    // --------------------------------------------------------------------------------
    // helper
    // --------------------------------------------------------------------------------
    getElementWidth: function getElementWidth() {
        var dom = this.refs.textarea1;
        return dom.offsetWidth;
    },

    setElementValue: function setElementValue(value) {
        var dom = this.refs.textarea1;
        dom.value = value;
    },

    getElementValue: function getElementValue() {
        var dom = this.refs.textarea1;
        return dom.value;
    },

    // --------------------------------------------------------------------------------
    // event
    // --------------------------------------------------------------------------------

    // --------------------------------------------------------------------------------
    // render
    // --------------------------------------------------------------------------------
    render: function render() {
        return React.createElement(
            'span',
            null,
            React.createElement(
                'label',
                { 'for': '' },
                this.props.label
            ),
            React.createElement('textarea', { className: 'form-control', name: this.props.name, rows: this.props.rows, ref: 'textarea1', maxLength: '1000', placeholder: this.props.name })
        );
    }

});
'use strict';

/**
 *  Uploader
 *
 *      params:
 *
 *      code:
 *          <Uploader />
 *
 */

var ui = ui || {};
ui.Uploader = React.createClass({
    displayName: "Uploader",

    getDefaultProps: function getDefaultProps() {
        return {};
    },

    // --------------------------------------------------------------------------------
    // helper
    // --------------------------------------------------------------------------------

    // --------------------------------------------------------------------------------
    // event
    // --------------------------------------------------------------------------------

    handleFile: function handleFile(e) {
        if (this.props.listenFile) {
            this.props.listenFile(e);
        }
    },

    // --------------------------------------------------------------------------------
    // render
    // Read only: readOnly=true
    // --------------------------------------------------------------------------------
    render: function render() {

        return React.createElement("input", { type: "file", onChange: this.handleFile });
    }
});
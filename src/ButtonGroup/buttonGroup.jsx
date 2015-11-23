'use strict';

let ui = ui || {};
ui.ButtonGroup = React.createClass({

    /**
     *
     */
    getDefaultProps: function() {
        return {
            // lg, sm, xs
            size: '',

            //
            rows: [],

            // focus options
            options: {
                showName: null,
                type: null,
            },
        };
    },

    /**
     *  已掛載的組件接收到新的 props 被調用
     */
    componentWillReceiveProps(nextProps) {
        if (nextProps) {
            this.props = nextProps;
        }
    },

    /**
     *  每次更新都調用
     */
    componentDidUpdate() {
    },

    // --------------------------------------------------------------------------------
    // event
    // --------------------------------------------------------------------------------
    /**
     *  管理點擊的 row 資訊
     */
    handleCheck: function(row)
    {
        // 供外部使用的 listenClick 是否有建立
        if (this.props.listenClick) {
            this.props.listenClick(row);
        }
    },

    // --------------------------------------------------------------------------------
    // check
    // --------------------------------------------------------------------------------
    isFocusShowName: function()
    {
        if (this.props.options.showName === false) {
            return false;
        }
        return true;
    },

    // --------------------------------------------------------------------------------
    // get
    // --------------------------------------------------------------------------------
    getSizeClass()
    {
        switch(this.props.size) {
            case 'lg': return 'btn-group-lg';
            case 'sm': return 'btn-group-sm';
            case 'xs': return 'btn-group-xs';
        }
        return '';
    },

    getTypeClass(type)
    {
        switch(type) {
            case 'primary': return 'btn-primary';
            case 'success': return 'btn-success';
            case 'info':    return 'btn-info';
            case 'warning': return 'btn-warning';
            case 'danger':  return 'btn-danger';
            case 'link':    return 'btn-link';
        }
        return '';
    },

    getFocusTypeClass()
    {
        let type = this.props.options.type;
        if (type === null) {
            type = '';
        }
        return this.getTypeClass(type);
    },

    // --------------------------------------------------------------------------------
    // render
    // --------------------------------------------------------------------------------
    render()
    {
        let className = 'btn-group ' + this.getSizeClass();
        return (
            <div className={className} role="group">
                {this.props.rows.map(this.renderButton.bind(this))}
            </div>
        );
    },

    renderButton: function(row, i)
    {
        let options = {};
        let linkIcon = null;
        let loadIcon = null;
        let className = 'btn btn-default';
        let buttonStyle = null;
        let type = this.getTypeClass(row.type);
        if (type) {
            className += ' ' + type;
        }

        // is link
        if (row.href) {
            let style = {
                'margin-left': '5px'
            };
            options.href = row.href;

            // 內連結
            if (!row.target) {
                linkIcon = <i className="fa fa-link" style={style}></i>;
            }
            // 跳出連結
            else {
                options.target = row.target;
                linkIcon = <i className="fa fa-external-link-square" style={style}></i>;
            }
        }

        if (row.disabled) {
            options.disabled = "disabled";
        }

        if (row.display === false) {
            buttonStyle = {
                'display': 'none'
            }
        }
        else if (row.visibility === false) {
            buttonStyle = {
                'visibility': 'hidden'
            }
        }

        if (row.status === 'load') {
            let style = {
                'margin-left': '5px'
            };
            loadIcon = <i className="fa fa-circle-o-notch fa-spin" style={style}></i>;
        }

        if (row.status === 'active') {
            className += ' active';
        }

        // 在 focus 的情況下, 可以覆蓋 "type" 來指定不同的顏色
        let focusType = this.getFocusTypeClass();
        if (focusType) {
            row.type = focusType;
            let type = this.getTypeClass(row.type);
            if (type) {
                className += ' ' + type;
            }
        }



        //
        //  status
        //      false    => not focus
        //      'load'   => loading
        //      'active' => active
        //
        if (row.status === 'load' && !this.isFocusShowName()) {
            return (
                <a key={i} type="button" className={className} style={buttonStyle} onClick={this.handleCheck.bind(this, row)} {...options} >
                    {linkIcon}
                    {loadIcon}
                </a>
            );
        }
        return (
            <a key={i} type="button" className={className} style={buttonStyle} onClick={this.handleCheck.bind(this, row)} {...options} >
                {row.name}
                {linkIcon}
                {loadIcon}
            </a>
        );

    }

});

'use strict';

let ui = ui || {};
ui.Breadcrumb = React.createClass({

    /**
     *
     */
    getDefaultProps: function() {
        return {
            rows: []
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
    // render
    // --------------------------------------------------------------------------------
    render()
    {
        return (
            <div>
                {this.props.rows.map(this.renderItem.bind(this))}
            </div>
        );

    },

    renderItem: function(row, i)
    {
        let iconStyle = {
            'margin-left':  '10px',
            'margin-right': '10px',
        };

        let icon = '';
        if (row.icon) {
            let className = "fa-lg fa fa-" + row.icon;
            icon = <i className={className} style={iconStyle}></i>;
        }

        let nextIcon = '';
        if (i !== 0) {
            nextIcon = <span className="glyphicon glyphicon-chevron-right" style={iconStyle}></span>;
        }

        let show = (
            <button type="button" className="btn btn-default" onClick={this.handleCheck.bind(this, row)} >
                {icon}
                {row.name}
            </button>
        );
        if (row.href) {
            show = <a href={row.href}>{show}</a>;
        }

        return (
            <span>
                {nextIcon}
                {show}
            </span>
        );
    }

});

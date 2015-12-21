'use strict';

let ui = ui || {};
ui.Info = React.createClass({

    /**
     *
     */
    getDefaultProps: function() {
        return {
            rows: [],
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
    // render
    // --------------------------------------------------------------------------------
    render()
    {
        return (
            <ul className="nav nav-pills">
                {this.props.rows.map(this.renderBlock.bind(this))}
            </ul>
        );
    },

    renderBlock: function(row, i)
    {
        let showValue = null;
        if (row.value) {
            showValue = <span className="badge">{row.value}</span>;
        }

        let icon = null;
        if (row.icon) {
            let iconStyle = {'margin-right': '5px'};
            let iconClass = "fa fa-" + row.icon;
            icon = <i className={iconClass} style={iconStyle}></i>
        }

        // className="active"
        return (
            <li role="presentation">
                <a href="javascript:void(0);">
                    {icon}
                    {row.name}
                    {showValue}
                </a>
            </li>
        );
    }

});

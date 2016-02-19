'use strict';

/**
 *  WmsEmaillist
 *
 *      params:
 *
 *      code:
 *          <WmsEmaillist />
 *
 */

let ui = ui || {};
ui.WmsEmaillist = React.createClass({
 
    getDefaultProps: function() {
        return {
            heads: [],
            rows: [],
        };
    },

    // --------------------------------------------------------------------------------
    // helper
    // --------------------------------------------------------------------------------
    

    // --------------------------------------------------------------------------------
    // event
    // --------------------------------------------------------------------------------
    handleChange: function(event) {
        
    },
    
    handleLink: function(i) {
        if (this.props.listenLink) {
            this.props.listenLink(i);
        }
    },
    
    handleRow: function(row) {
        if (this.props.handleRow) {
            row = this.props.handleRow(row);
        }
        return row;
    },

    // --------------------------------------------------------------------------------
    // render
    // Read only: readOnly=true
    // --------------------------------------------------------------------------------
    render() {
        return (
            <span>
                <table className="table table-condensed">
                    <thead>
                        <tr>
                            {this.props.heads.map(this.renderHead)}
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.rows.map(this.renderRow)}
                    </tbody>
                </table>
            </span>
        );
    },
    
    
    renderRow: function(row, i) {
        row = this.handleRow(row);
        let data = this._sortRowByHeadToArray(row, this.props.heads);
        let active = "";
        let boundLink = this.handleLink.bind(this, i);
        
        if (row.is_read == "0") {
            active = "active";
        }
        return (
            <tr data-index={i} className={active} onClick={boundLink}>
                {data.map(this.renderCell)}
            </tr>
        );
    },

    renderCell: function(data, i) {
        return (
            <td><b>{data}</b></td>
        );
    },

    renderHead: function(title, i) {
        title = title.toLowerCase().replace(/\b[a-z]/g, function(letter) {
            return letter.toUpperCase();
        });
        return (
            <th>{title}</th>
        );
    },

    _sortRowByHeadToArray: function( row, heads )
    {
        let data = [];
        let index = 0;
        for ( let idx in heads ) {
            let name = heads[idx];
            data[index++] = [ row[name] ];
        }
        return data;
    },
});



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
ui.WmsEmailparent = React.createClass({
 
    getDefaultProps: function() {
        return {
            heads: [],
            rows: [],
            show: "",
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
                <div>{this.props.rows[0].subject}</div>
                <table className="table table-condensed">
                    <tbody>
                        {this.props.rows.map(this.renderRow)}
                    </tbody>
                </table>
            </span>
        );
    },
    
    
    renderRow: function(row, i) {
        row = this.handleRow(row);
        let root = this._sortRowByHeadToArray(row, this.props.roots);
        let subRoots = this._sortRowByHeadToArray(row, this.props.subRoots);
        let biundLink = this.handleLink.bind(this, i);
        console.log(this.props);
        return (
            [<tr data-index={i} className="active" onClick={biundLink}>
                {root.map(this.renderCell)}
            </tr>,
            <tr className={row.show}>
                {this.renderSubRoots(subRoots)}
            </tr>,
            <tr className={row.show}>
                {this.renderContent(row)}
            </tr>]
        );
    },

    renderCell: function(data, i) {
        return (
            <td><b>{data}</b></td>
        );
    },
    
    renderSubRoots: function(subRoots, i) {
        return (
            <td colSpan="3"><b>{subRoots[0]}</b> Send to <b>&lt;{subRoots[1]}&gt;</b></td>
        );
    },
    
    renderContent: function(row, i) {
        return (
            <td colSpan="3">{row["body_snippet"]}</td>
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



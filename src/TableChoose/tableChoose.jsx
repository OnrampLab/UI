'use strict';

let TableChoose = React.createClass({

    getInitialState() {
        return this.getDefault( this.props.data );
    },

    /**
     *  當一個掛載的組件接收到新的 props 的時候被調用
     */
    componentWillReceiveProps(nextProps) {
        this.state = this.getDefault( nextProps.data );

        // reset other
        // TODO: 該方式應該是錯的, 請察明後修正!!
        $('input[type="checkbox"]').each(function(){
            $(this).attr('checked',false)
        });
    },

    /**
     *  在更新發生之後調用
     */
    componentDidUpdate() {
    },

    // --------------------------------------------------------------------------------
    // store
    // --------------------------------------------------------------------------------
    /**
     *  manager checkbox
     */
    getCheckbox(key, defaultValue ) {
        this.state.saveCheckbox = this.state.saveCheckbox || [];
        if( typeof(this.state.saveCheckbox[key]) == "undefined" ) {
            return defaultValue ? defaultValue : null;
        }
        return this.state.saveCheckbox[key];
    },
    setCheckbox(key, value) {
        this.state.saveCheckbox = this.state.saveCheckbox || [];
        this.state.saveCheckbox[key] = value;
    },

    // --------------------------------------------------------------------------------
    // helper
    // --------------------------------------------------------------------------------
    /**
     *  每次 "新" 產生的元件, unique id 將會不同
     */
    // uniqueId: utils.getUniqueId(),

    getRowKey(index)
    {
        if ( !this.state.rows[index] ) {
            return null;
        }
        return this.state.rows[index][this.state.headKey].toString();
    },

    /**
     *  取得預設值
     *  如果參數中有相同的 key, 則覆蓋該值
     */
    getDefault(params) {
        let def = {
            id: '',         // table id="?"
            headKey: '',    // by heads, 一般來說會是放置資料的主鍵 'id'
            heads: [],
            // sort: [],    // by heads
            rows: [],
        };

        for (let key in def) {
            if( typeof(params[key])!=="undefined" ) {
                def[key] = params[key];
            }
        }
        return def;
    },

    validate() {
        if ( !this.state.headKey ) {
            console.log('table error: element headKey not found!');
            return false;
        }
        if( Object.prototype.toString.call( this.state.heads ) !== '[object Array]' ) {
            return false;
        }
        if( Object.prototype.toString.call( this.state.rows ) !== '[object Array]' ) {
            return false;
        }
        return true;
    },

    // --------------------------------------------------------------------------------
    // event
    // --------------------------------------------------------------------------------
    /**
     *  管理已點擊的 row 資訊
     */
    handleCheck: function(key, event) {
        this.setCheckbox(key, event.target.checked);
        this.setState(this.state);
    },

    handleCheckAll: function(event) {
        console.log(event.target.checked);
    },

    // --------------------------------------------------------------------------------
    // render
    // --------------------------------------------------------------------------------
    render() {
        if ( !this.validate() ) {
            return false;
        }
        let style = {
            "width":"20px"
        };
        return (
            <span>
                <table className="table table-condensed table-bordered table-hover">
                    <thead>
                        <th style={style}><input type="checkbox" onChange={this.handleCheckAll} /></th>
                        {this.state.heads.map(this.renderHead)}
                    </thead>
                    <tbody>
                        {this.state.rows.map(this.renderRow)}
                    </tbody>
                </table>
            </span>
        );
    },

    renderRow: function(row, i) {
        let key     = this.getRowKey(i);
        let data    = this._sortRowByHeadToArray(row, this.state.heads);
        let color   = this.getCheckbox(key) ? 'info' : '';
        return (
            <tr key={i} className={color}>
                <td><input type="checkbox" key={i} onChange={this.handleCheck.bind(this,key)} /></td>
                {data.map(this.renderCell)}
            </tr>
        );
    },

    renderCell: function(data, i) {
        return (
            <td key={i}>{data}</td>
        );
    },

    renderHead: function(title, i) {
        title = title.toLowerCase().replace(/\b[a-z]/g, function(letter) {
            return letter.toUpperCase();
        });
        return (
            <th key={i}>{title}</th>
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

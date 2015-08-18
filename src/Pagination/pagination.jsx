'use strict';

let Pagination = React.createClass({
    propTypes: {
        listenClick: React.PropTypes.func,
    },

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
            page: 1,
            pageShowCount: 15,          // 每頁顯示幾筆資料 (用來計算總共有多少page)
            rowCount: 0,                // 總筆數
            gap: 5,                     // 顯示5個  << < 1 2 3 4 5 > >>
            show: 'prev next page',     // 'prev next page first last'
            showPrev:  <span>&lsaquo; Prev</span>,
            showNext:  <span>Next &rsaquo;</span>,
            showFirst: <span>&laquo;</span>,
            showLast:  <span>&raquo;</span>,
        };

        for (let key in def) {
            if( typeof(params[key])!=="undefined" ) {
                def[key] = params[key];
            }
        }

        return def;
    },

    /**
     *  檢查是否有指定字串
     */
    hasTag(tag) {
        if ( -1 !== this.state.show.indexOf(tag) ) {
            return true;
        }
        return false;
    },

    /**
     *  總共幾頁
     */
    getTotalPage() {
        return Math.ceil(this.state.rowCount / this.state.pageShowCount);
    },

    /**
     *  取得要顯示哪幾頁 page
     *      example:
     *          [5,6,7,8,9]
     *
     *  @return array
     */
    getShowPages() {
        let total = this.getTotalPage();
        let start, stop;
        if ( total >= this.state.gap ) {
            // 顯示 gap 的數量
            // 必須要計算 active page 在中間的位置
            start = this.state.page - Math.floor(this.state.gap/2);
            if ( start < 1 ) {
                start = 1;
            }
            stop = start + this.state.gap - 1;
            if ( stop > total ) {
                stop  = total;
                start = total-this.state.gap+1; // 開始的頁數要回補, 不然在尾頁的數量會少於 gap
            }
        }
        else {
            // 顯示間距若少於 gap, 那麼就都顯示
            start = 1;
            stop  = total;
        }

        let arr = new Array();
        let index = 0;
        for ( let i=start; i<=stop; i++ ) {
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
    handlePage: function(p) {
        if ( p < 1 ) {
            p = 1;
        }
        else if ( p > this.getTotalPage() ) {
            p = this.getTotalPage();
        }

        // custom event
        if (this.props.listenClick) {
            this.props.listenClick(p);
        }

        this.setState({page: p});
    },

    // --------------------------------------------------------------------------------
    // render
    // --------------------------------------------------------------------------------
    render() {
        let tags = this.state.show.split(' ');
        let order = [];
        for ( let index in tags ) {
            switch (tags[index]) {
                case 'page':  order.push( this.getShowPages().map(this.renderPage) );  break;
                case 'prev':  order.push( this.renderPrev()     );  break;
                case 'next':  order.push( this.renderNext()     );  break;
                case 'first': order.push( this.renderFirst()    );  break;
                case 'last':  order.push( this.renderLast()     );  break;
            }
        }
        return (
            <ul className="pagination">{order}</ul>
        );
    },

    renderPrev: function() {
        if ( !this.hasTag('prev') ) {
            return;
        }
        if ( this.state.page === 1 ) {
            return (
                <li key="prev" className="disabled">
                    <a href="javascript:void(0)">{this.state.showPrev}</a>
                </li>
            );
        }
        return (
            <li key="prev" onClick={this.handlePage.bind(this, this.state.page-1)}>
                <a href="javascript:void(0)">{this.state.showPrev}</a>
            </li>
        );
    },

    renderNext: function() {
        if ( !this.hasTag('next') ) {
            return;
        }
        if ( this.state.page === this.getTotalPage() ) {
            return (
                <li key="next" className="disabled">
                    <a href="javascript:void(0)">{this.state.showNext}</a>
                </li>
            );
        }
        return (
            <li key="next" onClick={this.handlePage.bind(this, this.state.page+1)}>
                <a href="javascript:void(0)">{this.state.showNext}</a>
            </li>
        );
    },

    renderFirst: function() {
        if ( !this.hasTag('first') ) {
            return;
        }
        if ( this.state.page === 1 ) {
            return (
                <li key="first" className="disabled">
                    <a href="javascript:void(0)">{this.state.showFirst}</a>
                </li>
            );
        }
        return (
            <li key="first" onClick={this.handlePage.bind(this, 1)}>
                <a href="javascript:void(0)">{this.state.showFirst}</a>
            </li>
        );
    },

    renderLast: function() {
        if ( !this.hasTag('last') ) {
            return;
        }
        let total = this.getTotalPage();
        if ( this.state.page === total ) {
            return (
                <li key="last" className="disabled">
                    <a href="javascript:void(0)">{this.state.showLast}</a>
                </li>
            );
        }
        return (
            <li key="last" onClick={this.handlePage.bind(this, total)}>
                <a href="javascript:void(0)">{this.state.showLast}</a>
            </li>
        );
    },

    renderPage: function(n, i) {
        if ( !this.hasTag('page') ) {
            return;
        }
        if ( this.state.page === n ) {
            return (
                <li key={i} className="active">
                    <a href="javascript:void(0)">{n}</a>
                </li>
            );
        }
        return (
            <li key={i} onClick={this.handlePage.bind(this, n)}>
                <a href="javascript:void(0)">{n}</a>
            </li>
        );
    }

});

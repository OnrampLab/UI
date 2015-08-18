(function () {
    'use strict';

    let Main = React.createClass({
        // --------------------------------------------------------------------------------
        // event
        // --------------------------------------------------------------------------------
        page(n) {
            console.log('page '+n);
        },

        getData() {
            return {
                page: 1,
                rowCount: 150,
            };
        },

        // 假設是 ajax 的過程
        getData2() {
            let resetData = {
                page: 1,
                rowCount: 46,
                show: 'page',
            }
            // 覆蓋, 不保留原有的 state 資料
            this.setState({data: resetData});
        },

        // 假設是 ajax 的過程
        getData3() {
            let resetData = {
                page: 4,
                rowCount: 160,
                show: 'first prev page next last',
            }
            // 覆蓋, 不保留原有的 state 資料
            this.setState({data: resetData});

            /*
                如果不覆蓋, 要保留, 做法如下
                this.state.data.page     = 4;
                this.state.data.rowCount = 160;
                this.state.data.first    = true;
                this.state.data.last     = true;
                this.setState({data: this.state.data});
            */
        },

        // --------------------------------------------------------------------------------
        getInitialState() {
            return {
                data: this.getData()
            };
        },

        render() {
            return (
                <section>
                    <nav>
                        <Pagination data={this.state.data} listenClick={this.page} />
                    </nav>
                    <p>
                        <button className="btn btn-primary" onClick={this.getData2}>
                            ajax 2
                        </button>
                        &nbsp;&nbsp;

                        <button className="btn btn-primary" onClick={this.getData3}>
                            ajax 3
                        </button>
                    </p>
                </section>
            );
        },
    });

    React.render(<Main />, document.getElementById('content'));

})();

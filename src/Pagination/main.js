(function () {
    'use strict';

    let Main = React.createClass({
        // --------------------------------------------------------------------------------
        // event
        // --------------------------------------------------------------------------------
        page(n) {
            console.log('click page '+n);
        },

        getPageLimit() {
            return {
                page: 1,
                rowCount: 260,
            };
        },

        getPageLimit2() {
            // 假設是 ajax 的過程
            getData = {
                page: 1,
                rowCount: 30,
                prev: false,
                next: false,
            };
            this.setState({pageLimit: getData});
        },

        getPageLimit3() {
            // 假設是 ajax 的過程
            getData = {
                page: 4,
                rowCount: 160,
                first: true,
                last: true,
            };
            this.setState({pageLimit: getData});
        },

        // --------------------------------------------------------------------------------
        getInitialState() {
            return {
                pageLimit: this.getPageLimit(),
            };
        },

        render() {
            return (
                <section>
                    <nav>
                        <Pagination data={this.state.pageLimit} handlePage={this.page} />
                    </nav>
                    <p>
                        <button className="btn btn-primary" onClick={this.getPageLimit2}>
                            ajax 2
                        </button>
                        &nbsp;&nbsp;

                        <button className="btn btn-primary" onClick={this.getPageLimit3}>
                            ajax 3
                        </button>
                    </p>
                </section>
            );
        },
    });

    React.render(<Main />, document.getElementById('content'));

})();

(function () {
    'use strict';

    let Main = React.createClass({
        // --------------------------------------------------------------------------------
        // event
        // --------------------------------------------------------------------------------
        page(n) {
            console.log('click page '+n);
        },

        getData() {
            return {
                page: 1,
                rowCount: 260,
            };
        },

        // 假設是 ajax 的過程
        getData2() {
            this.setState({
                page: 1,
                rowCount: 30,
                prev: false,
                next: false,
            });
        },

        // 假設是 ajax 的過程
        getData3() {
            this.setState({
                page: 4,
                rowCount: 160,
                first: true,
                last: true,
            });
        },

        // --------------------------------------------------------------------------------
        getInitialState() {
            return this.getData();
        },

        render() {
            return (
                <section>
                    <nav>
                        <Pagination {...this.state} handlePage={this.page} />
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

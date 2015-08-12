
    <div id="content"></div>

    <script type="text/jsx" src="src/Pagination/pagination.js"></script>
    <script type="text/jsx">
        var Main = React.createClass({
            // --------------------------------------------------------------------------------
            // event
            // --------------------------------------------------------------------------------
            page(n) {
                console.log('click page '+n);
                //console.log( this.state.pageLimit.page );
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
                };
                this.setState({pageLimit: getData});
            },

            getPageLimit3() {
                // 假設是 ajax 的過程
                getData = {
                    page: 4,
                    rowCount: 100,
                    prev: false,
                    next: false,
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
                            <ReactBootstrap.Button bsStyle='primary' onClick={this.getPageLimit2}>
                                ajax 2
                            </ReactBootstrap.Button>
                            &nbsp;&nbsp;

                            <ReactBootstrap.Button bsStyle='primary' onClick={this.getPageLimit3}>
                                ajax 3
                            </ReactBootstrap.Button>
                        </p>
                    </section>
                );
            },
        });
        React.render(<Main />, document.getElementById('content'));
    </script>


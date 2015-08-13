(function () {
    'use strict';

    let Main = React.createClass({
        // --------------------------------------------------------------------------------
        // data
        // --------------------------------------------------------------------------------
        getRows() {
            return {
                headKey: 'id',
                heads: ['name','price','stocked'],
                rows: [
                        { id: 11, name: "Football",    price: 49.99,  age: 11,                      },
                        { id: 12, name: "Baseball",    price: 9.99,   age: 20,                      },
                        { id: 13,                      price: 29.99,  age: 13, name: "Basketball"   },
                        { id: 14, name: "iPod Touch",  price: 99.99,  age: 22,                      },
                        { id: 27, name: "iPhone 5",    price: 399.99, age: 5                        },
                        { id: 28, name: "Nexus 7",     price: 199.99, age: 90                       },
                ],
            }
        },

        // 假設是 ajax 的過程
        getRows2() {
            var table = this.state.table;
            /*
                table.heads = ['name','price'];
                ->
                Uncaught Error: Invariant Violation: processUpdates(): Unable to find child 2 of element.
                This probably means the DOM was unexpectedly mutated (e.g., by the browser),
                usually due to forgetting a <tbody> when using tables, nesting tags like <form>, <p>, or <a>,
                or using non-SVG elements in an <svg> parent.
                Try inspecting the child nodes of the element with React ID `.0.0.1.0`.
            */
            table.rows = [
                { id: 12, name: "iPhone 5",   price: 199,   age: 12 },
                { id: 13, name: "iPhone 6",   price: 299,   age: 33 },
                { id: 14, name: "iPhone 6s",  price: 399,   age: 80 },
            ];
            this.setState({"table": table});
        },

        // --------------------------------------------------------------------------------
        getInitialState() {
            return {
                table: this.getRows(),
            };
        },

        render() {
            return (
                <div>
                    <TableChoose data={this.state.table} />

                    <button className="btn btn-primary" onClick={this.getRows2}>
                        get rows 2
                    </button>
                </div>
            );
        },
    });
    React.render(<Main />, document.getElementById('content'));

})();

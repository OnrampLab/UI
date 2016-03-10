(function () {
    'use strict';

    let Main = React.createClass({
        // --------------------------------------------------------------------------------
        // event
        // --------------------------------------------------------------------------------

        

        getData() {
            return {
                myoptions: [{ selectValue: "value1", selectLabel: "label1" },{ selectValue: "value2", selectLabel: "label2"},],
            };
        },

        // --------------------------------------------------------------------------------
        getInitialState() {
            return {
                data: this.getData()
            };
        },
        
        componentDidMount: function()
        {
            this.getData();
        },

        render() {
            return (
                <section>
                    <nav>
                        <ui.Selection {...this.state.data} />
                    </nav>
                </section>
            );
        },
    });

    ReactDOM.render(<Main />, document.getElementById('content'));

})();

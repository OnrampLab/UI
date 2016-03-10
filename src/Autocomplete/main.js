(function () {
    'use strict';

    let Main = React.createClass({
        // --------------------------------------------------------------------------------
        // 其它相關的事件
        // --------------------------------------------------------------------------------
        

        // --------------------------------------------------------------------------------
        // react-component event
        // --------------------------------------------------------------------------------

        handleClick(event, autocomplete)
        {
            autocomplete.setElementValue(event.target.innerHTML);
            autocomplete.setState({'dropClass': ''});
        },

        handleChange(event, autocomplete) 
        {
            autocomplete.setState({'dropClass': 'open'});
            
            //get and set data
            autocomplete.setState({'list': ['result1', 'result2', 'result3']});
        },

        // --------------------------------------------------------------------------------
        getInitialState()
        {
            return {};
        },

        render() {
            let showCount = '';
            let infoRows = [];

            return (
                <div>
                    <div className="form-group">
                        <ui.Autocomplete name="Customer Name or Email" label="Customer Name or Email" listenChange={this.handleChange} listenClick={this.handleClick} />
                    </div>
                </div>
            );
        },
    });

    ReactDOM.render(<Main />, document.getElementById('content'));

})();

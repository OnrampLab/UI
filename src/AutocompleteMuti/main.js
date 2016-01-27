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
            let myTarget = 'Email';
            $.each( event.target.parentElement.attributes, function(index, attribute) {
                if ('data-index' == attribute.name) {
                    autocomplete.setElementValue(autocomplete.state.rows[attribute.value][myTarget]);
                }
            });
            
            autocomplete.setState({'dropClass': ''});
        },

        handleChange(event, autocomplete) 
        {
            autocomplete.setState({'dropClass': 'open'});
            
            //get and set data
            let myData = {'rows' : [{'First Name': 'first1', 'Last Name': 'last1', 'Email': 'email1'}, {'First Name': 'first2', 'Last Name': 'last2', 'Email': 'email2'}],
                          'heads' : ['First Name', 'Last Name', 'Email']};
            let output = [];
            $.each( myData.rows, function(rowIndex, data) {
                output.push(data['First Name'] + " " + data['Last Name'] + " " + data['Email'] );
            });
            
            autocomplete.setState({'list': output});
            autocomplete.setState({'heads': myData.heads});
            autocomplete.setState({'rows': myData.rows});
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
                        <ui.AutocompleteMuti name="Customer Name or Email" label="Customer Name or Email" listenChange={this.handleChange} listenClick={this.handleClick} />
                    </div>
                </div>
            );
        },
    });

    ReactDOM.render(<Main />, document.getElementById('content'));

})();

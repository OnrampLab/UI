(function () {
    'use strict';

    let Main = React.createClass({
        // --------------------------------------------------------------------------------
        // data
        // --------------------------------------------------------------------------------
        getRows() {
            let json = {roots: ['from_email','subject','email_create_time'],
                        subRoots: ['to_name','to_email','email_create_time'],
                        rows: [
                                { id: 11, 
                                  from_email: "cs@simplybridal.com", 
                                  from_name: "Customer Service", 
                                  to_email: "turtlemt01@gmail.com", 
                                  to_name: "Brian", 
                                  subject: "Hello Brian. Your dress has been shipped", 
                                  body_snippet: "This is content. For basic styling-light padding and only horizontal dividers-add the base class .table to any . It may seem super redundant, but given the widespread use of tables for other plugins like calendars and date pickers, we've opted to isolate our custom table styles.", 
                                  message_id: "CSBHUcrvgnirewwodvfswwe1",
                                  reference_message_ids: "",
                                  is_read: 1, 
                                  email_create_time: "2016-01-12 20:46:46",},
                                { id: 15, 
                                  from_email: "turtlemt01@gmail.com", 
                                  from_name: "Brian", 
                                  to_email: "cs@simplybridal.com", 
                                  to_name: "Customer Service", 
                                  subject: "Re: Hello Brian. Your dress has been shipped", 
                                  body_snippet: "This is a reply. Use .table-striped to add zebra-striping to any table row within the.", 
                                  message_id: "CdxbhuivberbggerurUHuewi",
                                  reference_message_ids: "CSBHUcrvgnirewwodvfswwe1",
                                  is_read: 1, 
                                  email_create_time: "2016-01-13 09:46:46"},
                        ],};
            
            _(json.rows).forEach(function(data, index) {
                _.assign(json.rows[index], {show: "hide"});
            });
            return json;
        },

        // --------------------------------------------------------------------------------
        // event
        // --------------------------------------------------------------------------------
        send() {
            let data = {emailTo: this.refs.emailTo.getElementValue(),
                        emailCC: this.refs.emailCC.getElementValue(),
                        emailSubject: this.refs.emailSubject.getElementValue(),
                        emailBody: this.refs.emailEditor.getElementHtml(),
                       }
            //call send mail function
        },
        
        rowChange(row) {
            if ( row.stocked === true ) {
                row.stocked = 'TRUE';
            }
            return row;
        },
        
        handleLink(i)
        {
            //redirect
            let table = this.state.table;
            if ("" == table.rows[i].show) {
                table.rows[i].show = "hide";
            } else {
                table.rows[i].show = "";
            }
            this.setState({'table': table});
        },

        // --------------------------------------------------------------------------------
        getInitialState() {
            let table = this.getRows();
            
            return {
                table: table,
                emailTo: _.last(table.rows).from_email,
                emailCC: "",
                emailSubject: "Re: " + table.rows[0].subject,
                emailBody: "",
            };
        },
        
        componentDidMount: function()
        {
            this.refs.emailTo.setElementValue(this.state.emailTo);
            this.refs.emailSubject.setElementValue(this.state.emailSubject);
        },

        render() {
            return (
                <div>
                    <ui.WmsEmailparent
                        {...this.state.table}
                        {...this.state.show}
                        handleRow={this.rowChange}
                        listenLink={this.handleLink}
                    />
                    <ui.InputInlinelabel name="emailTo" label="Email To:" ref="emailTo" require="" maxlength="100" readonly="readOnly" />
                    <ui.InputInlinelabel name="emailCC" label="Email CC:" ref="emailCC" require="" maxlength="100" />
                    <ui.InputInlinelabel name="emailSubject" label="Email Subject:" ref="emailSubject" require="" maxlength="100" readonly="readOnly" />
                    <ui.WmsEmaileditor ref="emailEditor" />
                    <button className="btn btn-primary" onClick={this.send}>
                        Send
                    </button>
                </div>
            );
        },
    });

    ReactDOM.render(<Main />, document.getElementById('content'));

})();

(function () {
    'use strict';

    let Main = React.createClass({
        // --------------------------------------------------------------------------------
        // data
        // --------------------------------------------------------------------------------
        getRows() {
            return {
                heads: ['from_email','subject','email_create_time'],
                rows: [
                        { id: 11, from_email: "turtlemt01@gmail.com", subject: "subject 01",  is_read: 0, email_create_time: "2016-01-12"},
                        { id: 12, from_email: "turtlemt02@gmail.com", subject: "subject 02",  is_read: 0, email_create_time: "2016-01-11"},
                        { id: 13, from_email: "turtlemt03@gmail.com", subject: "subject 03",  is_read: 1, email_create_time: "2016-01-10"},
                        { id: 14, from_email: "turtlemt04@gmail.com", subject: "subject 04",  is_read: 1, email_create_time: "2016-01-10"},
                        { id: 15, from_email: "turtlemt05@gmail.com", subject: "subject 05",  is_read: 0, email_create_time: "2016-01-10"},
                ],
                totalCount: 80,
            }
        },
        
        getDefaultPage(rows) {
            return {
                page: 1,
                rowCount: rows.totalCount,
                show: 'first prev page next last',
            };
        },

        // 假設是 ajax 的過程
        getFilter() {
            this.state.table.heads = ['from_email','subject','email_create_time'],
            this.state.table.rows  = [
                { id: 11, from_email: "turtlemt01@gmail.com", subject: "subject 01",  is_read: 0, email_create_time: "2016-01-12"},
                { id: 12, from_email: "turtlemt02@gmail.com", subject: "subject 02",  is_read: 0, email_create_time: "2016-01-11"},
                { id: 15, from_email: "turtlemt05@gmail.com", subject: "subject 05",  is_read: 0, email_create_time: "2016-01-10"},
            ];
            this.state.data.rowCount = 30,
            this.setState({"table": this.state.table});
        },

        // --------------------------------------------------------------------------------
        // event
        // --------------------------------------------------------------------------------
        rowChange(row) {
            if ( row.stocked === true ) {
                row.stocked = 'TRUE';
            }
            return row;
        },
        
        handleClick(page) {
            console.log('page '+page);
        },
        
        handleLink(i)
        {
            //redirect
        },

        // --------------------------------------------------------------------------------
        getInitialState() {
            return {
                table: this.getRows(),
                data: this.getDefaultPage(this.getRows())
            };
        },

        render() {
            return (
                <div>
                    <ui.WmsEmaillist
                        {...this.state.table}
                        handleRow={this.rowChange}
                        listenLink={this.handleLink}
                    />
                    <nav>
                        <ui.Pagination {...this.state.data} listenClick={this.handleClick} />
                    </nav>

                    <button className="btn btn-primary" onClick={this.getFilter}>
                        Get unread
                    </button>
                </div>
            );
        },
    });

    ReactDOM.render(<Main />, document.getElementById('content'));

})();

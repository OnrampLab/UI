(function () {
    'use strict';

    let Main = React.createClass({
        // --------------------------------------------------------------------------------
        // data
        // --------------------------------------------------------------------------------
        getList() {
            return {
                rows: [
                    { name: "home",     icon: 'home'                    },
                    { name: "link",                                     },
                    { name: "happy"                                     },
                    { name: "google",   href: "http://google.com.tw"    },
                    { name: "yahoo",    href: "http://tw.yahoo.com"     },
                ]
            }
        },

        handleClick(row) {
            console.log(row);
        },

        // --------------------------------------------------------------------------------
        getInitialState() {
            return {
                list: this.getList()
            };
        },

        render() {
            return (
                <div className="alert-info" style={{'padding': '5px'}}>
                    <ui.Breadcrumb {...this.state.list} listenClick={this.handleClick} />
                </div>
            );
        }
    });
    ReactDOM.render(<Main />, document.getElementById('content'));

})();

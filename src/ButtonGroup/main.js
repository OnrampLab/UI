(function () {
    'use strict';

    let Main = React.createClass({
        // --------------------------------------------------------------------------------
        // data
        // --------------------------------------------------------------------------------
        getButtonGroups() {
            return {
                options: {
                    showName: true,
                    type:     null, // you can cover
                },
                rows: [
                    { type: '',         status: false,      name: "1"                                                       },
                    { type: '',         status: false,      name: "2",      display:    false                               },
                    { type: '',         status: false,      name: "3",      disabled:    true                               },
                    { type: '',         status: false,      name: "4",      visibility: false                               },
                    { type: '',         status: 'load',     name: "5"                                                       },
                    { type: '',         status: 'active',   name: "6"                                                       },
                    { type: 'primary',  status: false,      name: "7"                                                       },
                    { type: 'success',  status: false,      name: "8"                                                       },
                    { type: 'info',     status: false,      name: "9"                                                       },
                    { type: 'warning',  status: false,      name: "10"                                                      },
                    { type: 'danger',   status: false,      name: "11"                                                      },
                    { type: 'link',     status: false,      name: "link"                                                    },
                    { type: '',         status: false,      name: "google", href: "http://google.com.tw"                    },
                    { type: '',         status: false,      name: "yahoo",  href: "http://tw.yahoo.com", target: "_blank"   },
                ]
            }
        },

        handleClick(row) {
            console.log(row);
        },

        // --------------------------------------------------------------------------------
        getInitialState() {
            return {
                group: this.getButtonGroups()
            };
        },

        render() {
            return (
                <div>
                    <ui.ButtonGroup {...this.state.group} listenClick={this.handleClick.bind(this)} />
                </div>
            );
        }
    });
    ReactDOM.render(<Main />, document.getElementById('content'));

})();

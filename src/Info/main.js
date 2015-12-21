(function () {
    'use strict';

    let Main = React.createClass({
        // --------------------------------------------------------------------------------
        // data
        // --------------------------------------------------------------------------------
        getInfos() {
            return {
                rows: [
                    { icon: '',                 name: "Page",       value: "5 / 123"            },
                    { icon: 'database',         name: "Total",      value: "42,590,420"         },
                    { icon: 'user',             name: "",           value: "vivian"             },
                    { icon: 'tag',              name: "tag",        value: "#beauty"            },
                    { icon: 'tags',             name: "tags",       value: "#beauty #nice"      },
                    { icon: 'calendar',         name: "",           value: "2000-12-31"         },
                    { icon: 'check-square-o',   name: "",           value: "已交付"             },
                    { icon: 'square-o',         name: "",           value: "未交付"             },
                    { icon: 'envelope-o',       name: "未讀取郵件", value: "12"                 },
                    { icon: 'usd',              name: "price",      value: 29.9900              },
                ],
            }
        },

        handleClick(row) {
            console.log(row);
        },

        // --------------------------------------------------------------------------------
        getInitialState() {
            return {
                info: this.getInfos()
            };
        },

        render() {
            return (
                <ui.Info {...this.state.info} />
            );
        }
    });
    ReactDOM.render(<Main />, document.getElementById('content'));

})();

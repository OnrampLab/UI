<ui.Breadcrumb {...this.state.data} listenClick={this.handleClick} />

Event Params Example:

    listenClick( row )    

Component Params Example:

    {
        rows: [
            { name: "home",     icon: 'home'                    },
            { name: "link",                                     },
            { name: "happy"                                     },
            { name: "google",   href: "http://google.com.tw"    },
            { name: "yahoo",    href: "http://tw.yahoo.com"     },
        ]
    }

上色方法之一

    render() {
        return (
            <div className="alert-info" style={{'padding': '5px'}}>
                <ui.Breadcrumb {...this.state.data} />
            </div>
        );
    }

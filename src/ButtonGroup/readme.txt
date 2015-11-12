<ui.ButtonGroup {...this.state.data} listenClick={this.handleClick} />

Event Params Example:

    listenClick( row )

Component Params Example:

    {
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
        ],
        size: '',       // lg, sm, xs
        options: {
            showName: true,
            type: null, // you can cover
        }
    }

    ※ 經過測試, button 的 "btn-link" & "active" 並存時, 顯示的效果是錯誤的 (Bootstrap v3.3.5)

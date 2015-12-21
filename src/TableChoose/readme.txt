<ui.TableChoose {...this.state.data} listenCheck={this.showCheck} />

Event Params Example:

    listenCheck( row )

Component Params Example:

    {
        headKey: 'id',
        heads: ['name','price','age'],
        rows: [
            { id: 11, name: "Football",    price: 49.99,  age: 11,                      },
            { id: 12, name: "Baseball",    price: 9.99,   age: 20,                      },
            { id: 13,                      price: 99.99,  age: 13, name: "Basketball"   },
            { id: 14, name: "iPod Touch",  price: 99.99,  age: 22,                      },
            { id: 27, name: "iPhone 5",    price: 399.99, age: 5                        },
            { id: 28, name: "Nexus 7",     price: 199.99, age: 90                       },
        ],
    }

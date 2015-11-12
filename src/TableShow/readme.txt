<ui.TableShow {...this.state.data} handleRow={this.rowChange} />

Event Params Example:

    handleRow( row )

Component Params Example:

    {
        heads: ['name','price','stocked'],
        rows: [
                { id: 11, name: "Football",    price: 49.99,  stocked: true,                        },
                { id: 12, name: "Baseball",    price: 9.99,   stocked: true,                        },
                { id: 13,                      price: 29.99,  stocked: false, name: "Basketball"    },
                { id: 14, name: "iPod Touch",  price: 99.99,  stocked: true,                        },
                { id: 27, name: "iPhone 5",    price: 399.99, stocked: false                        },
                { id: 28, name: "Nexus 7",     price: 199.99, stocked: true                         },
        ],
    }

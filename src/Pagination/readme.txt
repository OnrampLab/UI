<Pagination {...this.state.data} listenClick={this.handleClick} />

Event Params Example:

    listenClick( page )

Component Params Example:

    {
        page: 1,
        rowCount: 150,
    }

    {
        page: 1,
        rowCount: 46,
        show: 'page',
    }

    {
        page: 4,
        rowCount: 160,
        show: 'first prev page next last',
    }

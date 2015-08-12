
    <div id="content"></div>

    <script type="text/jsx" src="src/Pagination/pagination.js"></script>
    <script type="text/jsx" src="src/Pagination/main.js"></script>

<?php
$output = <<<'EOD'
<Pagination data={this.state.pageLimit} handlePage={this.page} />

Example:

    {
        pageLimit: {
            page: 1,
            rowCount: 260,
        }
    }

    {
        pageLimit: {
            page: 1,
            rowCount: 30,
            prev: false,
            next: false,
        }
    }

    {
        pageLimit: {
            page: 4,
            rowCount: 160,
            first: true,
            last: true,
        }
    }
EOD;
outputCode($output);
?>


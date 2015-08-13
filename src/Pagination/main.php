
    <div id="content"></div>

    <script type="text/jsx" src="src/Pagination/pagination.jsx"></script>
    <script type="text/jsx" src="src/Pagination/main.js"></script>

<?php
$output = <<<'EOD'
<Pagination {...this.state} handlePage={this.page} />

Example:

    {
        page: 1,
        rowCount: 260,
    }

    {
        page: 1,
        rowCount: 30,
        prev: false,
        next: false,
    }

    {
        page: 4,
        rowCount: 160,
        first: true,
        last: true,
    }
EOD;
outputCode($output);
?>


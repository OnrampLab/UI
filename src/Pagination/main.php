
    <script type="text/jsx" src="src/Pagination/pagination.jsx"></script>
    <script type="text/jsx" src="src/Pagination/main.js"></script>

    <div class="row">
        <div class="col-md-10">

            <div id="content"></div>
            <?php output(); ?>

        </div>
        <div class="col-md-2">

            <div class="panel panel-default">
                <div class="panel-heading">
                    <h3 class="panel-title">相依性</h3>
                </div>
                <div class="list-group">
                    <a class="list-group-item" href="javascript:void(0);">Bootstrap</a>
                    <a class="list-group-item" href="javascript:void(0);">未使用 jQuery</a>
                </div>
            </div>

        </div>
    </div>



<?php
function output() {

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

}
?>


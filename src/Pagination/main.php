
    <div class="row">
        <div class="col-md-10">

            <div id="content"></div>
            <?php output(); ?>

        </div>
        <div class="col-md-2">

            <div class="panel panel-default">
                <div class="panel-heading">
                    <h3 class="panel-title">版本</h3>
                </div>
                <div class="list-group">
                    <a class="list-group-item" href="javascript:void(0);">0.2 beta</a>
                </div>
            </div>

            <div class="panel panel-default">
                <div class="panel-heading">
                    <h3 class="panel-title">相依性</h3>
                </div>
                <div class="list-group">
                    <a class="list-group-item" href="javascript:void(0);">Bootstrap</a>
                    <a class="list-group-item" href="javascript:void(0);">未使用 jQuery</a>
                    <a class="list-group-item" href="javascript:void(0);">未使用 utils</a>
                </div>
            </div>


        </div>
    </div>



<?php
function output() {

$output = <<<'EOD'
<Pagination {...this.state.data} listenClick={this.handleClick} />

Event Params Example:

    handleClick( page )

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
EOD;
outputCode($output);

}
?>


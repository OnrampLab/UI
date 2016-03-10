
    <div class="row">
        <div class="col-md-10">

            <div id="content"></div>
            <p>
                <?php outputCode(getReadme()); ?>
            </p>

        </div>
        <div class="col-md-2">

            <?php echo getInfoHtml('0.1', [
                ['Bootstrap'],
            ]); ?>

        </div>
    </div>

    <script type="text/babel">
        var Main = React.createClass({
            render() {
                return (
                    <div className="form-group">
                        <ui.WmsEmaillist name="WmsEmaillist" label="Customer Name" require="*" maxlength="10" onchangepath="getSomething/get"/>
                    </div>
                );
            },
        });
        ReactDOM.render(<Main />, document.getElementById('content'));
    </script>


    <div class="row">
        <div class="col-md-10">

            <div id="content"></div>
            <p>
                <?php outputCode(getReadme()); ?>
            </p>

        </div>
        <div class="col-md-2">

            <?php echo getInfoHtml('0.2 beta', [
                ['Bootstrap'],
                ['未使用 utils'],
                ['未使用 jQuery'],
            ]); ?>

        </div>
    </div>

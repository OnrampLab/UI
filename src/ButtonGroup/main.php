
    <div class="row">
        <div class="col-md-10">

            <div id="content"></div>
            <p>
                <?php outputCode(getReadme()); ?>
            </p>

        </div>
        <div class="col-md-2">

            <?php echo getInfoHtml('1.0', [
                ['Bootstrap'],
                ['Font Awesome', 'https://fortawesome.github.io/Font-Awesome/icons/'],
            ]); ?>

        </div>
    </div>

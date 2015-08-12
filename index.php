<?php
    header('Content-Type: text/html; charset=utf-8');
    define('BASE_PATH',__DIR__);
    include 'lib/helper.php';
    
    $mainPage = get('m', 'Home');
    $subPage  = get('s');
?><!DOCTYPE html>
<html>
  <head>
    <meta http-equiv='Content-type' content='text/html; charset=utf-8'>
    <title>Example</title>
    <script src="dist/jquery/jquery-2.0.3.js"></script>
    <script src="dist/bootstrap-3.3.5-dist/js/bootstrap.js"></script>
    <link rel="stylesheet" href="dist/bootstrap-3.3.5-dist/css/bootstrap.min.css" />

    <script src="dist/react-0.13.3/build/react.js"></script>
    <script src="dist/react-0.13.3/build/JSXTransformer.js"></script>
    <script src="dist/react-bootstrap/react-bootstrap.min.js"></script>
  </head>
  <body>

    <section>
        <div class="navbar navbar-inverse navbar-static-top">
            <div class="container">
                <div class="navbar-collapse collapse">
                    <ul class="nav navbar-nav">
                        <?php
                            foreach ( getMainMenu() as $name ) {
                                echo '<li><a href="?m='. $name .'">'. $name .'</a></li>';
                            }
                        ?>
                    </ul>
                </div>
            </div>
        </div>
    </section>

    <section style="margin:20px;">
        <div class="row">
            <div class="col-md-2">

                <div class="panel panel-default">
                    <div class="panel-heading">
                        <h3 class="panel-title"></h3>
                    </div>
                    <ul class="list-group">
                    <?php
                        foreach ( getSubMenu($mainPage) as $name ) {
                            echo '<li class="list-group-item"><a href="?m='. $mainPage .'&s='. $name .'">'. $name .'</a></li>';
                        }
                    ?>
                    </ul>
                </div>

            </div>
            <div class="col-md-10">

                <?php getContent($mainPage, $subPage); ?>

            </div>
        </div>


    </section>

  </body>
</html>
<?php

    function getContent( $mainPage, $subPage )
    {
        $path = null;
        //if ( $mainPage && $subPage ) {
            $path = getMenuPath($mainPage, $subPage);
        //}
        if ( $path ) {
            $file = $path.'/main.php';
            if (file_exists($file)) {
                include $file;
            }
        }
    }


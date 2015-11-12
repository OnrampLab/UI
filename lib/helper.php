<?php

    function get( $key, $defaultValue=null )
    {
        if ( isset($_POST[$key]) ) {
            return trim($_POST[$key]);
        }
        if ( isset($_GET[$key]) ) {
            return trim($_GET[$key]);
        }
        return $defaultValue;
    }

    /**
     *  get config
     *  @return array
     */
    function getConfig( $key=null )
    {
        static $config;
        if ( $config ) {
            if ($key) {
                return $config[$key];
            }
            return $config;
        }

        $configContent = file_get_contents(BASE_PATH . '/config/config.json');
        $config = json_decode($configContent, true);
        if ( !$config ) {
            return [];
        }

        return getConfig($key);
    }

    function getMainMenu()
    {
        $mainMenu = [];
        foreach ( getConfig('menu') as $item ) {
            $mainMenu[] = $item[0];
        }
        return array_unique($mainMenu);
    }

    function getSubMenu( $mainPage )
    {
        $subMenu = [];
        foreach ( getConfig('menu') as $item ) {
            if ( $item[0] == $mainPage ) {
                $subMenu[] = $item[1];
            }
        }
        return $subMenu;
    }

    /**
     *  取得第一個 main page 的 sub page
     */
    function getDefaultSubMenu( $mainPage )
    {
        foreach ( getConfig('menu') as $item ) {
            if ( $item[0] == $mainPage ) {
                return $item[1];
            }
        }
        return null;
    }

    function getMenuPath( $mainPage, $subPage, $isMatchOne=true )
    {
        $firstMatch = null;
        foreach ( getConfig('menu') as $item ) {
            if ( $item[0] == $mainPage ) {
                if ( !$firstMatch ) {
                    $firstMatch = $item[2];
                }
                if ( $item[1] == $subPage ) {
                    return $item[2];
                }
            }
        }
        if ( $isMatchOne ) {
            return $firstMatch;
        }
        return null;
    }

    function outputCode($code) {
        echo '<pre>'. htmlspecialchars($code) .'</pre>';
    }


    function getCurrentPageInfo()
    {
        $mainPage = get('m', 'Home');
        $subPage  = get('s');
        if ( !$subPage ) {
            $subPage = getDefaultSubMenu($mainPage);
        }
        return [$mainPage, $subPage];
    }


    function getReadme()
    {
        list( $mainPage, $subPage ) = getCurrentPageInfo();
        $path = getMenuPath($mainPage, $subPage);
        if ($path) {
            $file = $path.'/readme.txt';
            if (file_exists($file)) {
                return file_get_contents($file);
            }
        }
    }

    function getInfoHtml($version, $items)
    {
        $itemContent = '';
        foreach ($items as $item) {
            if (!$item) {
                continue;
            }
            $show = $item[0];
            if (isset($item[1]) && $item[1]) {
                $show = '<a href="'. $item[1] .'" target="_blank">'. $item[0] .'</a>';
            }

            $itemContent .= '<div class="list-group-item">'. $show .'</div>';
        }

        echo <<<"EOD"
            <div class="panel panel-default">
                <div class="panel-heading">
                    <h3 class="panel-title">版本</h3>
                </div>
                <div class="list-group">
                    <div class="list-group-item">{$version}</div>
                </div>
            </div>

            <div class="panel panel-default">
                <div class="panel-heading">
                    <h3 class="panel-title">相依性</h3>
                </div>
                <div class="list-group">
                    {$itemContent}
                </div>
            </div>
EOD;

    }


<?php 
$hasQ = isset($_GET['q']) && $_GET['q'] ? true : false;
$hasTpl = isset($_GET['tpl']) && $_GET['tpl'] ? true : false;
if ($hasQ && $hasTpl) {
    $html = $_GET['q'];
    $tpl = $_GET['tpl'];
}
else {
    echo 'Please input "?q=module-name&tpl=template-name"';
    exit;
}
?>
<!DOCTYPE html>
<!--[if lt IE 7]> <html class="no-js lte9 lte8 lte7 ie6"> <![endif]-->
<!--[if IE 7]>    <html class="no-js lte9 lte8 lte7 ie7"> <![endif]-->
<!--[if IE 8]>    <html class="no-js lte9 lte8 ie8"> <![endif]-->
<!--[if IE 9]>    <html class="no-js lte9 ie9"> <![endif]-->
<!--[if (gt IE 9)|!(IE)]><!--><html class="no-js"><!--<![endif]-->
<head>
<meta charset="utf-8">
<!-- <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1"> -->
<meta name="viewport" content="width=device-width">
<meta name="description" content="">
<meta name="author" content="N.Elf-mousE">
<title>Hello HTML</title>
<!-- <link rel="shortcut icon" href="favicon.ico"> -->
<link rel="stylesheet" href="css/normalize.css">
<link rel="stylesheet" href="css/main.css">
<?php 
$filename = 'css/' . $html . '/' . $tpl . '.css';
if (file_exists($filename)) {
    $output = '<link rel="stylesheet" href="'.$filename.'">';
    if ($tpl == 'adminmenu') {
        $filename = 'css/' . $html . '/' . $tpl . '-color.css';
        $output .= '<link rel="stylesheet" href="'.$filename.'">';
    }
    echo $output;
}
?>
<!--[if lt IE 9]>
<link rel="stylesheet" href="css/ie.css">
<script src="http://html5shiv.googlecode.com/svn/trunk/html5.js"></script>
<![endif]-->
<!--[if lt IE 8]>
<?php
if ($tpl == 'adminmenu') {
    $filename = 'css/' . $html . '/' . $tpl . '-ie.css';
    $output = '<link rel="stylesheet" href="'.$filename.'">';
    echo $output;
}
?>
<![endif]-->
<script src="//ajax.googleapis.com/ajax/libs/jquery/1.8.3/jquery.min.js"></script>
<script>!window.jQuery && document.write('<script src="js/jquery/jquery-1.8.3.min.js"><\/script>');</script>
</head>
<body>
<!--[if lt IE 7]><p class="chromeframe">You are using an <strong>outdated</strong> browser. Please <a href="http://browsehappy.com/">upgrade your browser</a> or <a href="http://www.google.com/chromeframe/?redirect=true">activate Google Chrome Frame</a> to improve your experience.</p><![endif]-->
<div class="container" id="container">
<?php 
$filename = 'html/' . $html . '/' . $tpl . '.php';
if (file_exists($filename)) {
    include $filename;
}
else {
    echo 'Invalid template :(';
}
?>
</div>
<?php
$output = '<script src="js/ie.js"></script>';
$filename = 'js/' . $html . '/' . $tpl . '.js';
if (file_exists($filename)) {
    $output .= '<script src="'.$filename.'"></script>';
}
echo $output;
?>
</body>
</html>
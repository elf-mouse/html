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
<html>
<head>
<meta charset="utf-8">
<!-- <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1"> -->
<meta name="viewport" content="width=device-width">
<meta name="description" content="">
<meta name="author" content="N.Elf-mousE">
<title>Hello CSS</title>
<!-- <link rel="shortcut icon" href="favicon.ico"> -->
<link rel="stylesheet" href="css/normalize.css">
<link rel="stylesheet" href="css/main.css">
<?php 
$filename = 'css/' . $html . '/' . $tpl . '.css';
if (file_exists($filename)) {
    $output = '<link rel="stylesheet" href="'.$filename.'">';
    echo $output;
}
?>
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
</body>
</html>
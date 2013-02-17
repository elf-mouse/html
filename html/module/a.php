<?php
$url = 'http://www.google.com.hk/#hl=en&tbo=d&site=&source=hp&q=hello+world&oq=hello+world&gs_l=hp.3..0l10.1568.3650.0.3873.11.9.0.2.2.0.116.845.6j3.9.0.les%3B..0.0...1c.1.ivlkX4jnmAg&bav=on.2,or.r_gc.r_pw.&bvm=bv.1357316858,d.aGc&fp=fcc2c1e86ecea65a&biw=1678&bih=937';
$url = htmlspecialchars($url, ENT_QUOTES, 'UTF-8');
?>
<a id="link" href="<?php echo $url; ?>" target="_blank">Hello World</a>
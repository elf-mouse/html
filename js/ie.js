// check IE
var isIE, ltIE9;
(function(){
	var version, browserVersion, documentMode;
	if (version = /MSIE (\d+\.\d+)/.exec(navigator.userAgent)) {
		isIE = true;
		browserVersion = parseFloat(version[1]);
		documentMode = document.documentMode || 6;
		if (browserVersion < 9 || documentMode < 9) {
			ltIE9 = true;
		}
	}
})();
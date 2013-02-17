/**
 * Count Down
 * @author Elf-mousE
 */
(function($) {

	var $this;
	var defaults = {
		className : 'countdown',
		dataClassName : 'time',
		d : 'day',
		h : 'hour',
		m : 'minute',
		s : 'second',
		ms : 'ms'
	};
	var countdownGo = function(obj, time) {
	    var t = time;
	    if (t >= 0) {
	    	var d = parseInt(t / 86400);
	    	var h = parseInt(t / 3600) - d * 24;
	    	var m = parseInt(t / 60) - parseInt(t / 3600) * 60;
	    	var s = parseInt(t / 1) - parseInt(t / 60) * 60;
	        obj.find('.' + defaults.d).text(d);
	        obj.find('.' + defaults.h).text(h);
	        obj.find('.' + defaults.m).text(m);
	        obj.find('.' + defaults.s).text(s);
	        t -= 1;
	        obj.attr('data-' + defaults.dataClassName, t);
	        setTimeout(function() {
	        	countdownGo(obj, t);
	        }, 1E3);
	    } else {
	    	obj.find('.' + defaults.ms).remove();
	    }
	};

	$.fn.countdown = function() {};

	$.countdown = function(opts) {
		if (typeof opts !== 'undefined' && typeof opts === 'object') {
			$.extend(defaults, opts);
		}
		$('.' + defaults.className).each(function() {
			$this = $(this);
			var time = parseInt($this.attr('data-' + defaults.dataClassName), 10);
			countdownGo($this, time);
	    });
	};

})(jQuery);

// demo
$(function() {
	$.countdown();
});
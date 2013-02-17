/**
 * Page Map from tmall (unfinished)
 * @author Elf-mousE
 */
(function($) {

	var $mapMin, $mapMax, $close, $mapBtn, $currentBtn;
	var defaults = {
		minId : '.map_small',
		maxId : '.map_box',
		closeId : '.btn_Close',
		btnId : '.map_nav_btn',
		speed : 500,
		hoverClassName : 'map_nav_hover',
		activeClassName1 : 'map_now',
		activeClassName2 : 'map_now_ani',
		timer : null
	};
	
	function changeState(which) {
		which = (which == 1) ? 2 : 1;
		if (which == 2) {
			$currentBtn.addClass(defaults.activeClassName2);
		} else {
			$currentBtn.removeClass(defaults.activeClassName2);
		}
		defaults.timer = setTimeout(function() {
			changeState(which);
		}, defaults.speed);
	}
	
	function init() {
		$mapMin = $(defaults.minId);
		$mapMax = $(defaults.maxId);
		$close = $(defaults.closeId);
		$mapBtn = $(defaults.btnId);
		$currentBtn = $mapMax.find('a').eq(1);
		$currentBtn.removeClass(defaults.hoverClassName).addClass(defaults.activeClassName1);
		changeState(1);
		$close.click(function() {
			$mapMax.fadeOut(defaults.speed, function() {
				$mapMin.fadeIn(defaults.speed);
			});
		});
		$mapMin.click(function() {
			$(this).fadeOut(defaults.speed, function() {
				$mapMax.fadeIn(defaults.speed);
			});
		});
		$mapBtn.click(function() {
			$currentBtn.removeClass(defaults.activeClassName1 + ' ' + defaults.activeClassName2).addClass(defaults.hoverClassName);
			$currentBtn = $(this);
			clearTimeout(defaults.timer);
			$currentBtn.removeClass(defaults.hoverClassName).addClass(defaults.activeClassName1);
			changeState(1);
		});
	}
	
	$.fn.pagemap = function() {};

	$.pagemap = function(opts) {
		if (typeof opts !== 'undefined' && typeof opts === 'object') {
			$.extend(defaults, opts);
		}
		init();
	};

})(jQuery);

//demo
$(function() {
	$.pagemap();
});
/**
 * Switch table row background
 * @author Elf-mousE
 */
(function($) {

	var defaults = {
		className : '.shift',
		space : 'space',
		hover : 'hover'
	};

	$.switchTableRowBg = $.fn.switchTableRowBg = function(opts) {
		if (typeof opts !== 'undefined' && typeof opts === 'object') {
			$.extend(defaults, opts);
		}
		$(defaults.className + ' tr').hover(function() {
			if (!$(this).hasClass(defaults.space)) {
				$(this).addClass(defaults.hover);
			}
		}, function() {
			if (!$(this).hasClass(defaults.space)) {
				$(this).removeClass(defaults.hover);
			}
		});
	};

})(jQuery);

// demo
$(function() {
	$.switchTableRowBg();
});
/**
 * Switch Tabs
 * @author Elf-mousE
 */
(function($) {

	var defaults = {
		className : '.tabs',
		itemSelector : 'li',
		active : 'active',
		hidden : 'hidden'
	};

	$.fn.switchTabs = function() {};

	$.switchTabs = function(opts) {
		if (typeof opts !== 'undefined' && typeof opts === 'object') {
			$.extend(defaults, opts);
		}
		$(defaults.className + ' ' + defaults.itemSelector).hover(function() {
			var $self = $(this);
			if (!$self.hasClass(defaults.active)) {
				$(defaults.className + ' ' + defaults.itemSelector).each(function() {
					var $subSelf = $(this);
					if ($subSelf.hasClass(defaults.active)) {
						$subSelf.removeClass(defaults.active).find('span').removeClass(defaults.active).addClass(defaults.hidden);
						$subSelf.find('a').removeClass(defaults.hidden);
					}
				});
				$self.addClass(defaults.active).find('a').addClass(defaults.hidden);
				$self.find('span').removeClass(defaults.hidden).addClass(defaults.active);
			}
		});
	};

})(jQuery);

// demo
$(function() {
	$.switchTabs();
});
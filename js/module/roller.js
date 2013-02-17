/**
 * Roller
 * @author Elf-mousE
 */
(function($) {

	var $this, $last, timer, length;
	var top = 0;
	var defaults = {
		container : '.roll-outer',
		className : '.roll',
		itemClassName : '.roll-item',
		second : 3000,
		position : 'bottom', // bottom or top
		padding: 0
	};
	var checkPosition = function(opts) {
		if (typeof opts !== 'undefined' && typeof opts === 'object') {
			$.extend(defaults, opts);
		}
	};
	var roll = {
		top : function(obj) {
			$last = obj.find(defaults.itemClassName).eq(length);
			$last.prependTo(obj);
			obj.css('top', '-' + ($last.height() + defaults.padding) + 'px');
		},
		bottom : function(obj) {
			$last = obj.find(defaults.itemClassName).eq(0);
			$last.appendTo(obj);
			top = '-' + (obj.find(defaults.itemClassName).eq(0).height() + defaults.padding);
			obj.css('top', 0);
		}
	};
	var moveAction = function() {
		$(defaults.className).animate({
			top : top
		}, 1000, function() {
			if (defaults.position != 'top') {
				roll.top($(this));
			}
			else {
				roll.bottom($(this));
			}
		});
	};

	$.fn.roller = function() {};

	$.roller = function(opts) {
		checkPosition(opts);
		$this = $(defaults.className);
		length = $this.find(defaults.itemClassName).length - 1;
		if (defaults.position != 'top') {
			roll.top($this);
		}
		else {
			top = '-' + ($this.find(defaults.itemClassName).eq(0).height() + defaults.padding);
		}
		timer = setInterval(function() {
			moveAction();
		}, defaults.second);
		$(defaults.container).hover(function() {
			clearInterval(timer);
		}, function() {
			timer = setInterval(function() {
				moveAction();
			}, defaults.second);
		});
	};

})(jQuery);

// demo
$(function() {
	$.roller({
		//position : 'top',
		padding : 10
	});
});
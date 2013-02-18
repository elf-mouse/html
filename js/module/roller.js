/**
 * Roller
 * @author Elf-mousE
 * 2013.02.18 updated
 */
(function($) {

	var $this, $last, defaults = {
		container : '.roll-outer',
		className : '.roll',
		itemClassName : '.roll-item',
		second : 3000,
		position : 'bottom', // bottom or top
		padding : 0
	}, checkPosition = function(opts) {
		if (typeof opts !== 'undefined' && typeof opts === 'object') {
			$.extend(defaults, opts);
		}
	}, roll = {
		toBottom : function(obj) {
			$last = obj.find(defaults.itemClassName).eq(obj.data('length'));
			$last.prependTo(obj);
			obj.css('top', '-' + ($last.height() + defaults.padding) + 'px');
		},
		toTop : function(obj) {
			$last = obj.find(defaults.itemClassName).eq(0);
			$last.appendTo(obj);
			obj.data('top', '-' + (obj.find(defaults.itemClassName).eq(0).height() + defaults.padding));
			obj.css('top', 0);
		}
	}, moveAction = function(obj) {
		obj.animate({
			top : obj.data('top')
		}, 1000, function() {
			if (defaults.position != 'top') {
				roll.toBottom(obj);
			} else {
				roll.toTop(obj);
			}
		});
	}, rollAction = function(obj, container) {
		obj.data('timer', setInterval(function() {
			moveAction(obj);
		}, defaults.second));
	}, roller = function(obj, container) {
		if (defaults.position != 'top') {
			obj.data('length', obj.find(defaults.itemClassName).length - 1);
			obj.data('top', 0);
			roll.toBottom(obj);
		} else {
			obj.data('top', '-' + (obj.find(defaults.itemClassName).eq(0).height() + defaults.padding));
		}
		rollAction(obj, container);
		$(container).hover(function() {
			clearInterval(obj.data('timer'));
		}, function() {
			rollAction(obj, container);
		});
	};

	$.roller = $.fn.roller = function(opts) {
		checkPosition(opts);
		if (typeof defaults.container == 'string') {
			$this = $(defaults.container + ' ' + defaults.className);
			roller($this, defaults.container);
		} else {
			$this = {};
			for ( var i = 0, len = defaults.container.length; i < len; i++) {
				$this[i] = $(defaults.container[i] + ' ' + defaults.className);
				roller($this[i], defaults.container[i]);
			}
		}
	};

})(jQuery);

// demo
$(function() {
	$.roller({
		//container : [ '.a', '.b' ],
		//position : 'top',
		padding : 10
	});
});
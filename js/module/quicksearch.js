/**
 * Quick Search (unfinished)
 * @author Elf-mousE
 */
(function($) {
	
	var $this, $input, $tips, $suggest;
	var defaults = {
		searchId : '#J_QuickSearch',
		closeId : '.quickSearch-close',
		inputId : '.quickSearch-input',
		tipsId : '.j_SearchTips',
		suggestId : '.ks-suggest-container',
		selectedClassName : 'ks-selected',
		speed : 300,
		placeholder : '请输入关键字'
	};
	
	var suggestAction = {
		hide : function() {
			$suggest.css('visibility', 'hidden');
			$tips.animate({
				height : 0
			}, defaults.speed);
		},
		show : function() {
			$tips.animate({
				height : $suggest.height()
			}, defaults.speed, function() {
				$suggest.css('visibility', '').find('li').hover(function() {
					$(this).addClass(defaults.selectedClassName);
				}, function() {
					$(this).removeClass(defaults.selectedClassName);
				});
			});
		},
		clear : function() {
			$suggest.find('.ks-suggest-content, .ks-suggest-footer').html('');
			suggestAction.hide();
		}
	};
	
	function animateBgColor(obj, repeat) {
		obj.animate({
			backgroundColor : '#FDBD78'
		}, defaults.speed, function() {
			$(this).animate({
				backgroundColor : '#FFFFFF'
			}, defaults.speed, function() {
				if (repeat) {
					animateBgColor($(this));
				}
			});
		});
	}
	
	var keyAction = {
		shift : function() {
			$this.show().animate({
				top : 200,
				opacity : 1
			}, defaults.speed);
			$(document).on('keydown', defaults.inputId, function(e) {
				var keyword = $(this).val();
				if (e.keyCode == 13) {
					$(this).attr('placeholder', defaults.placeholder);
					if (keyword == '') {
						animateBgColor($(this), true);
					}
					return false;
				}
			}).on('keyup', defaults.inputId, function() {
				// some getJSON code
				var keyword = $(this).val();
				if (keyword.length == 0) {
					suggestAction.hide();
				} else {
					suggestAction.show();
				}
			});
		},
		esc : function() {
			suggestAction.clear();
			$this.animate({
				top : 100,
				opacity : 0
			}, defaults.speed, function() {
				$this.hide();
				$input.val('');
			});
		},
		upArrow : function() {
			var index = $suggest.find('li').length - 1;
			$suggest.find('li').each(function(i) {
				if ($(this).hasClass(defaults.selectedClassName)) {
					$(this).removeClass(defaults.selectedClassName);
					index = i - 1;
				}
			});
			$suggest.find('li').eq(index).addClass(defaults.selectedClassName);
		},
		downArrow : function() {
			var index = 0;
			$suggest.find('li').each(function(i) {
				if ($(this).hasClass(defaults.selectedClassName)) {
					$(this).removeClass(defaults.selectedClassName);
					index = i + 1;
				}
			});
			if (index >= $suggest.find('li').length) {
				index = 0;
			}
			$suggest.find('li').eq(index).addClass(defaults.selectedClassName);
		},
		enter : function() {
			$suggest.find('li').each(function(i) {
				if ($(this).hasClass(defaults.selectedClassName)) {
					$input.val($(this).attr('data-key'));
				}
			});
			// submit
		}
	};
	
	var quickSearch = function() {
		$suggest.css('visibility', 'hidden');
		$(defaults.closeId).click(function() {
			keyAction.esc();
			return false;
		});
		$(document).keyup(function(e) {
			switch (e.keyCode) {
			// shift + ?
			case 191:
				keyAction.shift();
				break;
			// ESC
			case 27:
				keyAction.esc();
				break;
			// ↑
			case 38:
				keyAction.upArrow();
				break;
			// ↓
			case 40:
				keyAction.downArrow();
				break;
			// Enter
			case 13:
				keyAction.enter();
				break;
			default:
				break;
			}
		});
	};

	$.quicksearch = $.fn.quicksearch = function(opts) {
		if (typeof opts !== 'undefined' && typeof opts === 'object') {
			$.extend(defaults, opts);
		}
		$this = $(defaults.searchId);
		$input = $(defaults.inputId);
		$tips = $(defaults.tipsId);
		$suggest = $(defaults.suggestId);
		quickSearch();
	};

})(jQuery);

var test_data = {
	"result" : [ [ "安踏", "141346" ], [ "阿迪达斯 男鞋", "11426" ],
			[ "艾莱依羽绒服", "1194" ], [ "adidas", "458478" ], [ "奥康", "10259" ],
			[ "艾莱依", "2023" ], [ "艾格", "12244" ], [ "艾莱依 官方 旗舰", "108" ],
			[ "安踏 男鞋", "16321" ], [ "艾莱依羽绒服女款", "101" ] ],
	"cat" : [ [ "运动鞋", "50020909", "安踏" ],
			[ "运动服/运动包/运动配件", "50020894", "安踏" ], [ "篮球运动", "50536011", "安踏" ],
			[ "流行男鞋", "50026637", "安踏" ], [ "童装/童鞋/亲子装", "50023647", "安踏" ] ]
};

//demo
$(function() {
	$.quicksearch();
});
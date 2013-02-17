/**
 * Custom Input Function
 * @author Elf-mousE
 */
(function($) {

	var $this;
	var defaults = {
		keyword : {
			id : 'input-keyword',
			focusColor : '#555',
			blurColor : '#999',
			placeholder : ''
		},
		number : {
			id : 'input-number'
		},
		counter : {
			id : 'input-counter',
			txtId : 'input-content',
			btnId : 'input-content-btn',
			num : 140,
			errorClassName : 'red',
			disabledClassName : 'disabled',
			word : {
				cn : {
					start : '还可以输入',
					stop : '已经超过',
					unit : '字'
				}
			}
		}
	};
	var extendParams = function(opts) {
		if (typeof opts !== 'undefined' && typeof opts === 'object') {
			$.extend(true, defaults, opts);
		}
	};
	
	var keyCodes = {
		number : [ 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105 ],
		dot : [ 190, 110 ],
		arrow : [ 37, 38, 39, 40 ]
	};
	
	function inKeyCode(type, currentKey) {
		var keyCodeArray = keyCodes[type];
		var result = false;
		for ( var i = 0, len = keyCodeArray.length; i < len; i++) {
			if (currentKey == keyCodeArray[i]) {
				result = true;
				break;
			}
		}
		return result;
	}
	
	function getNumber(num, len) {
		var str = '';
		for ( var i = 0; i < len; i++) {
			var char = num.charAt(i);
			if (!isNaN(char)) {
				str += char;
			}
		}
		return str;
	}

	$.input = $.fn.input = function() {
		return $.input;
	};

	$.input.keyword = function(opts) {
		extendParams(opts);
		if (ltIE9) {
			defaults.keyword.placeholder = $('#' + defaults.keyword.id).attr('placeholder');
			$('#' + defaults.keyword.id).val(defaults.keyword.placeholder);
			$('#' + defaults.keyword.id).css('color', defaults.keyword.blurColor).focus(function() {
				$this = $(this);
				$this.css('color', defaults.keyword.focusColor);
			}).blur(function() {
				$this.css('color', defaults.keyword.blurColor);
				if ($this.val() == '') {
					$this.val(defaults.keyword.placeholder);
				}
			}).click(function() {
				if ($this.val() == defaults.keyword.placeholder) {
					$this.val('');
				}
			});
		}
		else {
			$('#' + defaults.keyword.id).css('color', defaults.keyword.blurColor).focus(function() {
				$this = $(this);
				$this.css('color', defaults.keyword.focusColor);
			}).blur(function() {
				$this.css('color', defaults.keyword.blurColor);
			});
		}
	};
	
	$.input.number = function(opts) {
		extendParams(opts);
		$('#' + defaults.number.id).keyup(function(e) {
			$this = $(this);
			var canInput = true;
			var val = $this.val();
			canInput = !inKeyCode('arrow', e.keyCode);
			if (canInput) {
				var vals = val.split('.');
				var numberPart = vals[0];
				var decimalPart = vals[1];
				var str = getNumber(numberPart, numberPart.length);
				if (typeof decimalPart !== 'undefined') {
					var decimalPartLen = decimalPart.length > 2 ? 2 : decimalPart.length;
					if (str == '') {
						str = '0';
					}
					str += '.';
					str += getNumber(decimalPart, decimalPartLen);
				}
				$this.val(str);
			}
		});
	};
	
	$.input.counter = function(opts) {
		extendParams(opts);
		
		$counter = $('#' + defaults.counter.id);
		$('<span/>').html(defaults.counter.word.cn.start).appendTo($counter);
		$('<em/>').html(defaults.counter.num).appendTo($counter);
		$counter.append(defaults.counter.word.cn.unit);
		
		$button = $('#' + defaults.counter.btnId);
		
		$('#' + defaults.counter.txtId).keyup(function() {
			$this = $(this);
			var val = $this.val();
			var used = val.length;
			var remain = defaults.counter.num - used;
			var word;
			if (used > defaults.counter.num) {
				word = defaults.counter.word.cn.stop;
				$counter.find('em').html(remain).addClass(defaults.counter.errorClassName);
				$button.addClass(defaults.counter.disabledClassName);
			}
			else {
				word = defaults.counter.word.cn.start;
				$counter.find('em').html(remain).removeClass();
				$button.removeClass();
			}
			$counter.find('span').html(word);
		});
	};

})(jQuery);

//demo
$(function() {
	$.input.keyword();
	$.input.number();
	$.input.counter();
});
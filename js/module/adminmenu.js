/**
 * Admin Menu from WordPress (ie6 unfinished)
 * @author Elf-mousE
 */
$(document).ready( function() {
	var lastClicked = false, checks, first, last, checked, menu = $('#adminmenu'),
		pageInput = $('input.current-page'), currentPage = pageInput.val(), refresh;

	// admin menu
	refresh = function(i, el){ // force the browser to refresh the tabbing index
		var node = $(el), tab = node.attr('tabindex');
		if ( tab )
			node.attr('tabindex', '0').attr('tabindex', tab);
	};

	$('#collapse-menu', menu).click(function(){
		
		var body = $(document.body);

		// reset any compensation for submenus near the bottom of the screen
		$('#adminmenu div.wp-submenu').css('margin-top', '');

		if ( body.hasClass('folded') ) {
			body.removeClass('folded');
			setUserSetting('mfold', 'o');
		} else {
			body.addClass('folded');
			setUserSetting('mfold', 'f');
		}
		return false;
	});

	$('li.wp-has-submenu', menu).hoverIntent({
		over: function(e){
			var b, h, o, f, m = $(this).find('.wp-submenu'), menutop, wintop, maxtop;

			if ( m.is(':visible') )
				return;

			menutop = $(this).offset().top;
			wintop = $(window).scrollTop();
			maxtop = menutop - wintop - 30; // max = make the top of the sub almost touch admin bar

			b = menutop + m.height() + 1; // Bottom offset of the menu
			h = $('#wpwrap').height(); // Height of the entire page
			o = 60 + b - h;
			f = $(window).height() + wintop - 15; // The fold

			if ( f < (b - o) )
				o = b - f;

			if ( o > maxtop )
				o = maxtop;
			
			/* fix ie6 */
			//alert(o);
			
			if ( o > 1 )
				m.css('margin-top', '-'+o+'px');
			else
				m.css('margin-top', '');

			menu.find('.wp-submenu').removeClass('sub-open');
			m.addClass('sub-open');
		},
		out: function(){
			$(this).find('.wp-submenu').removeClass('sub-open').css('margin-top', '');
		},
		timeout: 200,
		sensitivity: 7,
		interval: 90
	});

	// Tab to select, Enter to open sub, Esc to close sub and focus the top menu
	/*$('li.wp-has-submenu > a.wp-not-current-submenu', menu).bind('keydown.adminmenu', function(e){
		if ( e.which != 13 )
			return;

		var target = $(e.target);

		e.stopPropagation();
		e.preventDefault();

		menu.find('.wp-submenu').removeClass('sub-open');
		target.siblings('.wp-submenu').toggleClass('sub-open').find('a[role="menuitem"]').each(refresh);
	}).each(refresh);

	$('a[role="menuitem"]', menu).bind('keydown.adminmenu', function(e){
		if ( e.which != 27 )
			return;

		var target = $(e.target);

		e.stopPropagation();
		e.preventDefault();

		target.add( target.siblings() ).closest('.sub-open').removeClass('sub-open').siblings('a.wp-not-current-submenu').focus();
	});*/

});
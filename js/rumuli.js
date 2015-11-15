jQuery(document).ready(function ($) {

	"use strict";

  menuClicks();
	smoothScroll();

}); // end of document.ready function

function menuClicks() {

  $('.main-nav ul li a').on( "click", function() {
    $('.main-nav ul li a').removeClass('activeMenuItem');
    $(this).addClass('activeMenuItem');
  });

}

function smoothScroll() {
	"use strict";

	$('a[href*=#]:not([href=#])').click(function () {
		if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && location.hostname === this.hostname) {
			var target = $(this.hash);
			target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
			if (target.length) {
				$('html,body').animate({
					scrollTop: target.offset().top
				}, 1000);
				return false;
			}
		}
	});
}

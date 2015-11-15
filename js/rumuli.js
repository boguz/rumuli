jQuery(document).ready(function ($) {

	"use strict";

  menuClicks();

}); // end of document.ready function

function menuClicks() {

  $('.main-nav ul li').on( "click", function() {
    $('.main-nav ul li').removeClass('activeMenuItem');
    $(this).addClass('activeMenuItem');
  });

}

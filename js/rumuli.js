/*
==========================================
  DOCUMENT READY FUNCTION
==========================================
*/
jQuery(document).ready(function($) {

  "use strict";

  menuClicks();
  mobileMenu();
  smoothScroll();

}); // end of document.ready function

/*
==========================================
  FUNCTIONS
==========================================
*/



/**************** MENU CLICKS ***********************/
function menuClicks() {
  "use strict";

  $('.main-nav ul li a').on("click", function() {
    $('.main-nav ul li a').removeClass('activeMenuItem');
    $(this).addClass('activeMenuItem');
  });

}


/**************** MOBILE MENU ***********************/

function mobileMenu() {
  "use strict";

  $('.menu-button').on("click", function() {
    $(this).toggleClass('clicked');
    $('.mobile-nav').toggleClass('open-mobile-menu');
  });

  $('.mobile-nav ul li a').on("click", function() {
    $('.mobile-nav ul li a').removeClass('activeMenuItem');
    $(this).addClass('activeMenuItem');
    $('.menu-button').removeClass('clicked');
    $('.mobile-nav').removeClass('open-mobile-menu');
  });

}


/**************** SMOOTH SCROLL ***********************/

function smoothScroll() {
  "use strict";

  $('a[href*=#]:not([href=#])').click(function() {
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

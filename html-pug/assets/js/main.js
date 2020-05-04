
$('.parallax-window').parallax({imageSrc: './assets/img/lavender-big-test.jpg',speed: 0.0,position: 'center -50px',});
$('.parallax-window2').parallax({imageSrc: './assets/img/yellow-big-test.jpg',speed: 0.0,position: 'center -50px',});


// Check if in viewport from bottom : Thelma pogi!
$.fn.isInViewport = function() {
  	var elementTop 		   = $(this).offset().top;
  		  elementBottom 	 = elementTop + $(this).outerHeight();
  		  viewportTop 	   = $(window).scrollTop();
  		  viewportBottom 	 = viewportTop + $(window).height() / 1;
  		  thisHalfHeight 	 = $(this).outerHeight();
  	// return (elementBottom + 0) > viewportTop && (elementBottom - 0) < viewportBottom;
    return elementBottom > viewportTop && elementTop < viewportBottom;
};
// check visible height in viewport
;(function($, win) {
  $.fn.visibleInViewport = function(cb) {
     return this.each(function(i,el) {
       function visPx(){
         var elH = $(el).outerHeight(),
             H = $(win).height(),
             r = el.getBoundingClientRect(), t=r.top, b=r.bottom;
         return cb.call(el, Math.max(0, t>0? Math.min(elH, H-t) : Math.min(b, H)));  
       }
       visPx();
       $(win).on("resize scroll", visPx);
     });
  };
}(jQuery, window));


// smooth scrolling to target element
function scrollTo() {

    var $root = $('html, body');

    $('a[href^="#"]').click(function (e) {
        e.preventDefault();
        console.log('in')

        $root.animate({
            scrollTop: $( $.attr(this, 'href') ).offset().top
        }, 500);

        return false;
    });
}

function dropdownMenu() {
  $('.main_nav__menu').hide();
  $('.main_nav__icon').on('click', function(){
      $('.main_nav__menu').slideToggle("normal");
      $(this).toggleClass('open');
      $('.sp_nav').toggleClass('color-active');
  })

  const $menu = $('.main_nav');

  $(document).mouseup(function (e) {
    if (!$menu.is(e.target) // if the target of the click isn't the container...
    && $menu.has(e.target).length === 0) // ... nor a descendant of the container
    {
      if ($('.main_nav__icon').hasClass('open')) {
        $('.main_nav__icon').removeClass('open');
        $('.main_nav__menu').slideToggle("slow");
      }
    }
  });
}

var fixmeTop = 0;
function stickyBtnBar() {

  var currentScroll = $(window).scrollTop(); // get current position

    if (currentScroll >= fixmeTop) {
        $('.main_nav').addClass('fixed');
    } else if (currentScroll < fixmeTop) {
        $('.main_nav').removeClass('fixed');
    }
}

function fadeInUpAnimation() {
  $('.fadeInUp').each(function() {
    if ($(this).isInViewport()) {
      $(this).addClass('animOn')
    }
  })
} 


$(function(){
	scrollTo();
  dropdownMenu();
  //setUpCharacters();
})

$(window).on('load resize', function() {
  if ($(window).width() < 768) {
    $('.kv .kv__container .kv__img-sp .kv__img-sp-item1 ').addClass("sp-active").delay(2000).queue(function(next){
        $('.kv .kv__container .kv__img-sp .kv__img-sp-item1 ').removeClass("sp-active");
        $('.kv .kv__container .kv__img-sp .kv__img-sp-item2 ').addClass("sp-active");
        next();
      });
    if ('.kv .kv__container .kv__img-sp .kv__img-sp-item2 .sp-active') {
      $('.kv .kv__container .kv__img-sp .kv__img-sp-item2 ').removeClass("sp-active");
    }
  } else {
    $('.kv .kv__container .kv__img-item1').addClass("active").delay(1800).queue(function(next){
        $('.kv .kv__container .kv__img-item2').addClass("active").delay(1800).queue(function(next){
            $('.kv .kv__container .kv__text-logo').addClass("active");
            next();
        });
        next();
    });
    $('.kv .kv__container .kv__img-sp .kv__img-sp-item1 ').removeClass("sp-active");
    $('.kv .kv__container .kv__img-sp .kv__img-sp-item2 ').removeClass("sp-active");
  }
  fixmeTop = $('main').offset().top;
});

$(window).on('load', function(){
  $('.fadeInUp p span').addClass('active');

 
}); // load

$(window).on('scroll', function() {
  stickyBtnBar();
  fadeInUpAnimation();
})

$(window).resize(function () {
});

$( window ).on( "orientationchange", function( event ) {
  fixmeTop = $('main').offset().top;
});
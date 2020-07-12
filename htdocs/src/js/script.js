// const smoothScroll = ()=> {
//   $('a[href^="#"]').on('click', e => {
//     const speed = 600;
//     const href = $(this).attr('href');
//     const target = $(href == '#' || href == '' ? 'html' : href);
//     const position = target.offset().top;
//     $('body, html').delay(200).animate({scrollTop: position}, speed, 'swing');
//     return false;
//   });
// };


// VIEWPORT MANIPULATION
const viewport = ()=> {
  let _ua = (function (u) {
    return {
      Tablet: (u.indexOf("windows") != -1 && u.indexOf("touch") != -1 && u.indexOf("tablet pc") == -1) ||
        u.indexOf("ipad") != -1 ||
        (u.indexOf("android") != -1 && u.indexOf("mobile") == -1) ||
        (u.indexOf("firefox") != -1 && u.indexOf("tablet") != -1) ||
        u.indexOf("kindle") != -1 ||
        u.indexOf("silk") != -1 ||
        u.indexOf("playbook") != -1,
      Mobile: (u.indexOf("windows") != -1 && u.indexOf("phone") != -1) ||
        u.indexOf("iphone") != -1 ||
        u.indexOf("ipod") != -1 ||
        (u.indexOf("android") != -1 && u.indexOf("mobile") != -1) ||
        (u.indexOf("firefox") != -1 && u.indexOf("mobile") != -1) ||
        u.indexOf("blackberry") != -1
    }
  })(window.navigator.userAgent.toLowerCase());
  if (_ua.Tablet) {
    $("meta[name='viewport']").attr('content', 'width=767');
  }else {
    $("meta[name='viewport']").attr('content', 'width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=2.0,user-scalable=yes');
  }
}

// GET URL PARAMETER VALUE
const getSearchParams = (k)=> {
  let p={};
  location.search.replace(/[?&]+([^=&]+)=([^&]*)/gi,function(s,k,v){p[k]=v})
  return k?p[k]:p;

  // Usage: 
  // let x = getSearchParams('parameter_name') - returns specific param value
  // let x = getSearchParams(); - returns an array
}

// SMOOTH SCROLL
const smoothScroll = ()=> {
  $("a.js-scroll").on('click', function(e) {
    if (this.hash !== "") {
      e.preventDefault();
      $('html, body').animate({ scrollTop: $(this.hash).offset().top }, 800, 'swing', ()=> { window.location.hash = ''; });
    }
  });
};

// CHECK ELEMENT IN-VIEW
const checkView = ()=> {
  let target = $('.js-checkView');
  let viewport = $(window).scrollTop() + $(window).height();

  $.each(target, function() {
    let el = $(this);
    let el_position = el.offset().top;

    viewport > el_position ? el.addClass('is-active') : el.removeClass('is-active');
  });
}

// ACCORDION
const accordion = ()=> {
  if ($('.accordion').length) {

    let accordion = function(el, multiple) {
      this.el = el || {};
      this.multiple = multiple || false;

      let trigger = this.el.find('.accordion__item__head'); 

      trigger.on('click', {
        el: this.el,
        multiple: this.multiple
      }, this.dropdown)
    }

    accordion.prototype.dropdown = function(e) {
      let $el = e.data.el;
      $this = $(this),
      $acc_content = $this.parent('.accordion__item').find('.accordion__item__body');

      $acc_content.slideToggle(); // Show content
      $this.parents('.accordion__item').toggleClass('is-open'); // for custom css display

      !e.data.multiple ? $el.find('.accordion__item__body').not($acc_content).slideUp().parents('.accordion__item').removeClass('is-open') : '';
    }

    let accordion__field = new accordion($('.accordion'), true);
    // Set TRUE - allows to open multiple accordion
    // Set FALSE - opens only one accordion at a time
  }
}

// CUSTOM SELECT
const customSelect = ()=> {
  let custom_select = $('.custom-select');

  if (custom_select.length) {
    var x, i, j, selElmnt, a, b, c;
    /*look for any elements with the class "custom-select":*/
    x = document.getElementsByClassName("custom-select");
    
    for (i = 0; i < x.length; i++) {
      selElmnt = x[i].getElementsByTagName("select")[0];
      /*for each element, create a new DIV that will act as the selected item:*/
      a = document.createElement("DIV");
      a.setAttribute("class", "select-selected");
      a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
      x[i].appendChild(a);
      /*for each element, create a new DIV that will contain the option list:*/
      b = document.createElement("DIV");
      b.setAttribute("class", "select-items select-hide");

      for (j = 1; j < selElmnt.length; j++) {
        /*for each option in the original select element, create a new DIV that will act as an option item:*/
        c = document.createElement("DIV");
        c.innerHTML = selElmnt.options[j].innerHTML;
        c.addEventListener("click", function(e) {
            /*when an item is clicked, update the original select box and the selected item:*/
            var y, i, k, s, h;
            s = this.parentNode.parentNode.getElementsByTagName("select")[0];
            h = this.parentNode.previousSibling;
            for (i = 0; i < s.length; i++) {
              if (s.options[i].innerHTML == this.innerHTML) {
                s.selectedIndex = i;
                h.innerHTML = this.innerHTML;
                y = this.parentNode.getElementsByClassName("same-as-selected");
                for (k = 0; k < y.length; k++) {
                  y[k].removeAttribute("class");
                }
                this.setAttribute("class", "same-as-selected");
                break;
              }
            }
            h.click();
        });
        b.appendChild(c);
      }
      x[i].appendChild(b);
      a.addEventListener("click", function(e) {
          /*when the select box is clicked, close any other select boxes and open/close the current select box:*/
          e.stopPropagation();
          closeAllSelect(this);
          this.nextSibling.classList.toggle("select-hide");
          this.classList.toggle("select-arrow-active");
        });
    }
    function closeAllSelect(elmnt) {
      /*a function that will close all select boxes in the document, except the current select box:*/
      var x, y, i, arrNo = [];
      x = document.getElementsByClassName("select-items");
      y = document.getElementsByClassName("select-selected");
      for (i = 0; i < y.length; i++) {
        if (elmnt == y[i]) {
          arrNo.push(i)
        } else {
          y[i].classList.remove("select-arrow-active");
        }
      }
      for (i = 0; i < x.length; i++) {
        if (arrNo.indexOf(i)) {
          x[i].classList.add("select-hide");
        }
      }
    }
    /*if the user clicks anywhere outside the select box, then close all select boxes:*/
    document.addEventListener("click", closeAllSelect);
  }
}

// SWIPER (Library)
const swiper = ()=> {
  let kv_slider = $('.js-kv__slider');

  if (kv_slider.length) {
    const kv_swiper = new Swiper('.js-kv__slider', {
      loop: true,
      // loopAdditionalSlides: 20, // Number of cloned slides
      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
      },
      speed: 1000,
      // effect: 'fade',
      // lazy: true, // image loader
      // spaceBetween: 30,
      slidesPerView: 1,
      observer: true, // Runs slider even if it's hidden at first state
      observeParents: true, // Runs slider even if it's hidden at first state
      grabCursor: true,
      watchOverflow: true, // remove slider function if there is only 1 slide

      pagination: {
        el: '.kv__slider__pagi',
        clickable: true,
      },
      navigation: {
        nextEl: '.kv__slider__next',
        prevEl: '.kv__slider__prev',
        clickable: true,
      },
      // scrollbar: {
      //   el: '.kv__slider__scrollbar .swiper-scrollbar',
      // },

      // breakpoints: {
      //   767: {
      //     spaceBetween: 15,
      //     slidesPerView: 3,
      //   },
      //   400: {
      //     slidesPerView: 1,
      //   },
      // },
    });


    // On slide change actions
    // kv_swiper.on('slideChange', function () {
      // custom event actions
    // });
  }
}

// WOW EFFECTS
const wowEffects = () => {
  const ua = window.navigator.userAgent;
  const wowInit = () => {
    let wow = new WOW(
      {
        boxClass:     'wow',
        animateClass: 'animated',
        offset:       100,
        mobile:       true,
        live:         true,
        callback:     function(box) {

        },
        scrollContainer: null
      }
    );
    wow.init();
  };


  // IE Browser
  if (ua.indexOf('Trident') != -1 || ua.indexOf('MSIE') != -1){
    $(window).on('load', e => {
      wowInit();
    });
  } else {
    wowInit();
  }
};

// STICKY HEADER
const stickyHeader = ()=> {
  $(window).scrollTop() > 0 ? $('header').addClass('is-sticky') : $('header').removeClass('is-sticky');
  // add the sticky settings thru css
}

// BACK TO TOP
const backToTop = ()=> {
  $('.js-toTop').click(function (e) {
    e.preventDefault();
    $('html, body').delay(300).animate({ scrollTop: 0 }, 800);
  });
}

// MODAL
const modal = ()=> {
  let modal = $('.modal');
  let modal_box = $('.modal__box');
  let open_btn = $('.js-openModal');
  let close_btn = $('.modal__box__closeButton');

  open_btn.click(()=> {
    modal.addClass('is-open');
    setTimeout(()=> { modal_box.addClass('is-active'); }, 300);
  });

  close_btn.click(()=> {
    modal_box.removeClass('is-active');
    setTimeout(()=> { modal.removeClass('is-open'); }, 600);
  });
}




$(function() {
  // viewport();
  // smoothScroll();
  // wowEffects();
  accordion();
  swiper();
  customSelect();
  backToTop();
  modal();
});


$(window).on('load resize scroll', function(){
  // checkView();
  // stickyHeader();
});
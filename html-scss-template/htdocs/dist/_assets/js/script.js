'use strict';

var smoothScroll = function smoothScroll() {
  $('a[href^="#"]').on('click', function (e) {
    var speed = 600;
    var href = $(undefined).attr('href');
    var target = $(href == '#' || href == '' ? 'html' : href);
    var position = target.offset().top;
    $('body, html').delay(200).animate({ scrollTop: position }, speed, 'swing');
    return false;
  });
};

$(function () {
  smoothScroll();
});
//# sourceMappingURL=script.js.map
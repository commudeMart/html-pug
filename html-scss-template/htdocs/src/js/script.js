const smoothScroll = ()=> {
  $('a[href^="#"]').on('click', e => {
    const speed = 600;
    const href = $(this).attr('href');
    const target = $(href == '#' || href == '' ? 'html' : href);
    const position = target.offset().top;
    $('body, html').delay(200).animate({scrollTop: position}, speed, 'swing');
    return false;
  });
};

$(function() {
  smoothScroll();
});

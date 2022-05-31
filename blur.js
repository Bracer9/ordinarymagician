$(window).on('scroll load',function(e) {
    var header = $('header').height();
    var scrollnow = $(window).scrollTop();
    var scrollblur = (header+10*scrollnow)/header-1;
    var blur = Math.floor(scrollblur);
    $('h2').text( blur+'PX' );
    $('header').css('-webkit-filter','blur('+blur+'px)');
    $('header').css('filter','blur('+blur+'px)');
    });
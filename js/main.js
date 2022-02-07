!(function($) {
    "use strict"
    //navbar scrolling
    $(window).scrolling(function() {

        if ($(this).scrollTop() > 200) {

            $('.navbar').fadeIn('slow').css('display', 'flex');

        } else {
            $('.navbar').fadeOut('slow').css('display', 'none');
        }
    });


    //typed Inititate
    if ($('.typed-text-output').length == 1) {
        var typed_strings = $('.typed-text').text();
        var typed = new Typed('.typed-text-output', {
            strings: typed_strings.split(','),
            typeSpeed: 100,
            backSpeed: 20,
            smartBackSpeed: false,
            loop: true





        });
    }
    // Skills section
    $('.skill').waypoint(function() {
        $('.progress .progress-bar').each(function() {
            $(this).css("width", $(this).attr("aria-valuenow") + '%');
        });
    }, {
        offset: '80%'
    });
})(jQuery);
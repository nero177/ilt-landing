
$(document).ready(function () {
    $('.dscr-items-slider').slick({
        centerMode: true,
        centerPadding: '30px',
        slidesToShow: 1,
        prevArrow: false,
        nextArrow: false,
        dots: true,
        infinite: false
    });

    if ($(window).width() <= 800) {
        $('.audience-items').slick({
            centerMode: true,
            slidesToShow: 1,
            prevArrow: false,
            nextArrow: false,
            dots: false,
            infinite: false
        });
    }

    $('.speakers-wrap').slick({
        dots: true,
        infinite: true,
        speed: 500,
        prevArrow: false,
        nextArrow: false,
        fade: true,
        cssEase: 'linear'
    });
})

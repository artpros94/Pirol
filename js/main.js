$(document).ready(function(){



    $('.slider__inner').slick({
        dots: true,
        dotsClass: 'slick-dots',
        autoplay: true,
        slidesToShow: 1,
        arrows: false,
    });

      $(".js-range-slider").ionRangeSlider({
        min: 1,
        max: 100,
        from: 75
    });

    $('.menu__btn').on('click', function(){
        $('.menu__list').slideToggle();
    });




});
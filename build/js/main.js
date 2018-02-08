;(function($, window, document, undefined) {
    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
            }
        },
        animateOut: 'fadeOut',
        animateIn: 'fadeIn'
    })
})(window.Zepto || window.jQuery, window, document);

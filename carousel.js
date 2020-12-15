$(window).resize(function() {
    if ($(window).width() < 600) {
        console.log('hello');
        $('#default').addClass('owl-carousel owl-theme');
    } else {
        $('#default').removeClass('owl-carousel owl-theme');
    }
}).resize();

$('.owl-carousel').owlCarousel({
    loop: true,
    margin: 10,
    nav: false,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplaySpeed: 2000,
    stagePadding: 50,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 1
        },
        1000: {
            items: 1
        }
    }
})
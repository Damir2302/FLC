$(document).ready(function() {

    
    if ($(window).width() < 1400) {
        let whatWeDoSlider = new Swiper('.wwdo__items', {
            slidesPerView: 1,
            spaceBetween: 25,
            pagination: {
                el: '.wwde__pagination',
                clickable: true,
               
            },
            breakpoints: {
                1400: {
                    slidesPerView: 6,
                    spaceBetween: 35
                },
                1024: {
                    slidesPerView: 4,
                    spaceBetween: 35
                },
                744: {
                    slidesPerView: 2,
                    spaceBetween: 30,
                    watchSlidesVisibility: true,
                    watchOverflow: true,
                },
            }
        });
    }




})
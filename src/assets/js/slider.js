$(document).ready(function() {

    
    let whatWeDoSlider = new Swiper('.wwdo__items', {
        slidesPerView: 1,
        spaceBetween: 25,
        pagination: {
            el: '.wwde__pagination',
            clickable: true,
           
        },
        breakpoints: {
            1024: {
                slidesPerView: 3,
                spaceBetween: 30
            },
            744: {
                slidesPerView: 2,
                spaceBetween: 30
            },
        }
    });

})
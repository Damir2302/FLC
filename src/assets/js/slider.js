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


    let outsourcingOptionsSlider = new Swiper('.outsourcing-options__items', {
        slidesPerView: 1,
        spaceBetween: 35,

        navigation: {
            nextEl: ".outsourcing-options__nav-next",
            prevEl: ".outsourcing-options__nav-prev",
        },

        pagination: {
            el: '.outsourcing-options__pagination',
            clickable: true,
            renderBullet: function (index, className) {
                return '<span class="' + className + '"><div>' + (index + 1) + "</div></span>";
            },
        },

        breakpoints: {
            744: {
              slidesPerView: 'auto',
              spaceBetween: 20,
              centeredSlides: true,
              loop: true,
            }
        },

      
    });




})
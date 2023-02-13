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

    let tabsNavSlider = new Swiper('.tabs__nav', {
        slidesPerView: 'auto',  
    });

    let workMetodsSldier = new Swiper('.work-metods__items', {
        slidesPerView: 'auto',
        watchOverflow: true,
        centeredSlides: true,
        loop: true,
        autoHeight: true,
        spaceBetween: 55,
        navigation: {
            nextEl: ".work-metods__nav-next",
            prevEl: ".work-metods__nav-prev",
        },

        pagination: {
            el: '.work-metods__pagination',
            clickable: true,
        },
      
    });


    let reviewsSlider = new Swiper('.reviews__items', {
        slidesPerView: 1,  
        spaceBetween: 35,


        navigation: {
            nextEl: ".reviews__items-nav-next",
            prevEl: ".reviews__items-nav-prev",
        },

        pagination: {
            el: '.reviews__pagination',
            clickable: true,
        },

        breakpoints: {
            // 1400: {
            //     slidesPerView: 6,
            //     spaceBetween: 35
            // },
            // 1024: {
            //     slidesPerView: 4,
            //     spaceBetween: 35
            // },
            744: {
                slidesPerView: 3,
                spaceBetween: 40,
                watchSlidesVisibility: true,
                watchOverflow: true,
            },
        }
    });


    let casesSlider = new Swiper('.cases__items', {
        slidesPerView: 'auto',
        watchOverflow: true,
        centeredSlides: true,
        loop: true,
        autoHeight: true,
        spaceBetween: 55,
        navigation: {
            nextEl: ".cases__nav-next",
            prevEl: ".cases__nav-prev",
        },
        pagination: {
            el: '.cases__pagination',
            clickable: true,
        },
    });

    

    let trustUsSlider = new Swiper('.trust-us__slider', {
        slidesPerView: 2,
        spaceBetween: 25,

        navigation: {
            nextEl: ".trust-us__nav-next",
            prevEl: ".trust-us__nav-prev",
        },

        pagination: {
            el: '.trust-us__pagination',
            clickable: true,
        },
        breakpoints: {
            1400: {
                slidesPerView: 3,
                spaceBetween: 20,
                grid: {
                    rows: 3,
                    fill: "row"
                }
            },
            1024: {
                slidesPerView: 2,
                spaceBetween: 20,
                grid: {
                    rows: 2,
                    fill: "row"
                }
            },
            744: {
                slidesPerView: 1,
                spaceBetween: 10,
                grid: {
                    rows: 2,
                    fill: "row"
                },
            },
        }
        
    });

})
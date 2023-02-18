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

    // ТАБЫ
    let tabsNavSlider;
    let inittabsNavSlider;

    tabsNavSliderCheck();

    $(window).on('resize', function() {
      tabsNavSliderCheck()
    })

    function tabsNavSliderCheck() {

      if ($('.tabs__nav').length) {

        if ($(window).width() < 1400) {
          if (!inittabsNavSlider) {
            inittabsNavSlider = true;
            tabsNavSlider = new Swiper(".tabs__nav", {
              slidesPerView: 'auto'
            })
          }
        } else {
          if (typeof(tabsNavSlider) !== "undefined" ) {
            inittabsNavSlider = false;
            tabsNavSlider.destroy();
          }
        }
      }
    }

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

    // Диаграмма на главной
    let resultsSlider;
    let initResultsSlider;

    resultsSliderCheck();

    $(window).on('resize', function() {
        resultsSliderCheck()
    })

    function resultsSliderCheck() {

      if ($('.results .swiper').length) {

        if ($(window).width() < 744) {
          if (!initResultsSlider) {
            initResultsSlider = true;
            resultsSlider = new Swiper(".results .swiper", {
              slidesPerView: 1,
              spaceBetween: 30,

              pagination: {
                el: '.results .swiper-pagination',
                clickable: true
              }
            })
          }
        } else {
          if (typeof(resultsSlider) !== "undefined" ) {
            initResultsSlider = false;
            resultsSlider.destroy();
          }
        }
      }
    }

    // Команда FLC
    let teamSlider;
    let initTeamSlider;

    teamSliderCheck();

    $(window).on('resize', function() {
        teamSliderCheck()
    })

    function teamSliderCheck() {

      if ($('.team .swiper').length) {

        if ($(window).width() < 744) {
          if (!initTeamSlider) {
            initTeamSlider = true;
            resultsSlider = new Swiper(".team .swiper", {
              slidesPerView: 1,
              spaceBetween: 30,

              pagination: {
                el: '.team .swiper-pagination',
                clickable: true
              }
            })
          }
        } else {
          if (typeof(resultsSlider) !== "undefined" ) {
            initTeamSlider = false;
            resultsSlider.destroy();
          }
        }
      }
    }

    // Сферы бизнеса
    let expSlider;
    let initExpSlider;

    expSliderCheck();

    $(window).on('resize', function() {
        expSliderCheck()
    })

    function expSliderCheck() {

      if ($('.experience .swiper').length) {

        if ($(window).width() < 744) {
          if (!initExpSlider) {
            initExpSlider = true;
            expSlider = new Swiper(".experience .swiper", {
              slidesPerView: 2,
              spaceBetween: 10,

              pagination: {
                el: '.experience .swiper-pagination',
                clickable: true
              }
            })
          }
        } else {
          if (typeof(expSlider) !== "undefined" ) {
            initExpSlider = false;
            expSlider.destroy();
          }
        }
      }
    }

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

    let trustUsOnMainSlider = new Swiper('.trust-us-slider', {
      slidesPerView: 2,
      spaceBetween: 10,

      navigation: {
          nextEl: ".trust-us__nav-next",
          prevEl: ".trust-us__nav-prev",
      },

      pagination: {
          el: '.trust-us__pagination',
          clickable: true,
      },

      breakpoints: {
          744: {
              slidesPerView: 4,
              spaceBetween: 10
          },

          1400: {
            slidesPerView: 5,
            spaceBetween: 20
          }
      }

    });

    // Виды судебных споров
    let litigationSlider;
    let initLitigationSlider;

    litigationSliderCheck();

    $(window).on('resize', function() {
      litigationSliderCheck()
    })

    function litigationSliderCheck() {

      if ($('.litigation .swiper').length) {

        if ($(window).width() < 1024) {
          if (!initLitigationSlider) {
            initLitigationSlider = true;
            litigationSlider = new Swiper(".litigation .swiper", {
              slidesPerView: 1,
              spaceBetween: 30,

              pagination: {
                el: '.litigation .swiper-pagination',
                clickable: true
              },

              breakpoints: {
                744: {
                  slidesPerView: 2,
                  spaceBetween: 30,
                }
              }
            })
          }
        } else {
          if (typeof(litigationSlider) !== "undefined" ) {
            initLitigationSlider = false;
            litigationSlider.destroy();
          }
        }
      }
    }

    let compareSlider = new Swiper('.compare__items', {
        slidesPerView: 1,
        // watchOverflow: true,
        // centeredSlides: true,
        loop: false,
        // autoHeight: true,
        spaceBetween: 55,

        pagination: {
            el: '.compare__pagination',
            clickable: true,
        },

        breakpoints: {
            1400: {
                slidesPerView: 2,
                spaceBetween: 60,
            },
            1024: {
                slidesPerView: 2,
                spaceBetween: 20,
            },
            744: {
                slidesPerView: 2,
                spaceBetween: 10,
            },
        }
    });

})
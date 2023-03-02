$(document).ready(function () {

  wwdoSliderCheck();

  $(window).on("resize", function () {
    wwdoSliderCheck();
  });


  function wwdoSliderCheck() {
    if ($(window).width() < 1400) {
      let whatWeDoSlider = new Swiper(".wwdo__items", {
        slidesPerView: 1,
        spaceBetween: 25,
        pagination: {
          el: ".wwde__pagination",
          clickable: true,
        },
        breakpoints: {
          1400: {
            slidesPerView: 6,
            spaceBetween: 35,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 35,
          },
          744: {
            slidesPerView: 2,
            spaceBetween: 30,
            watchSlidesVisibility: true,
            watchOverflow: true,
          },
        },
      });
    }
  }


  outsourcingOptionsSliderCheck();

  $(window).on("resize", function () {
    outsourcingOptionsSliderCheck();
  });


  function outsourcingOptionsSliderCheck() {
    let outsourcingOptionsSlider = new Swiper(".outsourcing-options__items", {
      slidesPerView: 1,
      spaceBetween: 35,

      navigation: {
        nextEl: ".outsourcing-options__nav-next",
        prevEl: ".outsourcing-options__nav-prev",
      },

      pagination: {
        el: ".outsourcing-options__pagination",
        clickable: true,
        renderBullet: function (index, className) {
          return (
            '<span class="' +
            className +
            '"><div>' +
            (index + 1) +
            "</div></span>"
          );
        },
      },

      breakpoints: {
        744: {
          slidesPerView: "auto",
          spaceBetween: 20,
          centeredSlides: true,
          loop: true,
        },
      },
    });
  }



  // HERO MENU
  let heroNavSlider;
  let initHeroNavSlider;

  heroNavSliderCheck();

  $(window).on("resize", function () {
    heroNavSliderCheck();
  });

  function heroNavSliderCheck() {
    if ($(".hero__nav .swiper").length) {
      if ($(window).width() < 1400) {
        if (!initHeroNavSlider) {
          initHeroNavSlider = true;
          heroNavSlider = new Swiper(".hero__nav .swiper", {
            slidesPerView: "auto",
            spaceBetween: 12,
            freeMode: true,

            breakpoints: {
              744: {
                spaceBetween: 40,
              },
            },
          });
        }
      } else {
        if (typeof heroNavSlider !== "undefined") {
          initHeroNavSlider = false;
          heroNavSlider.destroy();
        }
      }
    }
  }

  // ТАБЫ
  let tabsNavSlider;
  let inittabsNavSlider;

  tabsNavSliderCheck();

  $(window).on("resize", function () {
    tabsNavSliderCheck();
  });

  function tabsNavSliderCheck() {
    if ($(".tabs__nav").length) {
      if ($(window).width() < 1400) {
        if (!inittabsNavSlider) {
          inittabsNavSlider = true;
          tabsNavSlider = new Swiper(".tabs__nav", {
            slidesPerView: "auto",
            freeMode: true,
          });
        }
      } else {
        if (typeof tabsNavSlider !== "undefined") {
          inittabsNavSlider = false;
          tabsNavSlider.destroy();
        }
      }
    }
  }

  workMetodsSldierCheck();

  $(window).on("resize", function () {
    workMetodsSldierCheck();
  });

  function workMetodsSldierCheck() {
    let workMetodsSldier = new Swiper(".work-metods__items", {
      slidesPerView: "auto",
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
        el: ".work-metods__pagination",
        clickable: true,
      },
    });
  }

  reviewsSliderCheck();

  $(window).on("resize", function () {
    reviewsSliderCheck();
  });
  function reviewsSliderCheck() {
    let reviewsSlider = new Swiper(".reviews__items", {
      slidesPerView: 1,
      spaceBetween: 35,

      navigation: {
        nextEl: ".reviews__items-nav-next",
        prevEl: ".reviews__items-nav-prev",
      },

      pagination: {
        el: ".reviews__pagination",
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
      },
    });
  }



  // Диаграмма на главной
  let resultsSlider;
  let initResultsSlider;

  resultsSliderCheck();

  $(window).on("resize", function () {
    resultsSliderCheck();
  });

  function resultsSliderCheck() {
    if ($(".results .swiper").length) {
      if ($(window).width() < 744) {
        if (!initResultsSlider) {
          initResultsSlider = true;
          resultsSlider = new Swiper(".results .swiper", {
            slidesPerView: 1,
            spaceBetween: 30,

            pagination: {
              el: ".results .swiper-pagination",
              clickable: true,
            },
          });
        }
      } else {
        if (typeof resultsSlider !== "undefined") {
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

  $(window).on("resize", function () {
    teamSliderCheck();
  });

  function teamSliderCheck() {
    if ($(".team .swiper").length) {
      if ($(window).width() < 744) {
        if (!initTeamSlider) {
          initTeamSlider = true;
          resultsSlider = new Swiper(".team .swiper", {
            slidesPerView: 1,
            spaceBetween: 30,

            pagination: {
              el: ".team .swiper-pagination",
              clickable: true,
            },
          });
        }
      } else {
        if (typeof resultsSlider !== "undefined") {
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

  $(window).on("resize", function () {
    expSliderCheck();
  });

  function expSliderCheck() {
    if ($(".experience .swiper").length) {
      if ($(window).width() < 744) {
        if (!initExpSlider) {
          initExpSlider = true;
          expSlider = new Swiper(".experience .swiper", {
            slidesPerView: 2,
            spaceBetween: 10,

            pagination: {
              el: ".experience .swiper-pagination",
              clickable: true,
            },
          });
        }
      } else {
        if (typeof expSlider !== "undefined") {
          initExpSlider = false;
          expSlider.destroy();
        }
      }
    }
  }

  // Налоговый план
  let planSlider;
  let initPlanSlider;

  planSliderCheck();

  $(window).on("resize", function () {
    planSliderCheck();
  });

  function planSliderCheck() {
    if ($(".t-planning__slider .swiper").length) {
      if ($(window).width() < 744) {
        if (!initPlanSlider) {
          initPlanSlider = true;
          planSlider = new Swiper(".t-planning__slider .swiper", {
            slidesPerView: 1,
            spaceBetween: 30,

            pagination: {
              el: ".t-planning__slider .swiper-pagination",
              clickable: true,
            },
          });
        }
      } else {
        if (typeof planSlider !== "undefined") {
          initPlanSlider = false;
          planSlider.destroy();
        }
      }
    }
  }

  casesSliderCheck();

  $(window).on("resize", function () {
    casesSliderCheck();
  });

  function casesSliderCheck() {
    let casesSlider = new Swiper(".cases__items", {
      slidesPerView: "auto",
      watchOverflow: true,
      centeredSlides: true,
      loop: false,
      autoHeight: false,
      spaceBetween: 55,
      navigation: {
        nextEl: ".cases__nav-next",
        prevEl: ".cases__nav-prev",
      },
      pagination: {
        el: ".cases__pagination",
        clickable: true,
      },
    });
  }

  trustUsSliderCheck();

  $(window).on("resize", function () {
    trustUsSliderCheck();
  });

  function trustUsSliderCheck() {
    let trustUsSlider = new Swiper(".trust-us__slider", {
      slidesPerView: 2,
      spaceBetween: 25,
      navigation: {
        nextEl: ".trust-us__nav-next",
        prevEl: ".trust-us__nav-prev",
      },

      pagination: {
        el: ".trust-us__pagination",
        clickable: true,
      },
      breakpoints: {
        1400: {
          slidesPerView: 3,
          spaceBetween: 20,
          grid: {
            rows: 3,
            fill: "row",
          },
        },
        1024: {
          slidesPerView: 2,
          spaceBetween: 20,
          grid: {
            rows: 2,
            fill: "row",
          },
        },
        744: {
          slidesPerView: 1,
          spaceBetween: 10,
          grid: {
            rows: 2,
            fill: "row",
          },
        },
      },
    });
  }

  trustUsOnMainSliderCheck();

  $(window).on("resize", function () {
    trustUsOnMainSliderCheck();
  });

  function trustUsOnMainSliderCheck() {
    let trustUsOnMainSlider = new Swiper(".trust-us-slider", {
      slidesPerView: 2,
      spaceBetween: 10,

      navigation: {
        nextEl: ".trust-us__nav-next",
        prevEl: ".trust-us__nav-prev",
      },

      pagination: {
        el: ".trust-us__pagination",
        clickable: true,
      },

      breakpoints: {
        744: {
          slidesPerView: 4,
          spaceBetween: 10,
        },

        1400: {
          slidesPerView: 5,
          spaceBetween: 20,
        },
      },
    });
  }



  // Виды судебных споров
  let litigationSlider;
  let initLitigationSlider;

  litigationSliderCheck();

  $(window).on("resize", function () {
    litigationSliderCheck();
  });

  function litigationSliderCheck() {
    if ($(".litigation .swiper").length) {
      if ($(window).width() < 1024) {
        if (!initLitigationSlider) {
          initLitigationSlider = true;
          litigationSlider = new Swiper(".litigation .swiper", {
            slidesPerView: 1,
            spaceBetween: 30,

            pagination: {
              el: ".litigation .swiper-pagination",
              clickable: true,
            },

            breakpoints: {
              744: {
                slidesPerView: 2,
                spaceBetween: 30,
              },
            },
          });
        }
      } else {
        if (typeof litigationSlider !== "undefined") {
          initLitigationSlider = false;
          litigationSlider.destroy();
        }
      }
    }
  }

  tLawyerCheck();

  $(window).on("resize", function () {
    tLawyerCheck();
  });

  function tLawyerCheck() {
    //  Команда судебных юристов на странице Судебное представительство
    let tLawyer = new Swiper(".t-lawyer .swiper", {
      slidesPerView: 1,
      spaceBetween: 30,
      autoplay: {
        delay: 10000,
        disableOnInteraction: false,
      },

      pagination: {
        el: ".t-lawyer .swiper-pagination",
        clickable: true,
      },

      breakpoints: {
        744: {
          pagination: {
            renderBullet: function (index, className) {
              let imageContainer = [];
              $(".t-lawyer__image").each(function (e) {
                imageContainer.push($(".t-lawyer__image").html());
              });

              return (
                '<div class="' +
                className +
                '">' +
                imageContainer[index] +
                `<svg>
                  <circle cx="30" cy="30" r="30"></circle>
                  <circle class="progress-bar" id="progress-bar" cx="30" cy="30" r="30"></circle></svg>` +
                "</div>"
              );
            },
          },
        },

        1024: {
          slidesPerView: 1,
          spaceBetween: 40,
        },

        1400: {
          slidesPerView: 1,
          spaceBetween: 100,

          pagination: {
            renderBullet: function (index, className) {
              let imageContainer = [];
              $(".t-lawyer__image").each(function (e) {
                imageContainer.push($(".t-lawyer__image").html());
              });

              return (
                '<div class="' +
                className +
                '">' +
                imageContainer[index] +
                `<svg>
                  <circle cx="30" cy="30" r="30"></circle>
                  <circle class="progress-bar" id="progress-bar" cx="30" cy="30" r="30"></circle></svg>` +
                "</div>"
              );
            },
          },
        },
      },
    });
  }

  compareSliderCheck();

  $(window).on("resize", function () {
    compareSliderCheck();
  });

  function compareSliderCheck() {
    let compareSlider = new Swiper(".compare__items", {
      slidesPerView: 1,
      // watchOverflow: true,
      // centeredSlides: true,
      loop: false,
      // autoHeight: true,
      spaceBetween: 55,

      pagination: {
        el: ".compare__pagination",
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
      },
    });
  }

  variantsSldierCheck();

  $(window).on("resize", function () {
    variantsSldierCheck();
  });

  function variantsSldierCheck() {
    let variantsSldier = new Swiper(".tab__variants", {
      slidesPerView: 1,
      // watchOverflow: true,
      // centeredSlides: true,
      loop: false,
      // autoHeight: true,
      spaceBetween: 55,

      pagination: {
        el: ".tab__variants-pagination",
        clickable: true,
      },

      breakpoints: {
        1024: {
          slidesPerView: 3,
          spaceBetween: 20,
        },
        744: {
          slidesPerView: 2,
          spaceBetween: 10,
        },
      },
    });
  }

  auditResultSldierCheck();

  $(window).on("resize", function () {
    auditResultSldierCheck();
  });

  function auditResultSldierCheck() {
    let auditResultSldier = new Swiper(".prav-audit-result__items", {
      slidesPerView: 1,
      // watchOverflow: true,
      // centeredSlides: true,
      loop: false,
      // autoHeight: true,
      spaceBetween: 55,

      pagination: {
        el: " .prav-audit-result__pagination",
        clickable: true,
      },

      breakpoints: {
        1024: {
          slidesPerView: 4,
          spaceBetween: 20,
        },
        744: {
          slidesPerView: 3,
          spaceBetween: 10,
        },
      },
    });
  }

  workRulesSliderCheck();

  $(window).on("resize", function () {
    workRulesSliderCheck();
  });

  function workRulesSliderCheck() {
    if ($(window).width() < 744) {
      let workRulesSlider = new Swiper(".work-rules", {
        slidesPerView: 1,
        // watchOverflow: true,
        // centeredSlides: true,
        loop: false,
        // autoHeight: true,
        spaceBetween: 55,

        pagination: {
          el: " .work-rules__pagination",
          clickable: true,
        },
      });
    }
  }

 
});

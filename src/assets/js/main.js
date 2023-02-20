$(document).ready(function () {
  // ДЛЯ ВСЕХ(!!!!!!) ВСПЛЫВАЮЩИХ ОКОН [Если кликаем вне всплывающего поля, представленных ниже]
  $("html").on("click", function (e) {
    if (
      !$(e.target).closest(".navbar").length &&
      !$(e.target).closest(".header__burger").length &&
      !$(e.target).closest(".results__info").length &&
      !$(e.target).closest(".results__btn").length
    ) {
      $("body").removeClass("overflow-hidden");

      $(".navbar").removeClass("opened");
      $(".header__burger").removeClass("opened");

      $(".results__info").slideUp();
      $(".results__btn").css("opacity", 1);
    }
  });

  // HEDAER BURGER MENU
  $(".header__burger").on("click", function () {
    if ($(this).hasClass("opened")) {
      $("body").removeClass("overflow-hidden");

      $(this).removeClass("opened");
      $(".navbar").removeClass("opened");
    } else {
      $("body").addClass("overflow-hidden");

      $(this).addClass("opened");
      $(".navbar").addClass("opened");
    }
  });

  $(".nav__item.has-child .arrow-down").on("click", function () {
    $(this).parent().toggleClass("opened");
    $(this).parent().find(".nav__submenu").slideToggle();
  });

  // Show the first tab by default
  $(".tabs__content .tabs__content-item").hide();
  $(".tabs__content .tabs__content-item:first").show();
  $(".tabs__nav .tabs__nav-item:first").addClass("tab--active");

  // Change tab class and display content
  $(".tabs__nav-item a").on("click", function (event) {
    event.preventDefault();
    $(".tabs__nav .tabs__nav-item").removeClass("tab--active");
    $(this).parent().addClass("tab--active");
    $(".tabs__content .tabs__content-item").hide();
    $($(this).attr("href")).show();
  });

  $(".js-faq-title").on("click", function (e) {
    e.preventDefault();
    var $this = $(this);

    if (!$this.hasClass("faq__active")) {
      $(".js-faq-content").slideUp(800);
      $(".js-faq-title").removeClass("faq__active");
      $(".js-faq-rotate").removeClass("faq__rotate");
    }

    $this.toggleClass("faq__active");
    $this.next().slideToggle();
    $(".js-faq-rotate", this).toggleClass("faq__rotate");
  });

  // Диаграмма на главной
  $(".results__btn").on("click", function () {
    $(this).parent().find(".results__info").slideDown();
    $(this).css("opacity", 0);
  });

  $(".results__info-btn").on("click", function () {
    $(this).parent().parent().find(".results__info").slideUp();
    $(this).parent().parent().find(".results__btn").css("opacity", 1);
  });

  if ($(".results-section").length) {
    $(document).scroll(function () {
      if ($(this).scrollTop() >= $(".results-section").offset().top - 500) {
        $(".results-section").addClass("focused").trigger("classChange");
      }
    });
  }

  $(".results-section").on("classChange", function () {
    diagramStats();
  });

  function diagramStats() {
    if ($(".results__diagram-value span").text() == 0) {
      $(".results__diagram-value").each(function (e) {
        let _that = $(this);
        let num = 0;

        if (_that.attr("data-value") != 0) {
          const statsCount = setInterval(function () {
            num++;

            _that.find("span").text(num);

            if (_that.find("span").text() == _that.attr("data-value")) {
              clearInterval(statsCount);
            }
          }, 50);
        }
      });
    }
  }

  if ($(window).width() >= 744) {
    $(".results__item").on("mouseenter", function (e) {
      let rect = e.target.getBoundingClientRect();
      let x = e.clientX - rect.left; //x position within the element.
      let y = e.clientY - rect.top; //y position within the element.

      $(this).find(".results__info").css("display", "block");
      $(this).find(".results__info").css("left", x);
      $(this).find(".results__info").css("top", y);
    });

    $(".results__item").on("mouseleave", function () {
      $(this).find(".results__info").css("display", "none");
    });
  }

    // 3 Варианта оплаты на странице Судебное представительство
    $('.payments__var-block').on('click', function() {

        if (!$(this).hasClass('opened')) {
            $('.payments__var-block').removeClass('opened')
            $(this).addClass('opened')
            $('.payments__var-text').slideUp()
            $(this).find('.payments__var-text').slideDown()
        } else {
            $(this).removeClass('opened')
            $(this).find('.payments__var-text').slideUp()
        }
    })

  // ACCORDION MOBILE
  $(function () {
    // (Optional) Active an item if it has the class "is-active"
    $(".acc__card.is-active").children(".acc__panel").slideDown();

    $(".acc__title ").click(function () {
      // Cancel the siblings
      $(this)
        .parent()
        .siblings(".acc__card")
        .removeClass("is-active")
        .children(".acc__panel")
        .slideUp();
      // Toggle the item
      $(this)
        .parent()
        .toggleClass("is-active")
        .find(".acc__panel")
        .slideToggle("ease-out");
    });
  });

  // ACCORDION DESC

  $(function () {
    $(".acc__desc-nav a").click(function () {
      // Check for active

      $(this)
        .parent()
        .parent()
        .find(".acc__desc-nav-item")
        .removeClass("active");
      $(this).addClass("active");

      // Display active tab
      let currentTab = $(this).attr("href");
      $(this)
        .parent()
        .parent()
        .find(".acc__desc-content .acc__desc-tab")
        .hide();
      $(currentTab).show();

      return false;
    });
  });

  $(function () {
    $(".acc__get-cost-action").click(function () {
      $(this).next().slideToggle();
    });
  });
});

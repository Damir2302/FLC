$(document).ready(function () {

    // ДЛЯ ВСЕХ(!!!!!!) ВСПЛЫВАЮЩИХ ОКОН [Если кликаем вне всплывающего поля, представленных ниже]
    $("html").on("click", function (e) {
        if (
        !$(e.target).closest(".navbar").length &&
        !$(e.target).closest(".header__burger").length &&
        !$(e.target).closest(".results__info").length &&
        !$(e.target).closest(".results__btn").length &&
        !$(e.target).closest("[data-popup]").length &&
        !$(e.target).closest("[data-callback]").length &&
        !$(e.target).closest(".popup").length
        ) {
        resetPopupForm()
        $("body").removeClass("overflow-hidden")
        $('#page').removeClass('bg-overlay')

        $(".navbar").removeClass("opened")
        $(".header__burger").removeClass("opened")

        $(".results__info").slideUp()
        $(".results__btn").css("opacity", 1)

        $('.popup').removeClass('opened')
        }
    });

    $('[data-popup]').on('click', function() {
        $('body').addClass('overflow-hidden')
        $('#page').addClass('bg-overlay')
        $('#popup').addClass('opened')
    })

    $('[data-callback]').on('click', function() {
        $('body').addClass('overflow-hidden')
        $('#page').addClass('bg-overlay')
        $('#popup-callback').addClass('opened')
    })

    $('.popup-close').on('click', function() {
        resetPopupForm()
        $("body").removeClass("overflow-hidden")
        $('#page').removeClass('bg-overlay')
        $('.popup').removeClass('opened')
    })

    function resetPopupForm() {
        $('.popup form').trigger('reset')
    }

})
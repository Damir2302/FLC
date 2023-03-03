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
        !$(e.target).closest(".c-banner__btn").length &&
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

    $('.c-banner__btn').on('click', function(e) {
        e.preventDefault()

        $('body').addClass('overflow-hidden')
        $('#page').addClass('bg-overlay')
        $(`${$(this).attr('href')}`).addClass('opened')
    })

    $('.select-style .input-style').on('click', function() {

        if ($(this).hasClass('select')) {
            $(this).removeClass('select')
            $(this).parent().find('.select-custom').slideUp(200)
        } else {
            $(this).addClass('select')
            $(this).parent().find('.select-custom').slideDown(200)
        }
    })

    let selectedItems = [];

    $('.select-custom .option').on('click', function() {
        $(this).toggleClass('selected')

        if ($(this).hasClass('selected')) {
            selectedItems.push($(this).text())
            $(`.select-style select option[value='${$(this).text()}']`).attr('selected', true)
        } else {
            selectedItems = [];
            $(this).parent().find('.selected').each(function(e) {
                selectedItems.push($(this).text())
            })
            $(`.select-style select option[value='${$(this).text()}']`).removeAttr('selected')
        }

        if (selectedItems == '') {
            $('.select-style .input-style span').text('Виды сопровождения (можно выбрать несколько)')
        } else {
            $('.select-style .input-style span').text(selectedItems.join(', '))
        }
    })

    $('html').on('click', function(e) {
        if (!$(e.target).closest(".select-style").length) {
            $('.select-style .input-style').removeClass('select')
            $('.select-custom').slideUp(200)
        }
    })

})
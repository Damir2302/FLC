$(document).ready(function() {

    // ДЛЯ ВСЕХ(!!!!!!) ВСПЛЫВАЮЩИХ ОКОН [Если кликаем вне всплывающего поля, представленных ниже]
    $('html').on('click', function(e) {
        if (!$(e.target).closest('.navbar').length &&
            !$(e.target).closest('.header__burger').length) {
            $('body').removeClass('overflow-hidden')
            $('#page').removeClass('bg-overlay')

            $('.navbar').removeClass('opened')
            $('.header__burger').removeClass('opened')
        }
    })


    // HEDAER BURGER MENU
    $('.header__burger').on('click', function() {
        if ($(this).hasClass('opened')) {
            $('body').removeClass('overflow-hidden')
            $('#page').removeClass('bg-overlay')

            $(this).removeClass('opened')
            $('.navbar').removeClass('opened')
        } else {
            $('body').addClass('overflow-hidden')
            $('#page').addClass('bg-overlay')

            $(this).addClass('opened')
            $('.navbar').addClass('opened')
        }
    })

    $('.nav__item.has-child .arrow-down').on('click', function() {
        $(this).parent().toggleClass('opened')
        $(this).parent().find('.nav__submenu').slideToggle()
    })

});
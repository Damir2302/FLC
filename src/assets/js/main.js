$(document).ready(function() {

    // ДЛЯ ВСЕХ(!!!!!!) ВСПЛЫВАЮЩИХ ОКОН [Если кликаем вне всплывающего поля, представленных ниже]
    $('html').on('click', function(e) {
        if (!$(e.target).closest('.navbar').length &&
            !$(e.target).closest('.header__burger').length) {
            $('body').removeClass('overflow-hidden')

            $('.navbar').removeClass('opened')
            $('.header__burger').removeClass('opened')
        }
    })


    // HEDAER BURGER MENU
    $('.header__burger').on('click', function() {
        if ($(this).hasClass('opened')) {
            $('body').removeClass('overflow-hidden')

            $(this).removeClass('opened')
            $('.navbar').removeClass('opened')
        } else {
            $('body').addClass('overflow-hidden')

            $(this).addClass('opened')
            $('.navbar').addClass('opened')
        }
    })

    $('.nav__item.has-child .arrow-down').on('click', function() {
        $(this).parent().toggleClass('opened')
        $(this).parent().find('.nav__submenu').slideToggle()
    })


    // Show the first tab by default
    $('.tabs__content .tabs__content-item').hide();
    $('.tabs__content .tabs__content-item:first').show();
    $('.tabs__nav .tabs__nav-item:first').addClass('tab--active');

    // Change tab class and display content
    $('.tabs__nav-item a').on('click', function(event){
        event.preventDefault();
        $('.tabs__nav .tabs__nav-item').removeClass('tab--active');
        $(this).parent().addClass('tab--active');
        $('.tabs__content .tabs__content-item').hide();
        $($(this).attr('href')).show();
    });

});
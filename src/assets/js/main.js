$(document).ready(function() {

    // ДЛЯ ВСЕХ(!!!!!!) ВСПЛЫВАЮЩИХ ОКОН [Если кликаем вне всплывающего поля, представленных ниже]
    $('html').on('click', function(e) {
        if (!$(e.target).closest('.navbar').length &&
            !$(e.target).closest('.header__burger').length &&
            !$(e.target).closest('.results__info').length &&
            !$(e.target).closest('.results__btn').length) {
            $('body').removeClass('overflow-hidden')

            $('.navbar').removeClass('opened')
            $('.header__burger').removeClass('opened')

            $('.results__info').slideUp()
            $('.results__btn').css('opacity', 1)
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

    // Диаграмма на главной
    $('.results__btn').on('click', function() {
        $(this).parent().find('.results__info').slideDown()
        $(this).css('opacity', 0)
    })

    $('.results__info-btn').on('click', function() {
        $(this).parent().parent().find('.results__info').slideUp()
        $(this).parent().parent().find('.results__btn').css('opacity', 1)
    })

    $(document).scroll(function(){
        if ($(this).scrollTop() >= $('.results-section').offset().top - 500) {
            $('.results-section').addClass('focused').trigger('classChange')
        }
    });

    $('.results-section').on('classChange', function() {
        diagramStats()
    })

    function diagramStats() {
        if ($('.results__diagram-value span').text() == 0) {
            $('.results__diagram-value').each(function(e) {
                let _that = $(this)
                let num = 0;

                if (_that.attr('data-value') != 0) {
                    const statsCount = setInterval(function() {
                        num++

                        _that.find('span').text(num)

                        if (_that.find('span').text() == _that.attr('data-value')) {
                            clearInterval(statsCount)
                        }
                    }, 50);
                }
            })
        }
    }

    if ($(window).width() >= 744) {
        $('.results__item').on('mouseenter', function(e) {
            let rect = e.target.getBoundingClientRect();
            let x = e.clientX - rect.left; //x position within the element.
            let y = e.clientY - rect.top;  //y position within the element.

            $(this).find('.results__info').css('display', 'block')
            $(this).find('.results__info').css('left', x)
            $(this).find('.results__info').css('top', y)
        })

        $('.results__item').on('mouseleave', function() {
            $(this).find('.results__info').css('display', 'none')
        })
    }



});
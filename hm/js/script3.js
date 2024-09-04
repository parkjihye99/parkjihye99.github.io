$(function() { 
    // 내비게이션 영역
    $('#nav-bottom > li').on({
        mouseenter: function () { 
            $(".nav-slide").stop().slideUp();
            $(this).children(".nav-slide").stop().slideDown();
        },
        mouseleave: function () {
            $(this).children(".nav-slide").stop().slideUp();
        }
    });

    // scroll 내비게이션
    const $navBottom = $('#nav-bottomBg');

    const navTop = $navBottom.offset().top;

    $(window).on('scroll', function () { 
        const scrollTop = $(window).scrollTop();

        if (!$navBottom.is('.fixed') && scrollTop > navTop) {
            $navBottom.addClass('fixed');
        }
        else if ($navBottom.is('.fixed') && scrollTop < navTop) {
            $navBottom.removeClass('fixed');
        }
    });


    // innovate scale-img 스크롤
    $(window).on('scroll', function () { 
        $('.scale-img').each(function () { 
            const $img = $(this);
            const imgOffset = $img.offset().top;
            const imgHeight = $img.outerHeight();
            const scrollTop = $(window).scrollTop();
            const windowHeight = $(window).height();

            if (scrollTop + windowHeight > imgOffset && scrollTop < imgOffset + imgHeight) {
                $img.css('transform', 'scale(1)');
            } else {
                $img.css('transform', 'scale(0.8)');
            }
        });
    });



});
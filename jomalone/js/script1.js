$(function () { 
    // top-banner
    const INTERVAL = 3500;
    const $topBanner = $('#top-banner-content');
    let timerId = window.setInterval(slideBanner, INTERVAL);

    $topBanner.parent().on({
        mouseenter: function () { 
            window.clearInterval(timerId);
        },
        mouseleave: function () {
            timerId = window.setInterval(slideBanner, INTERVAL);
        }
    });

    $('#t-next').on('click', slideBanner);
    $('#t-prev').on('click', function () { 
        $topBanner.prepend( $topBanner.children(':last'))
            .css('margin-left', '-1300px').animate({ marginLeft: 0 });
    });

    function slideBanner () { 
        $topBanner.animate({ marginLeft: '-1300px'}, function () { 
            $topBanner.removeAttr('style').children(':first').appendTo(this);
        });
    };
    


    // 햄버거 메뉴
    let count = 0;

    $('.menu').on('click', function () { 
        $('.menu').toggleClass('on');

        if (count % 2 == 0) {
            $('#nav').css({ background : '#fcf9ee'});
            $('#menu-box').css({ 
                display : 'block',
                left : '-30%'
            });
            $('#menu-box').animate({ left : '100px'}, 700);
            $('#nav-bg').stop().fadeIn();
        } else {
            $('#nav').css({ background : ''});
            $('#menu-box').animate({ left : '-50%'}, 600);
            $('#nav-bg').stop().fadeOut();
            
        }
        count += 1;

    });

    // nav-bg 클릭 시 메뉴 사라짐

    // $('.menu').on('click', function () { 
    //     $(this).toggleClass('on');
    //     // $(this).find('div').removeClass('no-animation');
    //     $('#nav-bg').stop().fadeToggle('slow');
    //     $('.menu').toggleClass('on', 600);
    //     $('.menu-box').addClass('on');

    // });

   
    // $('#nav-bg').on('click', function() { 
    //     $('.menu').removeClass('on');
    //     // $('#nav-bg').css({ display : ''});
    //     $('#nav-bg').stop().fadeOut();
    //     $('#nav').css({ background : ''});
    //     $('#menu-box').animate({ left : '-50%'}, 600);

    // });



    // 내비게이션
    // sub
    $('#gnb-inner > li').on('mouseenter', function () { 
        $('.sub').stop().fadeOut();
        $(this).children('.sub').stop().fadeIn(300);
        
    });
    $('#gnb-inner > li').on('mouseleave', function () { 
        $(this).children('.sub').stop().fadeOut();
    });

    $('#gnb-inner > li').on('focusin', function () { 
        $(this).css({ color : '#707270'});
    });



    
});
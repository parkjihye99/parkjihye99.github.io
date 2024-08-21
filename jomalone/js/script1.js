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

    // #nav-bg 클릭 시 #nav 숨기기
    $('#nav-bg').on('click', function () { 
        $('#nav').css({ background : ''});
        $('#menu-box').animate({ left : '-50%'}, 600);
        $('#nav-bg').stop().fadeOut();
        $('.menu').removeClass('on'); 

        count = 0; 
    });


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


    // 메인배너 불투명도 조절
    $(window).on('scroll', function () { 
        const mainbanner = $('#mainbanner > a');
        let scrollTop = $(window).scrollTop();
        let maxScroll = 1000;
        let opacity = Math.max( 1 - (scrollTop / maxScroll) , 0);

        mainbanner.css('opacity', opacity);
    });


    // 베스트 아이템 스크롤
    $(window).on('scroll', function () { 
        let scrollTop = $(window).scrollTop();
        const scrollValue = [600, 2100, 2800];

        $('.text').each(function (index) { 
            let $element = $(this);
            let scrollPoint = scrollValue[index];

            if (scrollTop > scrollPoint) {
                $element.css({ 
                    'transform' : '',
                    'opacity' : '1',
                    'transition' : 'transform 500ms, opacity 1000ms'
                });
            } else {
                $element.css({ 
                    'transform' : 'translateY(-100px)',
                    'opacity' : '0',
                    'transition' : 'transform 500ms, opacity 1000ms'
                });
            }
        });
    });

    
});
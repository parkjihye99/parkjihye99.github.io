$(function(){ 
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

    // 메인배너
    // (스크롤 내릴 때 배너 크기만큼 보여지게)

    // 카테고리 영역
    const INTERVAL = 3000;
    const $product = $('#product');
    let timerId = window.setInterval(slideList, INTERVAL);

    $product.parent().on({
        mouseenter: function () { 
            window.clearInterval(timerId);
        },
        mouseleave: function () { 
            timerId = window.setInterval(slideList, INTERVAL);
        }
        
    });
    
    $('#p-next').on('click', slideList);
    $('#p-prev').on('click', function () { 
        $product.prepend( $product.children(':last'))
            .css('margin-left', '-25%').animate({ marginLeft: 0});
    });

    function slideList () {
        $product.animate({ marginLeft: '-25%'}, function () { 
            $product.removeAttr('style').children(':first').appendTo(this);
        });
    };

    // spring 영역
    const $spring = $('#spring-product');

    $('#s-next').on('click', springList);
    $('#s-prev').on('click', function () { 
        $spring.prepend( $spring.children(':last'))
            .css('margin-left', '-360px').animate({ marginLeft: 0});
    });

    function springList () { 
        $spring.animate({ marginLeft: '-360px'}, function () { 
            $spring.removeAttr('style').children(':first').appendTo(this);
        });
    };
});
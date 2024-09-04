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
    

    // 세부 필터 적용
    $("#filter").on("click", function () { 
        $("#modal, #filter-popup").show();
        return false;
    });
    $("#close, #modal").on("click", function() { 
        $("#modal, #filter-popup").fadeOut();
        return false;
    });

    // 아코디언 기능
    const $filter = $('.filter-content');

    $filter.eq(0).addClass('on').show();
    $('#recommend').prop('checked', true);

    let click = 0;

    $('#filter-type > li > button').on('click', function () { 
        const index = $(this).attr('data-index')

        if (click % 2 == 0) {
            $filter.eq(index).slideDown();
            $filter.not($filter.eq(index)).slideUp();
        } else {
            $filter.eq(index).slideUp();
        }
        click += 0;
    });

    $('#reset').on('click', function () { 
        $('input[type="checkbox"]').add('input[type="radio"]').prop('checked', false);
        $('#recommend').prop('checked', true);
    });

});
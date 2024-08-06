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

    // list-product
    const $listProduct = $('#listproduct');

    $('#list-next').on('click', list);
    $('#list-prev').on('click', function () { 
        $listProduct.prepend( $listProduct.children(':last'))
            .css('margin-left', '-230px').animate({ marginLeft: 0});
    });

    function list () { 
        $listProduct.animate({ marginLeft: '-230px'}, function () { 
            $listProduct.removeAttr('style').children(':first').appendTo(this);
        });
    };

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
    const $filterButton = $('#filter-type > li');
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
$(function(){ 
    // 내비게이션 영역
    $("#nav-bottom > li").on("mouseenter", function(){ 
        $(".nav-slide").stop().slideUp();
        $(this).children(".nav-slide").stop().slideDown();
    });
    $("#nav-bottom > li").on("mouseleave", function(){ 
        $(this).children(".nav-slide").stop().slideUp();
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
    
    // category 버튼
    const $category = $('#category');
    const $categoryBox = $('#category-box');
    const scrollValue = 395 + 10;

    $('#c-prev').on('click', function () { 
        $category.animate({
            scrollLeft : $category.scrollLeft() - scrollValue
        }, 300);
    });

    $('#c-next').on('click', function () { 
        $category.animate({
            scrollLeft : $category.scrollLeft() + scrollValue
        }, 300);
    });

    $categoryBox.on('mouseenter', function () { 
        $category.css({ 
            overflowX : 'auto',
            paddingBottom : '36px'
        });
    });
    $categoryBox.on('mouseleave', function () { 
        $category.css({
            overflowX : 'hidden',
            paddingBottom : '50px'
        });
    });


    // rokh 이미지 슬라이드
    let currentIndex = 0;
    const images = $('#rokh-slide > li');
    const imageCount = images.length;
    const INTERVAL = 4000;

    images.hide().eq(currentIndex).show();

    function showNextImage() {
        images.eq(currentIndex).fadeOut(1000, function () { 
            currentIndex = (currentIndex + 1) % imageCount;
            images.eq(currentIndex).fadeIn(1000);
        });
    }

    function showPrevImage() {
        images.eq(currentIndex).fadeOut(1000, function () { 
            currentIndex = (currentIndex - 1 + imageCount) % imageCount;
            images.eq(currentIndex).fadeIn(1000);
        });
    }

    let slideInterval = setInterval(showNextImage, INTERVAL);

    images.parent().on({
        mouseenter: function () { 
            window.clearInterval(slideInterval);
        },
        mouseleave: function () {
            slideInterval = setInterval(showNextImage, INTERVAL);
        }
    });

    $('#r-next').on('click', function () { 
        clearInterval(slideInterval);
        showNextImage();
        slideInterval = setInterval(showNextImage, INTERVAL);
    });

    $('#r-prev').on('click', function () { 
        clearInterval(slideInterval);
        showPrevImage();
        slideInterval = setInterval(showPrevImage, INTERVAL);
    });
    
    


});
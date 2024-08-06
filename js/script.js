$(function(){ 
    // 메인페이지
    const $boxTab = $('#content1-box > #box-introduce, #box-education, #box-contact');

    $('#tab-menu > li').on('click', function () { 
        if ($(this).is('.on')) return;

        $(this).addClass('on').siblings().removeClass('on');
        $boxTab.removeClass('on');

        var n = $(this).index();
        $boxTab.slideUp();
        $boxTab.eq(n).slideDown();

        return false;
    });
    

    // 이직 페이지
    const $company = $('#content3-box > #turnover, #correlation');

    $("#tab-menu2 > li").on("click", function(){ 
        if ($(this).is('.on')) return;

        $(this).addClass('on').siblings().removeClass('on');

        $company.removeClass('on');

        var i = $(this).index();
        $company.slideUp();
        $company.eq(i).slideDown();

        return false;
    });


    // 메인
    $("#box-introduce").on("click", function(){ 
        $("#tab-menu").removeClass("tab-1 tab-3").addClass("tab-2");
        $(this).slideUp();
        $("#box-education").slideDown();
        return false;
    });
    $("#box-education").on("click", function(){ 
        $("#tab-menu").removeClass("tab-1 tab-2").addClass("tab-3");
        $(this).slideUp();
        $("#box-contact").slideDown();
        return false;
    });
    $("#box-contact").on("click", function(){ 
        $("#tab-menu").removeClass("tab-2 tab-3").addClass("tab-1");
        $(this).slideUp();
        $("#box-introduce").slideDown();
        return false;
    });



    // 이직
    $("#turnover").on("click", function(){ 
        $("#tab-menu2").removeClass("tab-4").addClass("tab-5")
        $(this).slideUp();
        $("#correlation").slideDown();
    });
    $("#correlation").on("click", function(){ 
        $("#tab-menu2").removeClass("tab-5").addClass("tab-4")
        $(this).slideUp();
        $("#turnover").slideDown();
    });
    
    
    // 탭 불릿 이동
    // 메인페이지
    $("#tab-menu > li:nth-child(1)").on("click", function(){ 
        $("#tab-menu").removeClass("tab-2 tab-3").addClass("tab-1");
        return false;
    });
    $("#tab-menu > li:nth-child(2)").on("click", function(){ 
        $("#tab-menu").removeClass("tab-1 tab-3").addClass("tab-2");
        return false;
    });
    $("#tab-menu > li:nth-child(3)").on("click", function(){ 
        $("#tab-menu").removeClass("tab-1 tab-2").addClass("tab-3");
        return false;
    });
    

    // 이직페이지
    $("#tab-menu2 > li:first-child").on("click", function(){ 
        $("#tab-menu2").removeClass("tab-5").addClass("tab-4")
    });
    $("#tab-menu2 > li:last-child").on("click", function(){ 
        $("#tab-menu2").removeClass("tab-4").addClass("tab-5")
    });


    // 성격페이지
    // 팝업1
    $("#personality-pp1").on("click", function(){ 
        $("#personality-pp1 > img").animate({width:0}, 400);
        $("#personality-popup1").fadeIn(800);
        return false;
    });
    $("#personality-popup1 > .popup-button").on("click", function(){ 
        $("#personality-popup1").fadeOut(500);
        $("#personality-pp1 > img").animate({width:100}, 400);
        return false;
    });

    // 팝업2
    $("#personality-pp2").on("click", function(){ 
        $("#personality-pp2 > img").animate({width:0}, 400);
        $("#personality-popup2").fadeIn(800);
        return false;
    });
    $("#personality-popup2 > .popup-button").on("click", function(){ 
        $("#personality-popup2").fadeOut(500);
        $("#personality-pp2 > img").animate({width:100}, 400);
        return false;
    });

    // 팝업3
    $("#personality-pp3").on("click", function(){ 
        $("#personality-pp3 > img").animate({width:0}, 400);
        $("#personality-popup3").fadeIn(800);
        return false;
    });
    $("#personality-popup3 > .popup-button").on("click", function(){ 
        $("#personality-popup3").fadeOut(500);
        $("#personality-pp3 > img").animate({width:100}, 400);
        return false;
    });

    const $overlayClose = $('#overlayClose');
    const $workList = $('#work > ul > li > a');
    const $photo = $('#photo');
    let imageIndex = 0;

    // 오버레이
    $workList.not('#museum-layer').on('click', function (event) { 
        event.preventDefault();

        imageIndex = $workList.index(this);

        $photo.attr('src', this.href);
        $overlayClose.fadeIn(function () { 
            $photo.fadeIn();
        });
    });

    $overlayClose.on('click', function () { 
        $photo.fadeOut(function () { 
            $overlayClose.fadeOut();
        });
    });

    $photo.on('click', function (event) { 
        event.stopPropagation();
    });

    const $overlay = $('#overlay');
    const $museumLayer = $('#museum-layer');
    const $museum = $('#museum > li > img');
    const $photoM = $('#m-photo');
    let photoIndex = 0;

    // 오버레이 박물관
    $museumLayer.on('click', function (event) { 
        event.preventDefault();

        photoIndex = $museumLayer.index(this);

        $photoM.attr('src', this.src);
        $overlay.fadeIn(function () { 
            $photoM.fadeIn();
        });
    });

    $('.close').on('click', function () { 
        $photoM.fadeOut(function () { 
            $overlay.fadeOut();
        });
    });

    $photoM.on('click', function (event) { 
        event.stopPropagation();
    });

    // next
    $('#next').on('click', function (event) { 
        event.preventDefault();

        photoIndex++;
        photoIndex %= $museum.length;
        
        changeImage();
    });

    // prev
    $('#prev').on('click', function (event) { 
        event.preventDefault();

        photoIndex--;
        if (photoIndex < 0) photoIndex = $museum.length - 1;

        changeImage();
    });

    function changeImage () { 
        $photoM.fadeOut(function () { 
            $photoM.attr('src', $museum.eq(photoIndex).attr('src')).fadeIn();
        });
    };


});

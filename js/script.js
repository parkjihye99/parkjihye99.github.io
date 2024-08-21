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
    function switchTab (currentTab, nextTab, tabClass) { 
        $('#tab-menu').removeClass('tab-1 tab-2 tab-3').addClass(tabClass);
        $(currentTab).slideUp();
        $(nextTab).slideDown();
    };

    $('#box-introduce').on('click', function () { 
        switchTab(this, '#box-education', 'tab-2');
        return false;
    });
    $('#box-education').on('click', function () { 
        switchTab(this, '#box-contact', 'tab-3');
        return false;
    });
    $('#box-contact').on('click', function () { 
        switchTab(this, '#box-introduce', 'tab-1');
        return false;
    });

    $('#hobby > li > img, #contact-box > li').on('click', function (event) { 
        event.stopPropagation();
    });



    // 이직
    function switchTab2 (currentTab, nextTab, tabClass) {
        $('#tab-menu2').removeClass('tab-4 tab-5').addClass(tabClass);
        $(currentTab).slideUp();
        $(nextTab).slideDown();
    };
    $('#turnover').on('click', function () { 
        switchTab2(this, '#correlation', 'tab-5');
    });
    $('#correlation').on('click', function () { 
        switchTab2(this, '#turnover', 'tab-4');
    });

    $('.workplace > img').on('click', function (event) { 
        event.stopPropagation();
    });

    
    // 탭 불릿 이동
    // 메인페이지
    $('#tab-menu > li').on('click', function () { 
        const index = $(this).index() + 1;
        $('#tab-menu').removeClass('tab-1 tab-2 tab-3').addClass(`tab-${index}`);
        return false;
    });
    

    // 이직페이지
    $("#tab-menu2 > li").on("click", function(){ 
        if ($(this).is(':first-child')) {
            $("#tab-menu2").removeClass("tab-5").addClass("tab-4");
        } 
        else if ($(this).is(':last-child')) {
            $("#tab-menu2").removeClass("tab-4").addClass("tab-5");
        }
    });

    $('#tab-menu2 > li > a').on('click', function (event) { 
        event.preventDefault();
    });



    // 성격페이지
    function popup (pp, ppPopup) {
        $(pp).on('click', function () { 
            $(`${pp} > img`).animate({ width : 0 }, 400);
            $(ppPopup).fadeIn(800);
            return false;
        });

        $(`${ppPopup} > .popup-button`).on('click', function () { 
            $(ppPopup).fadeOut(500);
            $(`${pp} > img`).animate({ width : 100}, 400);
            return false;
        });
    }

    popup('#personality-pp1', '#personality-popup1');
    popup('#personality-pp2', '#personality-popup2');
    popup('#personality-pp3', '#personality-popup3');



    
    // 오버레이
    const $overlayClose = $('#overlayClose');
    const $workList = $('#work > ul > li > a');
    const $photo = $('#photo');
    let imageIndex = 0;

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

    // 오버레이 - 박물관
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

    // nav 요소 클릭
    $('#nav > nav > ul > li > a').on('click', function (event) { 
        event.preventDefault();
        
        let target = $(this.hash);

        if (target.length) {
            $('html, body').animate({ 
                scrollTop : target.offset().top
            }, 600);
        }
    });


    // top 버튼, home 버튼
   $('#button, #nav > nav > h1 > a').on('click', function () { 
        $('html, body').animate({ scrollTop : 0}, 600);
        return false;
   });


});

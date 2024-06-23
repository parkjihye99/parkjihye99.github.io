$(function(){ 
    // 내비게이션 영역
    $("#nav-bottom > li").on("mouseenter", function(){ 
        $(".nav-slide").stop().slideUp();
        $(this).children(".nav-slide").stop().slideDown();
    });
    $("#nav-bottom > li").on("mouseleave", function(){ 
        $(this).children(".nav-slide").stop().slideUp();
    });

    // 메인배너
    // (스크롤 내릴 때 배너 크기만큼 보여지게)

    // 카테고리 영역
    // 무한반복X, 버튼 슬라이드

    // spring 영역
    // 무한반복, 닷버튼, 버튼 슬라이드
});
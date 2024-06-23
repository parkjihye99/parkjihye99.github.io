$(function(){ 
    // 내비게이션 영역
    $("#nav-bottom > li").on("mouseenter", function(){ 
        $(".nav-slide").stop().slideUp();
        $(this).children(".nav-slide").stop().slideDown();
    });
    $("#nav-bottom > li").on("mouseleave", function(){ 
        $(this).children(".nav-slide").stop().slideUp();
    });
});
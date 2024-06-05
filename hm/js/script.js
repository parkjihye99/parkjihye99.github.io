$(function(){ 
    // sub1
    // $("#nav-bottom > li:nth-child(1)").mouseenter(function(){ 
    //     $("#sub-1").stop().slideDown();
    // });
    // $("#nav-bottom > li:nth-child(1)").mouseleave(function(){ 
    //     $("#sub-1").stop().slideUp();
    // });

    $("#nav-bottom > li").mouseenter(function(){ 
        $(".nav-slide").stop().slideDown();
    });
    $("#nav-bottom > li").mouseleave(function(){ 
        $(".nav-slide").stop().slideUp();
    });

    // $("#nav-bottom > li").on("mouseover", function(){ 
    //     $(".nav-slide").stop().slideUp();
    //     $(this).children(".nav-slide").stop().slideDown();
    // });
    // $("#nav-bottom > li").on("mouseleave", function(){ 
    //     $(this).children(".nav-slide").stop().slideUp();
    // });
    
    // sub2
    // $("#nav-bottom > li:nth-child(2)").mouseenter(function(){ 
    //     $("#sub-2").stop().slideDown();
    // });
    // $("#nav-bottom > li:nth-child(2)").mouseleave(function(){ 
    //     $("#sub-2").stop().slideUp();
    // });
    
    // sub3
    $("#nav-bottom > li:nth-child(3)").mouseenter(function(){ 
        $("#sub3").stop().slideDown();
    });
    $("#nav-bottom > li:nth-child(3)").mouseleave(function(){ 
        $("#sub3").stop().slideUp();
    });
    
    // sub4
    $("#nav-bottom > li:nth-child(4)").mouseenter(function(){ 
        $("#sub4").stop().slideDown();
    });
    $("#nav-bottom > li:nth-child(4)").mouseleave(function(){ 
        $("#sub4").stop().slideUp();
    });
    
    // sub5
    $("#nav-bottom > li:nth-child(5)").mouseenter(function(){ 
        $("#sub5").stop().slideDown();
    });
    $("#nav-bottom > li:nth-child(5)").mouseleave(function(){ 
        $("#sub5").stop().slideUp();
    });
    
    // sub6
    $("#nav-bottom > li:nth-child(6)").mouseenter(function(){ 
        $("#sub6").stop().slideDown();
    });
    $("#nav-bottom > li:nth-child(6)").mouseleave(function(){ 
        $("#sub6").stop().slideUp();
    });

    

    // 메인배너 스크롤
    // let $html = $("html").animate({scrollTop: "-200px"});
    // let $page = $("#page");

    // window.addEventListener("wheel", function(event){ 
    //     event.preventDefault();

    //     if($html.is(":animated")) return;

    //     let delta = event.deltaY;

    //     let pageHeight = $page.innerHeight();

    //     let currentScrollTop = $html.scrollTop();

    //     let distance = 0;

    //     if(delta > 0) {
    //         let over = currentScrollTop % pageHeight;

    //         distance = currentScrollTop + pageHeight - over;
    //     }
    //     else {
    //         let over = currentScrollTop % pageHeight;

    //         if (over ==0) distance = currentScrollTop - pageHeight;
    //         else          distance = currentScrollTop - over;
    //     }

    //     $html.animate({scrollTop: distance});
    // }, {passive:false});
});
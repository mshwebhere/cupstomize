// 서브 메뉴
$(function () {
    $("#gnb, #logo, .sub_bg").hover(
        function () {
            $(".sub").stop().slideDown();
            $(".sub_bg").stop().slideDown();
            $(".logo_front").stop().css({ "opacity": "0" });
            $(".logo_back").stop().css({ "opacity": "1" });
            $(".logo_front, .logo_back").stop().css({ "padding-top": "120px" });
        },
        function () {
            $(".sub").stop().slideUp();
            $(".sub_bg").stop().slideUp();
            $(".logo_front").stop().css({ "opacity": "1" });
            $(".logo_back").stop().css({ "opacity": "0" });
            $(".logo_front, .logo_back").stop().css({ "padding-top": "50px" });
        }
    );
});

// 어사이드 맨위로 가기
$(function () {
    $(".aside_top>img").click(
        function () {
            $("html,body").animate({ scrollTop: $("html").offset().top }, 1000);
        });
});
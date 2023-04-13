// 브랜드 컬러 hover
$(function () {
    $(".brand_color").hover(
        function () {
            var thisLeft = $(this).css("left");
            $(this).next(".color_hover").css({
                "left": thisLeft,
                "display": "block",
            });
        },
        function () {
            $(this).next(".color_hover").css({
                "display": "none",
            });
        });
});
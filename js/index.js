// 메인 배너 slide
$(function () {
    $(".main_banner").slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        prevArrow: "<img src='./images/left-arrow.png' alt='prev' class='slick-prev posi_abs'>",
        nextArrow: "<img src='./images/right-arrow.png' alt='next' class='slick-next posi_abs'>",
    });
});

// 커스텀 배너 slide
var swiper = new Swiper(".custom_banner", {
    spaceBetween: 30,
    centeredSlides: true,
    resistance: true,
    allowTouchMove: true,
    loop: true,
    autoplay: {
        delay: 2000,
        disableOnInteraction: true,
    },
});

// 커스텀 배너 bg 변경
setInterval(function () {
    if ($(".strawberry").hasClass("swiper-slide-active")) {
        $(".custom_banner").css({ "background-color": "#ffd5d8" });
        $(".custom_banner_text_left, .custom_banner_text_right").css({ "color": "#d80000" });
        $(".custom_banner_arrow path").css({ "fill": "#d80000" });
        $(".custom_banner_undercolor").css({ "background-color": "#6db83a" });

    }
    else if ($(".cream").hasClass("swiper-slide-active")) {
        $(".custom_banner").css({ "background-color": "#fef2de" });
        $(".custom_banner_text_left, .custom_banner_text_right").css({ "color": "#bf1e2e" });
        $(".custom_banner_arrow path").css({ "fill": "#bf1e2e" });
        $(".custom_banner_undercolor").css({ "background-color": "#e28564" });
    }
    else {
        $(".custom_banner").css({ "background-color": "#4c2c2d" });
        $(".custom_banner_text_left, .custom_banner_text_right").css({ "color": "#ffd0a7" });
        $(".custom_banner_arrow path").css({ "fill": "#ffd0a7" });
        $(".custom_banner_undercolor").css({ "background-color": "#6577ff" });
    }
}, 1);

// 인테리어 & 이벤트 SVG 애니메이션
$(".bubble").hover(
    function () {
        $(".svg_eye").attr("r", "1.8")
        $(".svg_mouth").attr("d", "M49.1,57c-5,0-6.8-5.4-8.4-7.9c-0.4-0.3-0.5-1-0.2-1.4s1-0.5,1.4-0.2c8.3-0.2,14-0.2,14.4-0.4   c0.7-0.3,1-0.3,1.4,0.1c0.4,0.4,0.3,1-0.1,1.4C57.6,48.6,55.4,57,49.1,57z")
        // path d 수 수정 필요
    },
    function () {
        $(".svg_eye").attr("r", "1.2")
        $(".svg_mouth").attr("d", "M48.8,51.9c-2.4,0-5.2-0.7-8.1-2.8c-0.4-0.3-0.5-1-0.2-1.4c0.3-0.4,1-0.5,1.4-0.2c7.7,5.7,14.1-0.1,14.4-0.4   c0.4-0.4,1-0.3,1.4,0.1c0.4,0.4,0.3,1-0.1,1.4C57.6,48.6,54,51.9,48.8,51.9z")
    });
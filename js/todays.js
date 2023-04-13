// 이벤트 상태 텍스트
$(function () {
    $(".event_ing .banner_tag").text("이벤트");
    $(".event_end .banner_tag").text("종료");
    $(".event_notice .banner_tag").text("공지");
});

// 드롭다운 선택 시 종류에 따라 보이게 하기
$(function () {
    setInterval(function () {
        var pageSelected = $('#event_state option:selected').val();
        if (pageSelected == "all") {
            $(".event_list li").show()
        } else if (pageSelected == "ing") {
            $(".event_list li").not(".event_ing").hide();
            $(".event_ing").show();
        } else if (pageSelected == "notice") {
            $(".event_list li").not(".event_notice").hide();
            $(".event_notice").show();
        } else if (pageSelected == "end") {
            $(".event_list li").not(".event_end").hide();
            $(".event_end").show();
        }
    }, 1);
});
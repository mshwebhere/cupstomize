$(function () {
    // 팝업 텍스트 shadow 빼고 stroke 색 바꾸기. . ..
    var topBase = function () {
        $("#custom_completion").css({ "top": "52vh" });
    };
    var topNotBase = function () {
        $("#custom_completion").css({ "top": "46vh" });
    };

    // 선택 안 하면 이동 불가 & 클릭 시 이동
    // base
    var selectBase = "unClicked"
    $('input[name = base_checker]').click(function () {
        selectBase = "Clicked"
    });

    $(".btn_next_base").click(function () {
        if (selectBase == "unClicked") {
            alert("옵션을 선택해 주세요.");
        } else {
            const offset = $(".custom_sec_cream").offset();
            $('html, body').animate({ scrollTop: offset.top + "-140" * 1 }, 500);
            topNotBase();
        };
    });

    // cream
    var selectCream = "unClicked"
    $('input[name = cream_checker]').click(function () {
        selectCream = "Clicked"
    });

    $(".btn_next_cream").click(function () {
        if (selectCream == "unClicked") {
            alert("옵션을 선택해 주세요.");
        } else {
            const offset = $(".custom_sec_topping").offset();
            $('html, body').animate({ scrollTop: offset.top }, 500);
        };
    });

    $(".btn_prev_cream").click(function () {
        const offset = $("html").offset();
        $('html, body').animate({ scrollTop: offset.top }, 500);
        topBase();
    });

    // topping
    var selectTopping = "unClicked"
    $('input[name = topping_checker]').click(function () {
        selectTopping = "Clicked"
    });

    $(".btn_next_topping").click(function () {
        if (selectTopping == "unClicked") {
            alert("옵션을 선택해 주세요.");
        } else if (selectBase == "unClicked" || selectCream == "unClicked" || selectTopping == "unClicked") {
            alert("선택하지 않은 옵션이 있습니다.\n모든 옵션을 한 가지 이상 선택해 주세요.");
        }
        else {
            $(".result_popup").fadeIn();
            $(".result_popup").css({ "display": "flex" });
            // SVG 이미지 삽입
            $(".result_cupcake").html($("#custom_completion").html());
            // 결과 텍스트
            $(".result_base").text(baseOption);
            $(".result_cream").text(creamOption);
            $(".result_topping").text(toppingOption);
        };
    });

    $(".btn_prev_topping").click(function () {
        const offset = $(".custom_sec_cream").offset();
        $('html, body').animate({ scrollTop: offset.top + "-140" * 1 }, 500)
        topNotBase();
    });


    // 베이스 색 변경
    var baseOption = "none";
    const baseColor = $("#custom_svg_base");
    setInterval(function () {
        if ($("#base_crunch").is(":checked")) {
            baseOption = "고소 크런치"; // 베이스 옵션: 고소 크런치
        } else if ($("#base_cranberry").is(":checked")) {
            baseOption = "새콤 크랜베리"; // 베이스 옵션: 새콤 크랜베리
        } else if ($("#base_sweetchoco").is(":checked")) {
            baseOption = "달콤 초콜릿"; // 베이스 옵션: 달콤 초콜릿
        }

        if (baseOption == "고소 크런치") {
            baseColor.children().attr("fill", "#f6a400"); // 베이스 옵션: 고소 크런치 색상 지정
        } else if (baseOption == "새콤 크랜베리") {
            baseColor.children().attr("fill", "#da2c39"); // 베이스 옵션: 새콤 크랜베리 색상 지정
        } else if (baseOption == "달콤 초콜릿") {
            baseColor.children().attr("fill", "#511d08"); // 베이스 옵션: 달콤 초콜릿 색상 지정
        } else {
            baseColor.children().attr("fill", "#000");  // 베이스 미선택 색상 지정
        }
    }, 1);


    // 크림 색 변경
    var creamOption = "none";
    const creamColor = $("#custom_svg_cream");
    setInterval(function () {
        if ($("#cream_whipping").is(":checked")) {
            creamOption = "휘핑 크림"; // 크림 옵션: 휘핑 크림
        } else if ($("#cream_strawberryice").is(":checked")) {
            creamOption = "딸기 아이스크림"; // 크림 옵션: 딸기 아이스크림
        } else if ($("#cream_chococream").is(":checked")) {
            creamOption = "초코 크림"; // 크림 옵션: 초코 크림
        } else if ($("#cream_matchacream").is(":checked")) {
            creamOption = "말차 크림"; // 크림 옵션: 말차 크림
        } else if ($("#cream_yogurt").is(":checked")) {
            creamOption = "요거트"; // 크림 옵션: 요거트
        } else if ($("#cream_chouxcream").is(":checked")) {
            creamOption = "슈크림"; // 크림 옵션: 슈크림
        }

        if (creamOption == "휘핑 크림") {
            creamColor.children().attr("fill", "#f8edd9"); // 크림 옵션: 휘핑 크림 색상 지정
        } else if (creamOption == "딸기 아이스크림") {
            creamColor.children().attr("fill", "#f29e8b"); // 크림 옵션: 딸기 아이스크림 색상 지정
        } else if (creamOption == "초코 크림") {
            creamColor.children().attr("fill", "#5d2419"); // 크림 옵션: 초코 크림 색상 지정
        } else if (creamOption == "말차 크림") {
            creamColor.children().attr("fill", "#527a00"); // 크림 옵션: 말차 크림 색상 지정
        } else if (creamOption == "요거트") {
            creamColor.children().attr("fill", "#e9f5fd"); // 크림 옵션: 요거트 색상 지정
        } else if (creamOption == "슈크림") {
            creamColor.children().attr("fill", "#ffe5ab"); // 크림 옵션: 슈크림 색상 지정
        } else {
            creamColor.children().attr("fill", "#000");  // 크림 미선택 색상 지정
        }
    }, 1);


    // 토핑 색 변경
    var toppingOption = "none";
    const toppingColor = $("#custom_svg_topping");
    setInterval(function () {
        if ($("#topping_sprinkle").is(":checked")) {
            toppingOption = "레인보우 스프링클"; // 토핑 옵션: 레인보우 스프링클
        } else if ($("#topping_vanillamacaron").is(":checked")) {
            toppingOption = "바닐라 마카롱"; // 토핑 옵션: 바닐라 마카롱
        } else if ($("#topping_chocolate").is(":checked")) {
            toppingOption = "초콜릿"; // 토핑 옵션: 초콜릿
        } else if ($("#topping_chocochipcookie").is(":checked")) {
            toppingOption = "초코칩 쿠키"; // 토핑 옵션: 초코칩 쿠키
        } else if ($("#topping_orange").is(":checked")) {
            toppingOption = "오렌지"; // 토핑 옵션: 오렌지
        } else if ($("#topping_cherry").is(":checked")) {
            toppingOption = "체리"; // 토핑 옵션: 체리
        }

        if (toppingOption == "레인보우 스프링클") {
            toppingColor.children().attr("fill", "#ff2e5f"); // 토핑 옵션: 레인보우 스프링클 색상 지정
        } else if (toppingOption == "바닐라 마카롱") {
            toppingColor.children().attr("fill", "#f8d2a6"); // 토핑 옵션: 바닐라 마카롱 색상 지정
        } else if (toppingOption == "초콜릿") {
            toppingColor.children().attr("fill", "#50342a"); // 토핑 옵션: 초콜릿 색상 지정
        } else if (toppingOption == "초코칩 쿠키") {
            toppingColor.children().attr("fill", "#dd9251"); // 토핑 옵션: 초코칩 쿠키 색상 지정
        } else if (toppingOption == "오렌지") {
            toppingColor.children().attr("fill", "#ff7200"); // 토핑 옵션: 오렌지 색상 지정
        } else if (toppingOption == "체리") {
            toppingColor.children().attr("fill", "#e10d19"); // 토핑 옵션: 체리 색상 지정
        } else {
            toppingColor.children().attr("fill", "#000");  // 토핑 미선택 색상 지정
        }
    }, 1);

    // 처음부터 다시 선택
    $(".btn_reset").click(function () {
        $('html, body').animate({ scrollTop: $("html").offset().top });
        // 결과 팝업창 숨기기
        $(".result_popup").fadeOut();
        $(".result_popup").css({ "display": "none" });
        // 선택 옵션 리셋
        selectBase = "unClicked";
        selectCream = "unClicked"
        selectTopping = "unClicked"
        baseOption = "none";
        creamOption = "none";
        toppingOption = "none";
        $("input[type=radio]").prop("checked", false);
        topBase();
    });
});
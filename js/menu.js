// .menu_tab_cherry animate
$(function () {
    $("#menu_all").siblings(".menu_tab_cherry").css({
        "opacity": "1",
        "top": "1%",
    });
    $(".menu_item").click(function () {
        $(this).siblings(".menu_tab_cherry").stop().animate({
            "opacity": "1",
            "top": "0.5%",
        }, 500);
        $(".menu_tab_cherry").not($(this).siblings(".menu_tab_cherry")).stop().css({
            "opacity": "0",
            "top": "-10%",
        });
    });
});

// 메뉴 탭
$(function () {
    $("input[type=radio]").click(function () {
        var id = $(this).attr("id");
        if (id == "menu_all") {
            $(".menu_div").slideDown();
        }
        else {
            $(".menu_div." + id).slideDown();
            $(".menu_div").not("div." + id).slideUp();
        };
        if (id == "menu_new" || id == "menu_special") {
            $(".height").css({
                backgroundColor: "#fff7ea",
            })
        }
        else {
            $(".height").css({
                backgroundColor: "#ffece5",
            })
        };
    });
});

// .special_hover 설명 팝업
$(function () {
    $(".special_icon").hover(
        function () {
            $(this).next(".special_hover").css({ "opacity": "1" });
        },
        function () {
            $(this).next(".special_hover").css({ "opacity": "0" });
        },
    );
});

// .menu_popup 팝업
$(function () {
    $("button").click(
        function () {
            $(".menu_popup").fadeIn();
            $(".menu_popup").css({ "display": "flex" });
        });

    $(".xbutton").click(
        function () {
            $(".menu_popup").fadeOut();
        });
});

// .menu_popup 팝업 내용 (제품 정보) 생성자
function Menu(name, engname, exp, gram, kcal, sugar, protein, fat, sodium, satfat, alinfo) {
    this.name = name;
    this.engname = engname;
    this.exp = exp;
    this.gram = gram;
    this.kcal = kcal;
    this.sugar = sugar;
    this.protein = protein;
    this.fat = fat;
    this.sodium = sodium;
    this.satfat = satfat;
    this.alinfo = alinfo;
}

var waterfulwatermelon = new Menu(
    "워터풀 수박",
    "Waterful Watermelon",
    "부드러운 컵케이크와 달콤한 수박의 시원한 만남!",
    "332",
    "352",
    "18",
    "4",
    "10",
    "0.2",
    "10",
    "밀, 대두, 난류, 우유");

var meltingbrownie = new Menu(
    "멜팅 브라우니",
    "melting brownie",
    "사르르 녹는 초코 브라우니의 매력에 풍덩!",
    "342",
    "397",
    "25",
    "9",
    "13",
    "0.2",
    "11",
    "밀, 우유, 난류, 견과류");

var chocoroche = new Menu(
    "초코 로셰",
    "choco roche",
    "진한 초콜릿과 고소한 견과류의 재미난 조화",
    "376",
    "432",
    "32",
    "11",
    "15",
    "0.4",
    "12",
    "밀, 우유, 난류, 견과류");

var cookieandcream = new Menu(
    "쿠키 앤 크림",
    "cookie and cream",
    "달콤쌉싸름한 맛이 매력인 쿠키 앤 크림",
    "340",
    "389",
    "19",
    "9",
    "10",
    "0.2",
    "8",
    "밀, 우유, 난류");

var honeywaffle = new Menu(
    "허니 와플",
    "honeywaffle",
    "달콤한 꿀과 와플이 컵케이크에 콕!",
    "320",
    "353",
    "13",
    "11",
    "12",
    "0.4",
    "10",
    "밀, 우유, 난류, 견과류");

var mintchocolate = new Menu(
    "민트 초콜릿",
    "mint chocolate",
    "디저트계의 스테디셀러, 민트 초콜릿",
    "320",
    "311",
    "12",
    "9",
    "11",
    "0.4",
    "9",
    "밀, 우유, 난류");

var custardberry = new Menu(
    "커스터드 베리",
    "custard berry",
    "상큼한 베리가 토핑된 커스터드 컵케이크",
    "380",
    "324",
    "9",
    "6",
    "8",
    "0.2",
    "3",
    "밀, 대두, 복숭아");

var cherryglass = new Menu(
    "체리 글라스",
    "cherry glass",
    "체리맛 사탕으로 장식된 상큼한 컵케이크",
    "362",
    "311",
    "11",
    "7",
    "9",
    "0.5",
    "6",
    "대두, 난류, 복숭아");

var strawberryyogurt = new Menu(
    "딸기 요거트",
    "strawberry yogurt",
    "담백한 컵케이크 위에 상큼달콤한 딸기 요거트 크림이!",
    "330",
    "336",
    "12",
    "8",
    "11",
    "0.2",
    "8",
    "밀, 대두, 난류, 복숭아");

var chocomilkshake = new Menu(
    "초코 듬뿍 밀크셰이크",
    "chocofully milkshake",
    "부드러운 밀크셰이크에 깊고 진한 초코가 듬뿍!",
    "600",
    "396",
    "52",
    "9",
    "12",
    "0.1",
    "10",
    "우유, 견과류");

var iceamericano = new Menu(
    "아이스 아메리카노",
    "ice americano",
    "깊은 풍미를 느낄 수 있는 시원한 커피",
    "355",
    "15",
    "0",
    "0",
    "0",
    "1",
    "0",
    "없음(카페인 156mg)");

var matchalatte = new Menu(
    "말차 라떼",
    "matcha latte",
    "쌉싸름한 말차와 고소한 우유가 어우러진 말차 라떼",
    "355",
    "155",
    "16",
    "6",
    "6",
    "95",
    "3.6",
    "우유");


// .menu_popup 팝업 내용 변경
$(function () {
    $("button").click(function () {
        // 이름 - 영어 이름 - 설명 - 1회 제공량 - 열량 - 당류 - 단백질 - 지방 - 나트륨 - 포화 지방 - 알레르기 정보
        $(".bubble_item_name").text(new Function("return " + $(this).attr("id"))().name),
            $(".bubble_item_name_en").text(new Function("return " + $(this).attr("id"))().engname),
            $(".bubble_item_exp").text(new Function("return " + $(this).attr("id"))().exp),
            $(".nut_gram").text(new Function("return " + $(this).attr("id"))().gram),
            $(".nut_kcal").text(new Function("return " + $(this).attr("id"))().kcal),
            $(".nut_sugar").text(new Function("return " + $(this).attr("id"))().sugar),
            $(".nut_protein").text(new Function("return " + $(this).attr("id"))().protein),
            $(".nut_fat").text(new Function("return " + $(this).attr("id"))().fat),
            $(".nut_sodium").text(new Function("return " + $(this).attr("id"))().sodium),
            $(".nut_satfat").text(new Function("return " + $(this).attr("id"))().satfat),
            $(".nut_allergy_info").text(new Function("return " + $(this).attr("id"))().alinfo),
            // 팝업 메뉴 이미지 자동 변경
            $(".popup_cupcake").html($(this).siblings("div").html())
    });
});
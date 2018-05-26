window.onload = function () {
    document.querySelector("#introBanner").onclick = function () {
        document.querySelector("#intro").scrollIntoView(true);
    }
    document.querySelector("#lunboBanner").onclick = function () {
        document.querySelector("#lunbo").scrollIntoView(true);
    }
    document.querySelector("#mendianBanner").onclick = function () {
        document.querySelector("#mendian").scrollIntoView(true);
    }
}

layui.use(['jquery'], function () {
    var $ = layui.jquery;

    $("#lunboHead1").click(function () {
        changeLunboClass();
        $(this).addClass("lunboHeadSelect");
        $("#lunbo1").css("display","block");
    });
    $("#lunboHead2").click(function () {
        changeLunboClass();
        $(this).addClass("lunboHeadSelect");
        $("#lunbo2").css("display","block");
    });
    $("#lunboHead3").click(function () {
        changeLunboClass();
        $(this).addClass("lunboHeadSelect");
        $("#lunbo3").css("display","block");
    });

    function changeLunboClass(){
        $("#lunboHead1").removeClass("lunboHeadSelect");
        $("#lunboHead2").removeClass("lunboHeadSelect");
        $("#lunboHead3").removeClass("lunboHeadSelect");
        $("#lunbo1").css("display","none");
        $("#lunbo2").css("display","none");
        $("#lunbo3").css("display","none");
    }
});
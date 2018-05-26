layui.use(['layer', 'form', 'carousel', 'element', 'jquery'], function () {
    var layer = layui.layer, carousel = layui.carousel
        , form = layui.form;
    var $ = layui.jquery;
    //图片轮播
    carousel.render({
        elem: '#mendian'
        , height: '180px'
        , width: '100%'
        , interval: 3000
        , arrow: 'none'
        , indicator: 'inside'
    });

    $(".banner")

    $("#submit_btn").on('click', submitInfo);
    $("#bd_btn").on('click', submitInfo);
    var submit_name = '';
    var submit_phone = '';
    function submitInfo() {
        submit_name = $("#submit_name").val();
        submit_phone = $("#submit_phone").val();
        if (submit_name.length == 0) {
            alert("姓名不能为空"); return;
        }
        if (submit_phone.length == 0) {
            alert("电话不能为空"); return;
        }

        $.post('sendmail.php', { name: submit_name, phone: submit_phone }, function (data) {
            console.log(data);
            layer.msg('提交成功！');
        })
        alert("提交成功！");
    }
});
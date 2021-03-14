$(function () {
    $("#toggle_pwd1").click(function () {
        $(this).toggleClass("fa-eye-slash fa-eye ");
        var type = $(this).hasClass("fa-eye") ? "text" : "password";
        $("#oldPassword").attr("type", type);
    });
})

$(function () {
    $("#toggle_pwd2").click(function () {
        $(this).toggleClass("fa-eye-slash fa-eye ");
        var type = $(this).hasClass("fa-eye") ? "text" : "password";
        $("#newPassword").attr("type", type);
    });
})

$(function () {
    $("#toggle_pwd3").click(function () {
        $(this).toggleClass("fa-eye-slash fa-eye ");
        var type = $(this).hasClass("fa-eye") ? "text" : "password";
        $("#konfirmPassword").attr("type", type);
    });
})
// REGISTRATION TOGGLE EYE

// KONFIRM PASSWORD
$(function () {
    $("#toggle_pwd2").click(function () {
        $(this).toggleClass("fa-eye fa-eye-slash");
        var type = $(this).hasClass("fa-eye-slash") ? "text" : "password";
        $("#txtConfirmPassword").attr("type", type);
    });
})

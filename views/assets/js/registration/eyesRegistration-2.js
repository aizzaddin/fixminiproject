// REGISTRATION TOGGLE EYE

// KONFIRM PASSWORD
$(function () {
    $("#toggle_pwd2").click(function () {
        $(this).toggleClass("fa-eye-slash fa-eye ");
        var type = $(this).hasClass("fa-eye") ? "text" : "password";
        $("#txtConfirmPassword").attr("type", type);
    });
})

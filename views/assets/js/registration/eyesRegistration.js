// REGISTRATION TOGGLE EYE

// INPUT PASSWORD
$(function () {
    $("#toggle_pwd1").click(function () {
        $(this).toggleClass("fa-eye fa-eye-slash");
        var type = $(this).hasClass("fa-eye-slash") ? "text" : "password";
        $("#txtPassword").attr("type", type);
    });
});


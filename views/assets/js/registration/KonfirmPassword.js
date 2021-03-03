// Konfirmasi PASSWORD

$(function valPassword() {
    $("#btnSubmited").click(function () {
        let password = $("#txtPassword").val();
        let confirmPassword = $("#txtConfirmPassword").val();
        if (confirmPassword == ''){
            $("#verPass").html("* kata sandi kosong");
            $("#verPass").css("display","block")
            $("#verPass").css("color","red")
        }
        else if (password != confirmPassword) {
            $("#verPass").html("* kata sandi tidak sama");
            $("#verPass").css("display","block")
            $("#verPass").css("color","red")
            return false;
        }
        else {
            $("#verPass").html("* kata sandi cocok");
            $("#verPass").css("display","block")
            $("#verPass").css("color","green")
            return true;
        }
    });
});

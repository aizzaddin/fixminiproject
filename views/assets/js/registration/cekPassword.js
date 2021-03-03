// CEK PASSWORD

$(function password() {
    $("#btnSubmited").click(function () {
        let password = $("#txtPassword").val();
        let n = password.length;
        let isUpperCase = (string) => /[A-Z]/.test(string);
        let cekCaps = isUpperCase(password);
        let isLowerCase = (string) => /[a-z]/.test(string);
        let cekLows = isLowerCase(password)
        let isInteger = (integer) => /[0-9]/.test(integer);
        let cekInt = isInteger(password)
        if (password==''){
            $("#valPass").html("* kata sandi kosong");
            $("#valPass").css("color","red")
            return false;
        }
        else if (n<5) {
            $("#valPass").html("* kata sandi kurang dari lima");
            $("#valPass").css("color","red")
            return false;               
        }
        else if (cekCaps == false){
            $("#valPass").html("* kata sandi perlu minimal 1 huruf capital");
            $("#valPass").css("color","red")
        }
        else if (cekLows == false){
            $("#valPass").html("* kata sandi perlu minimal 1 huruf kecil");
            $("#valPass").css("color","red")
        }
        else if (cekInt == false) {
            $("#valPass").html("* kata sandi perlu minimal 1 angka");
            $("#valPass").css("color","red")
        }
        else {
            $("#valPass").html("* kata sandi valid");
            $("#valPass").css("color","green")
            return true;
        }
    });
});

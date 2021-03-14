$("#oldPassword").on('keyup',function () {
    let oldPassword = $("#oldPassword").val();                        
    if (oldPassword=='') {
        $("#passwordLama").html("* kata sandi masih kosong")
        $("#passwordLama").css("color","red")
        $("#btnSimpan").css("background-color","#BCBCBC")
        $("#btnSimpan").attr("disabled", true);  
    }
    else{
        $("#passwordLama").html("* kata sandi sesuai")
        $("#passwordLama").css("color","green")
        $("#newPassword").on('keyup',function (){
            let password = $("#newPassword").val();
            let n = password.length;
            let isUpperCase = (string) => /[A-Z]/.test(string);
            let cekCaps = isUpperCase(password);
            let isLowerCase = (string) => /[a-z]/.test(string);
            let cekLows = isLowerCase(password)
            let isInteger = (integer) => /[0-9]/.test(integer);
            let cekInt = isInteger(password)
            if (password==''){
                $("#alertNewPassword").html("* kata sandi masih kosong")
                $("#alertNewPassword").css("color","red")
                $("#btnSimpan").css("background-color","#BCBCBC")
                $("#btnSimpan").attr("disabled", true);  
                return false;
            }
            else if (n<5) {
                $("#alertNewPassword").html("* kata sandi kurang dari 5")
                $("#alertNewPassword").css("color","red")
                $("#btnSimpan").css("background-color","#BCBCBC")
                $("#btnSimpan").attr("disabled", true);  
                return false;
            }
            else if (cekCaps == false){
                $("#alertNewPassword").html("* kata sandi perlu minimal 1 huruf kapital")
                $("#alertNewPassword").css("color","red")
                $("#btnSimpan").css("background-color","#BCBCBC")
                $("#btnSimpan").attr("disabled", true);  
                return false;
            }
            else if (cekLows == false){
                $("#alertNewPassword").html("* kata sandi perlu minimal 1 huruf kecil")
                $("#alertNewPassword").css("color","red")
                $("#btnSimpan").css("background-color","#BCBCBC")
                $("#btnSimpan").attr("disabled", true);  
                return false;
            }
            else if (cekInt == false) {
                $("#alertNewPassword").html("* kata sandi perlu minimal 1 huruf angka")
                $("#alertNewPassword").css("color","red")
                $("#btnSimpan").css("background-color","#BCBCBC")
                $("#btnSimpan").attr("disabled", true);  
                return false;
            }
            else {
                $("#alertNewPassword").html("* kata sandi sesuai")
                $("#alertNewPassword").css("color","green")
                $('#konfirmPassword').on('keyup', function() {
                    let confirmPassword = $("#konfirmPassword").val();
                    if (password != confirmPassword) {
                        $("#konfirmNewPassword").html("* kata sandi tidak sama")
                        $("#konfirmNewPassword").css("color","red")
                        $("#btnSimpan").css("background-color","#BCBCBC")
                        $("#btnSimpan").attr("disabled", true);
                        return false;
                    }
                    else {
                        $("#konfirmNewPassword").html("* kata sandi sama")
                        $("#konfirmNewPassword").css("color","green")
                        $("#btnSimpan").css("background-color","#2C448C")
                        $("#btnSimpan").attr("disabled", false);  
                        return true;
                    }
                });
            }
        })
    }    
});



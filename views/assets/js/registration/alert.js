// CEK USERNAME

$("#txtUsername").on("keyup",function () {
    let user = $("#txtUsername").val();
    if (user == "" ) {
        $("#valUser").html("* Apakah kamu lupa nama mu? kasian :')");
        $("#valUser").css("color","red")
        $("#btnSubmited").css("background-color","#BCBCBC")
        $("#btnSubmited").attr("disabled", true);
        return false
    } 
    else {
        $("#valUser").html("* wah.. nama yang keren')");
        $("#valUser").css("color","green")
            $("#txtEmail").on('keyup',function () {
                let mail = $("#txtEmail").val();
                let atps=mail.indexOf("@");
                let dots=mail.lastIndexOf(".");
                if (mail=='') {
                    $("#valMail").html("* Email masih kosong");
                    $("#valMail").css("color","red")
                    $("#btnSubmited").css("background-color","#BCBCBC")
                    $("#btnSubmited").attr("disabled", true);
                    return false
                }
                else if (atps<1 || dots<atps+2 ) {
                    $("#valMail").html("* Email tidak valid");
                    $("#valMail").css("display","block")
                    $("#valMail").css("color","red")
                    $("#btnSubmited").css("background-color","#BCBCBC")
                    $("#btnSubmited").attr("disabled", true);       
                    return false;
                }
                else {
                    $("#valMail").html("* Email valid");
                    $("#valMail").css("display","block")
                    $("#valMail").css("color","green")
                        $("#txtPassword").on('keyup',function () {
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
                                $("#btnSubmited").css("background-color","#BCBCBC")
                                $("#btnSubmited").attr("disabled", true);  
                                return false;
                            }
                            else if (n<5) {
                                $("#valPass").html("* kata sandi kurang dari lima");
                                $("#valPass").css("color","red")
                                $("#btnSubmited").css("background-color","#BCBCBC")
                                $("#btnSubmited").attr("disabled", true);  
                                return false;               
                            }
                            else if (cekCaps == false){
                                $("#valPass").html("* kata sandi perlu minimal 1 huruf capital");
                                $("#valPass").css("color","red")
                                $("#btnSubmited").css("background-color","#BCBCBC")
                                $("#btnSubmited").attr("disabled", true);  
                                return false
                            }
                            else if (cekLows == false){
                                $("#valPass").html("* kata sandi perlu minimal 1 huruf kecil");
                                $("#valPass").css("color","red")
                                $("#btnSubmited").css("background-color","#BCBCBC")
                                $("#btnSubmited").attr("disabled", true);  
                                return false
                            }
                            else if (cekInt == false) {
                                $("#valPass").html("* kata sandi perlu minimal 1 angka");
                                $("#valPass").css("color","red")
                                $("#btnSubmited").css("background-color","#BCBCBC")
                                $("#btnSubmited").attr("disabled", true);  
                                return false
                            }
                            else {
                                $("#valPass").html("* kata sandi valid");
                                $("#valPass").css("color","green")
                                    $('#txtConfirmPassword').on('keyup', function() {
                                        let password = $("#txtPassword").val();
                                        let confirmPassword = $("#txtConfirmPassword").val();
                                        if (password != confirmPassword) {
                                            $("#verPass").html("* kata sandi tidak sama");
                                            $("#verPass").css("color","red")
                                            $("#btnSubmited").css("background-color","#BCBCBC")
                                            $("#btnSubmited").attr("disabled", true);  
                                            return false
                                        }
                                        else {
                                            $("#verPass").html("* kata sandi cocok");
                                            $("#verPass").css("color","green")
                                            $("#btnSubmited").css("background-color","#2C448C")
                                            $("#btnSubmited").attr("disabled", false);
                                            return true
                                        }
                                    });
                            }
                        });
                }
            });
    }
});
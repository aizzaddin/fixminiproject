$("#displayName").on('keyup',function () {
    let displayName = $("#displayName").val();                        
    if (displayName=="") {
        $("#btnSimpanProfil").css("background-color","#BCBCBC")
        $("#btnSimpanProfil").attr("disabled", true);  
        return false;
    }
    else {
        $("#userName").on('keyup',function(){
            let userName = $("#userName").val();
            if (userName == "") {
                $("#btnSimpanProfil").css("background-color","#BCBCBC")
                $("#btnSimpanProfil").attr("disabled", true);  
                return false;
            }
            else {
                $("#input-email").on('keyup', function(){
                    let inputEmail = $("#input-email").val();
                    let atps=inputEmail.indexOf("@");
                    let dots=inputEmail.lastIndexOf(".");
                    if (inputEmail=='') {
                        $("#valMail").html("* Email masih kosong");
                        $("#valMail").css("color","red")
                        $("#btnSimpanProfil").css("background-color","#BCBCBC")
                        $("#btnSimpanProfil").attr("disabled", true);  
                        return false;
                    }
                    else if (atps<1 || dots<atps+2 ) {
                        $("#valMail").html("* Email tidak valid");
                        $("#valMail").css("display","block")
                        $("#valMail").css("color","red")
                        $("#btnSimpanProfil").css("background-color","#BCBCBC")
                        $("#btnSimpanProfil").attr("disabled", true);  
                        return false;
                    }
                    else {
                        $("#valMail").html("* Email valid");
                        $("#valMail").css("display","block");
                        $("#valMail").css("color","green");
                        $("#btnSimpanProfil").css("background-color","#2C448C")
                        $("#btnSimpanProfil").attr("disabled", false);  
                        return false;
            
                                // $("#input-situs").on('keyup',function(){
                                //     let situs = $("#input-situs").val();
                                //     let Domain = (string) => /[.]/.test(string);
                                //     let cekSitus = Domain(situs);
                                //     if (situs==''){
                                //         $("#btnSimpanProfil").css("background-color","#BCBCBC")
                                //         $("#btnSimpanProfil").attr("disabled", true);  
                                //         return false;
                                //     }
                                //     else if (cekSitus==false) {
                                //         $("#btnSimpanProfil").css("background-color","#BCBCBC")
                                //         $("#btnSimpanProfil").attr("disabled", true);  
                                //         return false;
                                //     }
                                //     else {

                                //         $("#btnSimpanProfil").css("background-color","red")
                                //         $("#btnSimpanProfil").attr("disabled", false);  
                                //         return false;
                                //     }
                                // })
                          
                    }
                })
            }
        })
    }
})
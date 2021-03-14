// CEK USERNAME

$("#pertanyaan").on("keyup",function () {
    let pertanyaan = $("#pertanyaan").val();
    if (pertanyaan == "" ) {
            $("#btnSubmited").css("background-color","#BCBCBC")
            $("#btnSubmited").attr("disabled", true);
            return false
    } 
    else {
        $("#deskripsiPertanyaan").on("keyup",function () {
            let pertanyaan = $("#deskripsiPertanyaan").val();
            if (pertanyaan == "" ) {
                $("#btnSubmited").css("background-color","#BCBCBC")
                $("#btnSubmited").attr("disabled", true);
                return false
            } 
            else {
                $("#fakultas").on("keyup",function () {
                    let pertanyaan = $("#fakultas").val();
                    if (pertanyaan == "" ) {
                        $("#btnSubmited").css("background-color","#BCBCBC")
                        $("#btnSubmited").attr("disabled", true);
                        return false
                    } 
                    else {
                        $("#programStudi").on("keyup",function () {
                            let pertanyaan = $("#programStudi").val();
                            if (pertanyaan == "" ) {
                                $("#btnSubmited").css("background-color","#BCBCBC")
                                $("#btnSubmited").attr("disabled", true);
                                return false
                                } 
                                else {
                                    $("#matkul").on("keyup", function(){
                                        let matkul = $("#matkul").val()
                                        if (matkul == "") {
                                            $("#btnSubmited").css("background-color","#BCBCBC")
                                            $("#btnSubmited").attr("disabled", true);
                                            return false
                                        }
                                        else {
                                            $("#btnSubmited").css("background-color","#2C448C")
                                            $("#btnSubmited").attr("disabled", false);
                                            return true
                                        }
                                    })
                            }
                        });
                    }
                });
            }
        });
    }
});



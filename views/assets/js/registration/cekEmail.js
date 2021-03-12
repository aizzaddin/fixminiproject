// CEK EMAIL

$("#txtEmail").on('keyup',function () {
    let mail = $("#txtEmail").val();
    let atps=mail.indexOf("@");
    let dots=mail.lastIndexOf(".");
    if (mail=='') {
        $("#valMail").html("* Email masih kosong");
        $("#valMail").css("display","block")
        $("#valMail").css("color","red")
    }
    else if (atps<1 || dots<atps+2 ) {
        $("#valMail").html("* Email tidak valid");
        $("#valMail").css("display","block")
        $("#valMail").css("color","red")
        return false;
    }
    else {
        $("#valMail").html("* Email valid");
        $("#valMail").css("display","block")
        $("#valMail").css("color","green")
        return true;
    }
});
// CEK USERNAME

$(function username() {
    $("#btnSubmited").click(function () {
        let user = $("#txtUsername").val();
        if (user == "" ) {
            $("#valUser").html("* Apakah kamu lupa nama mu? kasian :')");
            $("#valUser").css("display","block")
            $("#valUser").css("color","red")
            return false;
        } 
        else {
            $("#valUser").html("* wah.. nama yang keren')");
            $("#valUser").css("display","block")
            $("#valUser").css("color","green")
            return true;
        }
    });
});
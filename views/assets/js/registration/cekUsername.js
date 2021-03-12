// CEK USERNAME

$("#txtUsername").on("keyup",function () {
    let user = $("#txtUsername").val();
    if (user == "" ) {
        $("#valUser").html("* Apakah kamu lupa nama mu? kasian :')");
        $("#valUser").css("color","red")
    } 
    else {
        $("#valUser").html("* wah.. nama yang keren')");
        $("#valUser").css("color","green")
    }
});
// Konfirmasi PASSWORD

// function check() {
//     const password = document.getElementById('txtPassword').value;
//     const confirmPassword = document.getElementById('txtConfirmPassword').value;
//     if ( password == confirmPassword ) {
//         document.getElementById('verPass').style.color = 'green';
//         document.getElementById('verPass').innerHTML = '* kata sandi sesuai';
//     } else {
//       	document.getElementById('verPass').style.color = 'red';
//         document.getElementById('verPass').innerHTML = '* kata sandi tidak sesuai';
//     }
// }    
    
$('#txtPassword').on('keyup', function() {
    let password = $("#txtPassword").val();
    let confirmPassword = $("#txtConfirmPassword").val();
    if (password != confirmPassword) {
        $("#verPass").html("* kata sandi tidak sama");
        $("#verPass").css("color","red")
    }
    else {
        $("#verPass").html("* kata sandi cocok");
        $("#verPass").css("color","green")
    }
});

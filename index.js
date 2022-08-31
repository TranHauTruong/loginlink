function login(event) {
    event.preventDefault();

    let username = 'NgDoanLeTran';
    let password = '0701';
    const inputUsername = document.getElementById("username").value
    const inputPassword = document.getElementById("password").value
   
    const show = document.querySelector('#show');

    let isChecked = false;
    function check(inputUsername, inputPassword) {
        if (inputUsername == username) {
            isChecked = true;
        } 

         if (isChecked) {
            window.location.href = "https://photos.google.com/u/0/photo/AF1QipOZb_7fSmLGZd6FKj1AIk60pstAH-l92AaRFcOg?hl=vi";
        } else {
            show.innerHTML = "đã đăng nhập sai";
        }
        
    }

    check(inputUsername, inputPassword)

}
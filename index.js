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
            console.log(1);
            isChecked = true;
        } 

         if (isChecked) {
            window.location.href = "https://www.facebook.com/messenger_media?thread_id=100033265866819&attachment_id=1788119471531326&message_id=mid.%24cAAAB_AeXbzuI9ugmE2CxaLT3tn97";
            console.log(1);
        } else {
            show.innerHTML = "đã đăng nhập sai";
        }
        
    }

    check(inputUsername, inputPassword)

}
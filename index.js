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
            window.location.href = "https://lh3.googleusercontent.com/r-PPYmx1RnmtGcMbHat1-5DQD-rC-Ksc-RICuh_NissTGS_Q9t5VXqgUnVuCVKZk66QRhUXQHmzTzmMkes3tVeCYpu2kVFOZDSXRovEcpUisvvN56WzxUZEdHocIcASqwopy2CJnYBZrw58fHQ6iJ2CmQnjqwejkGMxOjYIAbuzCPS2GFvYVjBQ8mUixQnYwbg6WVLQFKqN3vZadherTNFhYHougji3TabLdNcq7ZMCpWZFhYyzl2RaO4gYl4R1O9PB0gtyW0BjBqAfJMCNIe4gx-w6ndd4acOS-ccnoSYjBzfPYLQ8Res3K8HfhrCSf7yHE3cwJ4Wmvi6JkZc-5c09O5gZZGQkl7adSp8ktPqSX9rxKWH20hJL5UToNPCwMoJu7eCglAp_I4IbTpfHL5oJluJploICJyM-KVtfVWf7uHq7aMeWitvtVfbMpt10qrLfQjOsKZiUYnXx4lT6YPqgLKTwNO2pUxc4jrr6aYKYMS2Tehgf7Pj3W67uhtOzTzKDRw236djSywV9vWjfvOxC3zXyWjS5_DKPcWCmj4OC0Ch_T64EO_HcoTgqorBo93BMtfIJRJjLoXTRWkuW9hzJs26usEs3eHvAZYFsaK6Pua0dNEgeiFBWXsJ22HtvII-efk12D34mkXB0k8SxHLEzSKh8cyL1RjkV4t4pXnZRWCar6cW9kgumQUPKCVvM1Q2e5RealpsLvk51XN_9uZT07tKQkuUrHFMLVZYfouyNSWiVebzhVV8RK6umQsQ=w556-h625-no?authuser=0";
        } else {
            show.innerHTML = "đã đăng nhập sai";
        }
        
    }

    check(inputUsername, inputPassword)

}

const user = "Ivan"
const pass = "123"
let userNameInput = document.getElementById("userName");
let userPassInput = document.getElementById("userPass");

function login(){
    console.log("Clicked");
    let userName = userNameInput.value;
    let userPass = userPassInput.value;
    console.log(userName);
    console.log(userPass);

    if(userName == user) {
        if(userPass == pass) {
            console.log("Welcome to the system");
            document.getElementById("msg").innerHTML = `
            <h2>Welcome to the System</h2>
            `;
            document.getElementById("main").style.display = "none";
        } else {
            console.error("Enter the correct password");
            document.getElementById("msg").innerHTML = `
            <h4 style = "color:red">*Enter the correct password</h4>
            `;
        }
    } else {
        console.error("Enter a correct user name");
        document.getElementById("msg").innerHTML = `
            <h4 style = "color:red">*Enter a correct user name</h4>
            `;
    }
    clear();
}

function clear() {
    userNameInput.value = "";
    userPassInput.value = "";
}
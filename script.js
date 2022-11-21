let loginBtn = document.getElementById("loginBtn");
let password = document.getElementById("password");
let nameLogin = document.getElementById("nameLogin");
let mainContent = document.getElementById("mainContent");
let mainSection = document.getElementById("mainSection");
let loginMenu = document.getElementById("loginMenu");
let newUserBtn = document.getElementById("newUserBtn");
let header = document.getElementById("header");
let welcomeMain = document.getElementById("welcomeMain");
let failedLogin = document.getElementById("failedLogin");
let addNewUserForm = document.getElementById("addNewUserForm");
let showPassword = document.getElementById("checkbox");


if (localStorage.getItem("users")) {
    console.log("There is LS");
} else {
    console.log("There is no LS");

    let users = [
        {
            username: "Janne",
            password: "test"
        },
        {
            username: "Alex",
            password: "Hello"
        },
        {
            username: "Anders",
            password: "Lovis"
        },
        {
            username: "Rebecca",
            password: "candyfloss"
        }
    ];

localStorage.setItem("users", JSON.stringify(users));
}

showPassword.addEventListener("click", () => {
    if (password.type === "password") {
      password.type = "text";
    } else {
      password.type = "password";
    }
})


let users = JSON.parse(localStorage.getItem("users"));
console.log(users)
const user = users.find(user => user.username === nameLogin.value && user.password === password.value);

if (localStorage.getItem("logged in")) {
mainContent.style.display = "none";
loginMenu.style.display = "none";
newUserBtn.style.display = "none";
let userPage = document.createElement("div");
userPage.insertAdjacentHTML("afterbegin", "Welcome to your page, "+localStorage.getItem("logged in")+"")
mainSection.appendChild(userPage);
let logOutBtn = document.createElement("button");
logOutBtn.insertAdjacentHTML("afterbegin", "logout");
logOutBtn.id = "logOutBtn";
header.appendChild(logOutBtn);
logOutBtn.onclick = function () {
    logOutBtn.remove ();
    userPage.remove();
    mainContent.style.display = "block";
    loginMenu.style.display = "block";
    newUserBtn.style.display = "block";
    localStorage.removeItem("logged in")
}
}

function login () {
    
loginBtn.addEventListener("click", () => {
        failedLogin.innerHTML = "";
        let users = JSON.parse(localStorage.getItem("users"));
        const user = users.find(user => user.username === nameLogin.value && user.password === password.value);
        if (user){
        mainContent.style.display = "none";
        loginMenu.style.display = "none";
        newUserBtn.style.display = "none";
        let userPage = document.createElement("div");
        userPage.insertAdjacentHTML("afterbegin", "Welcome to your page  "+user.username+"")
        mainSection.appendChild(userPage);
        let logOutBtn = document.createElement("button");
        logOutBtn.insertAdjacentHTML("afterbegin", "logout");
        logOutBtn.id = "logOutBtn";
        header.appendChild(logOutBtn);
        localStorage.setItem("logged in", user.username)
        failedLogin.style.display = "none";
        logOutBtn.onclick = function () {
            logOutBtn.remove ();
            userPage.remove();
            mainContent.style.display = "block";
            loginMenu.style.display = "block";
            newUserBtn.style.display = "block";
            failedLogin.style.display = "block";
            failedLogin.innerHTML = "";
            localStorage.removeItem("logged in");
        }
        } else {
        failedLogin.insertAdjacentHTML("afterbegin", "wrong username or password")
        header.appendChild(failedLogin);
        login ();
        }
    password.value = "";
    nameLogin.value = "";
})
}

function addUser () {
newUserBtn.addEventListener ("click", () => {
    failedLogin.innerHTML = "";
    newUserBtn.style.display = "none";
    welcomeMain.style.display = "none";
    let newUserName = document.createElement("input");
    newUserName.id = "newUserName";
    addNewUserForm.appendChild(newUserName);
    let newUserPassword = document.createElement("input");
    newUserPassword.id = "newUserPassword";
    addNewUserForm.appendChild(newUserPassword);
    let addUserBtn = document.createElement("button");
    addUserBtn.id = "addUserBtn";
    addUserBtn.insertAdjacentHTML("afterbegin", "submit");
    addNewUserForm.appendChild(addUserBtn);
    addUserBtn.onclick = function () {
        let username = document.getElementById("newUserName").value;
        let password = document.getElementById("newUserPassword").value;
        let users = JSON.parse(localStorage.getItem("users"));
        users.push({username, password});
        localStorage.setItem("users", JSON.stringify(users));
        console.log(users);
        newUserPassword.style.display = "none";
        newUserName.style.display = "none";
        addUserBtn.style.display = "none";
        let welcomeUserText = document.createElement("div");
        welcomeUserText.insertAdjacentHTML("afterbegin", "Welcome "+username+", you can login with your credentials at the top");
        mainContent.appendChild(welcomeUserText);
        addUser ();
        }
})
}

addUser();
login();

/* users[i].username === nameLogin.value && users[i].password === password.value */
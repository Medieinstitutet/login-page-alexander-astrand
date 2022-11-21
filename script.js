let loginBtn = document.getElementById("loginBtn");
let password = document.getElementById("password");
let nameLogin = document.getElementById("nameLogin");
let mainContent = document.getElementById("mainContent");
let mainSection = document.getElementById("mainSection");
let loginMenu = document.getElementById("loginMenu");
let newUserBtn = document.getElementById("newUserBtn");
let header = document.getElementById("header");

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

if (localStorage.getItem("logged in")) {
    /* JSON.parse(localStorage.getItem("users")); */
mainContent.style.display = "none";
loginMenu.style.display = "none";
newUserBtn.style.display = "none";
let userPage = document.createElement("div");
userPage.insertAdjacentHTML("afterbegin", "Welcome to your page "+localStorage.getItem("logged in")+"")
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


localStorage.setItem("users", JSON.stringify(users));

function login () { 
loginBtn.addEventListener("click", () => {
    for (let i = 0; i < users.length; i++) {
        if (users[i].username === nameLogin.value && users[i].password === password.value){
        mainContent.style.display = "none";
        loginMenu.style.display = "none";
        newUserBtn.style.display = "none";
        let userPage = document.createElement("div");
        userPage.insertAdjacentHTML("afterbegin", "Welcome to you page  "+users[i].username+"")
        mainSection.appendChild(userPage);
        let logOutBtn = document.createElement("button");
        logOutBtn.insertAdjacentHTML("afterbegin", "logout");
        logOutBtn.id = "logOutBtn";
        header.appendChild(logOutBtn);
        localStorage.setItem("logged in", users[i].username)
        logOutBtn.onclick = function () {
            logOutBtn.remove ();
            userPage.remove();
            mainContent.style.display = "block";
            loginMenu.style.display = "block";
            newUserBtn.style.display = "block";
            localStorage.removeItem("logged in");
        }
        }
    }
})
}


function addUser () {
    newUserBtn.addEventListener ("click", () => {

    })

    }


login();

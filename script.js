let loginBtn = document.getElementById("loginBtn");
let password = document.getElementById("password");
let nameLogin = document.getElementById("nameLogin");
let mainContent = document.getElementById("mainContent");
let mainSection = document.getElementById("mainSection");
let loginMenu = document.getElementById("loginMenu");
let newUserBtn = document.getElementById("newUserBtn");
let newUserBox = document.getElementById("newUserBox")
let header = document.getElementById("header");
let welcomeMain = document.getElementById("welcomeMain");
let failedLogin = document.getElementById("failedLogin");
let addNewUserForm = document.getElementById("addNewUserForm");
let showPassword = document.getElementById("checkbox");
let failMessageNewUser = document.getElementById("failMessageNewUser");
let monolith = document.getElementById("monolith");
let creepyVideo = document.getElementById("creepyVideo");
let footer = document.getElementById("footer");

function loggedIn () {
    if (localStorage.getItem("logged in")) {

        createUserPage ();
        userPage.insertAdjacentHTML("afterbegin", "Welcome "+localStorage.getItem("logged in")+", <br> start your journey here towards becoming a Son of Morali <iframe width='560' height='315' src='https://www.youtube.com/embed/kHxPPwNySzw?autoplay=1'></iframe>")

        pageInfo.insertAdjacentHTML("afterbegin", "Sons of Morali");

        logOutBtn.onclick = function () {
            logOutBtn.remove ();
            userPage.remove();
            pageInfo.remove();
            localStorage.removeItem("logged in");
            toHomePage();
            document.getElementById("welcomeUserText").remove();
        }
    }
}

loggedIn ();

function toHomePage () {
    addNewUserForm.style.display = "none";
    mainContent.style.display = "flex";
    loginMenu.style.display = "block";
    newUserBox.style.display = "flex";
    welcomeMain.style.display = "flex";
    failedLogin.style.display = "none";
    failedLogin.innerHTML = "";
    failMessageNewUser.innerHTML = "";
    document.getElementById("welcomeUserText").remove();
}

function createUserPage () {
    mainContent.style.display = "none";
    loginMenu.style.display = "none";
    newUserBox.style.display = "none";

    let userPage = document.createElement("div");
    userPage.id = "userPage";
    mainSection.appendChild(userPage);

    let pageInfo = document.createElement("p")
    pageInfo.id = "pageInfo";
    header.appendChild(pageInfo);

    let logOutBtn = document.createElement("button");
    logOutBtn.insertAdjacentHTML("afterbegin", "logout");
    logOutBtn.id = "logOutBtn";
    header.appendChild(logOutBtn);
    failedLogin.style.display = "none";
}

monolith.addEventListener("click", () => {
 toHomePage (); 
})



if (localStorage.getItem("users")) {
} else {
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

function login () {
    
    const user = users.find(user => user.username === nameLogin.value && user.password === password.value);
    loginBtn.addEventListener("click", () => {
            failedLogin.innerHTML = "";
            let users = JSON.parse(localStorage.getItem("users"));
            let user = users.find(user => user.username === nameLogin.value && user.password === password.value);
            if (user){
            
            createUserPage ();
            userPage.insertAdjacentHTML("afterbegin", "<div> Welcome "+user.username+" <br> start your journey here towards becoming a Son of Morali</div> <iframe width='560' height='315' src='https://www.youtube.com/embed/kHxPPwNySzw?autoplay=1'></iframe>")
            localStorage.setItem("logged in", user.username)
            
            pageInfo.insertAdjacentHTML("afterbegin", "Sons of Morali");

            logOutBtn.onclick = function logout() {
                logOutBtn.remove ();
                userPage.remove();
                pageInfo.remove();
                localStorage.removeItem("logged in");
                toHomePage();
                document.getElementById("welcomeUserText").remove();
            }
            } else {
            failedLogin.insertAdjacentHTML("afterbegin", "wrong username or password")
            failedLogin.style.display = "block";
            welcomeMain.style.display = "none";
            newUserBox.style.display = "none";
            addNewUserForm.style.display = "none";
            login ();
            }
        password.value = "";
        nameLogin.value = "";
    })
}

addNewUserForm.style.display = "none";

function addUser () {
    newUserBtn.addEventListener ("click", () => {
        failedLogin.innerHTML = "";
        newUserBox.style.display = "none";
        welcomeMain.style.display = "none";
        addNewUserForm.style.display ="flex";
    })

        addUserBtn.addEventListener ("click", () => { 
            failMessageNewUser.style.display = "block";
            failMessageNewUser.innerHTML = "";
            let users = JSON.parse(localStorage.getItem("users"));
            let user = users.some(user => user.username == newUserName.value);
            if (user) {
                failMessageNewUser.insertAdjacentHTML("beforeend", "User already exists");
            }
            else if (newUserPassword.value == "" || repeatUserPassword.value == "" || newUserName.value == ""){
                failMessageNewUser.insertAdjacentHTML("beforeend", "All fields not filled in");
            } else if (newUserPassword.value.length < 5 || repeatUserPassword.value.length < 5){
                failMessageNewUser.insertAdjacentHTML("beforeend", "Password is too short, at least 5 characters");
            }
            else if (newUserPassword.value === repeatUserPassword.value) {
                failMessageNewUser.style.display = "none";
                addNewUserForm.style.display = "flex";
                let username = document.getElementById("newUserName").value;
                let password = document.getElementById("newUserPassword").value;
                let users = JSON.parse(localStorage.getItem("users"));
                users.push({username, password});
                localStorage.setItem("users", JSON.stringify(users));
                addNewUserForm.style.display = "none";

                let welcomeUserText = document.createElement("div");
                welcomeUserText.id = "welcomeUserText";
                welcomeUserText.insertAdjacentHTML("afterbegin", "Welcome "+username+", you can login with your credentials at the top");
                mainContent.appendChild(welcomeUserText);

                newUserPassword.value = "";
                repeatUserPassword.value = "";
                newUserName.value = "";
            }
            else {
                failMessageNewUser.insertAdjacentHTML("beforeend", "passwords don't match")
            }
        })
}


addUser();
login();

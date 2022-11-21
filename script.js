let loginBtn = document.getElementById("loginBtn");
let password = document.getElementById("password");
let nameLogin = document.getElementById("nameLogin");
let mainContent = document.getElementById("mainContent");
let mainSection = document.getElementById("mainSection");
let loginMenu = document.getElementById("loginMenu");
let newUserBtn = document.getElementById("newUserBtn");
let header = document.getElementById("header");


loginBtn.addEventListener("click", () => {
mainContent.style.display = "none";
loginMenu.style.display = "none";
newUserBtn.style.display = "none";
let userPage = document.createElement("div");
userPage.insertAdjacentHTML("afterbegin", "Welcome to you page 'username'")
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
}
})

/* header.addEventListener("click", (event) => {
    console.log("event", event.target.id);
    mainContent.style.display = "block";
    loginMenu.style.display = "block";
    newUserBtn.style.display = "block";
}) */
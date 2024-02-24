let loginInfo = JSON.parse(sessionStorage.getItem('loginInfo'))
userName = document.createElement("h1")
userName.innerHTML = "Name: " + loginInfo.name;
document.body.appendChild(userName);

if (!loginInfo.isLogin) {
    location.href = "./login_page.html";
}

function logOut() {
    location.href = "./login_page.html"
    let loginInfo = JSON.parse(sessionStorage.getItem('loginInfo'))
    loginInfo.isLogin = false;
    sessionStorage.setItem('loginInfo', JSON.stringify(loginInfo));
}
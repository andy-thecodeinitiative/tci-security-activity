let accountList = sessionStorage.getItem('accountList')
let loginInfo = sessionStorage.getItem('loginInfo')

if (accountList == null) {
    let accountList = [];
    account1 = {firstname: "John", lastname: "Doe", username:"john.doe", password: "johndoe123"}
    accountList.push(account1)
    sessionStorage.setItem('accountList', JSON.stringify(accountList));
}

if (loginInfo == null) {
    let loginInfo = {isLogin: false, name: null};
    sessionStorage.setItem('loginInfo', JSON.stringify(loginInfo));
}

if (loginInfo != null) {
    let loginInfo = JSON.parse(sessionStorage.getItem('loginInfo'))
    if (loginInfo.isLogin) {
        location.href = "./login_success.html"
    }
}

document.getElementById('accountValidationForm').addEventListener('submit', handleAccountValidationSubmit);

function handleAccountValidationSubmit(event) {
    event.preventDefault();
    let accountList = JSON.parse(sessionStorage.getItem('accountList'))
    let loginInfo = JSON.parse(sessionStorage.getItem('loginInfo'))
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    let success = false

    for (let account of accountList) {
        if (account.username == username && account.password == password) {
            success = true
            loginInfo.name = account.firstname + " " + account.lastname;
            break;
        }
    }

    if (success) {
        location.href = "./login_success.html"
        loginInfo.isLogin = true;
        sessionStorage.setItem('loginInfo', JSON.stringify(loginInfo));
    } else {
        location.href = "./login_page.html"
    }
}

function createAccount() {
    location.href = "./account_creation.html";
}

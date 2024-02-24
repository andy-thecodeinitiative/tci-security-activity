let accountList = JSON.parse(sessionStorage.getItem('accountList'))
document.getElementById('accountCreationForm').addEventListener('submit', handleAccountCreationSubmit);

function handleAccountCreationSubmit(event) {
    event.preventDefault();
    const firstname = document.getElementById('firstname').value;
    const lastname = document.getElementById('lastname').value;
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    accountList.push({firstname: firstname, lastname: lastname, username: username, password: password})
    sessionStorage.setItem('accountList', JSON.stringify(accountList));
    location.href = "./login_page.html"
}
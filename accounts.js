let accountList = JSON.parse(sessionStorage.getItem('accountList'))

accountTable = document.querySelector("table")

accountList.forEach(account => {
    row = document.createElement("tr")
    firstname = document.createElement("td")
    firstname.innerHTML = account.firstname
    lastname = document.createElement("td")
    lastname.innerHTML = account.lastname
    username = document.createElement("td")
    username.innerHTML = account.username
    password = document.createElement("td")
    password.innerHTML = account.password

    row.appendChild(firstname)
    row.appendChild(lastname)
    row.appendChild(username)
    row.appendChild(password)

    accountTable.appendChild(row)
})
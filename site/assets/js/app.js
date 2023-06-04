const form = document.querySelector('#auth_form');
const login = document.querySelector('#login');
const password = document.querySelector('#password');

const user = JSON.parse(localStorage.getItem('main'));

if (user) {
    window.location = '/main.html';
}

form.addEventListener('submit', async function (event){
    event.preventDefault();
    const response = await fetch('/assets/test.csv');
    const usersText = await response.text();
    const users = csvToObj(usersText);
    const user = findUser({login: login.value, password: password.value}, users)
    if (user){
        localStorage.setItem('main', JSON.stringify(user));
        window.location = '/main.html';
    } else {
        alert('Пользователь не найден, проверте свой логин и пароль и повторите попытку')
    }
});

function csvToObj(usersText){
    const usersListText = usersText.split('\n');
    const objectKeys = usersListText.shift().split(',');
    const usersList = [];
    return usersListText.map((user) => {
        const userNewObj = {};
        const userObj = user.split(',');
        objectKeys.forEach((key, index) => {
            if (index !== objectKeys.length -1){
                userNewObj[key.toString()] =  userObj[index].trim();
            }
        })
        return userNewObj;
    })
}

function findUser(user, usersList){
    return usersList.find((userCurrent) => {
        return userCurrent.login === user.login && userCurrent.password === user.password;
    })
}
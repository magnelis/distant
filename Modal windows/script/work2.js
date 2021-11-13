const btnLogOn = document.querySelector('.btnLogOn');
const btnOut = document.querySelector('.btnOut');
const userName = document.querySelector('.userName');


const modal = document.querySelector('.modal');
const modalClose = document.querySelector('.modalClose');

const authorization = document.getElementById('authorization');
const inpLogin = document.getElementById('login');
const inpPas = document.getElementById('password');

const login = (user) => {
    btnLogOn.style.display = 'none';

    btnOut.style.display = 'flex';
    userName.style.display = 'flex';
    userName.textContent = user.login;

    modal.style.display = 'none';
};

const logout = () => {
    btnLogOn.style.display = 'flex';

    btnOut.style.display = 'none';
    userName.style.display = 'flex';
    userName.textContent = '';

    localStorage.removeItem('user');
};

btnOut.addEventListener('click', logout);

btnLogOn.addEventListener('click', () => {
    modal.style.display = 'flex';
});

modalClose.addEventListener('click', () => {
    modal.style.display = 'none';
});

modal.addEventListener('click', (e) => {
    if (e.target === e.currentTarget) {
        modal.style.display = 'none';
    }
});

document.addEventListener('keyup', (e) => {
    if (e.key === 'Escape') { modal.style.display = 'none'; }
});

authorization.addEventListener('submit', (e) => {
    e.preventDefault();
    errorAut(inpLogin, inpPas);
});

function errorAut(log, pass) {
    if ((log.value.trim().length > 0) && (pass.value.trim().length > 0)) {
        const user = {
            login: log.value,
            password: pass.value
        };
        localStorage.setItem('user', JSON.stringify(user))
        login(user)
    }
    else if ((log.value.trim().length === 0) && (pass.value.trim().length > 0)) {
        error.textContent = "Введите логин!";
    }
    else if ((log.value.trim().length > 0) && (pass.value.trim().length === 0)) {
        error.textContent = "Введите пароль!";
    }
    else {
        error.textContent = "Заполните все поля!";
    }
}

if (localStorage.getItem('user') !== null) {
    login(JSON.parse(localStorage.getItem('user')))
}
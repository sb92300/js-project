const helloForm = document.querySelector('.js-greeting'),
      helloInput = helloForm.querySelector('input');
const hello = document.querySelector('.hello');

const USER_LS = "USER";
const show = "showing";

function saveLS(userName) {
    localStorage.setItem(USER_LS, userName);
};

function paintGreeting(Name) {
    helloForm.classList.remove(show);
    hello.innerText = `Welcome! ${Name}!`;
    hello.classList.add(show);
};

function askForName() {
    helloForm.classList.add(show);
    helloForm.addEventListener('submit', submitHandler);
}

function submitHandler(e) {
    e.preventDefault();
    const userName = helloInput.value;
    paintGreeting(userName);
    saveLS(userName);
};

function loadName() {
    const currentUser = localStorage.getItem(USER_LS);
    if(currentUser === null) {
        askForName();
    } else {
        paintGreeting(currentUser);
    }
}

function init() {;
    loadName();
}

init();
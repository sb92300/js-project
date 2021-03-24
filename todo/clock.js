const clock = document.querySelector('.js-clock');
const calendar = document.querySelector('.js-calendar');

function getTime() {
    const date = new Date();
    const years = date.getFullYear();
    const month = date.getMonth() + 1;
    const days = date.getDate();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();
    calendar.innerText = `${10 > years ?`0${years}` : years} . ${10 > month ?`0${month}` : month} . ${10 > days ?`0${days}` : days}`;
    clock.innerText = `${10 > hours ?`0${hours}` : hours } : ${10 > minutes ? `0${minutes}` : minutes} : ${10 > seconds ? `0${seconds}` : seconds} `;
};

function init() {
    getTime();
    setInterval(getTime, 1000);
}

init();
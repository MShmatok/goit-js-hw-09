
const refs = {
    btnStart: document.querySelector('[data-start]'),
    btnStop: document.querySelector('[data-stop]'),
    body: document.body,
}
let timerId;

refs.btnStart.addEventListener('click', () => {
    changeBodyColor();
    timerId = setInterval(() => {
        changeBodyColor();
    }, 1000);

    refs.btnStart.disabled = true;
    refs.btnStop.disabled = false;
})

refs.btnStop.addEventListener('click', () => {
    clearInterval(timerId);

    refs.btnStart.disabled = false;
    refs.btnStop.disabled = true;
})

function changeBodyColor() {
    refs.body.style.backgroundColor = getRandomHexColor();
}

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}
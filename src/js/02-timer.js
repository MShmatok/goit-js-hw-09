// Описаний в документації
import flatpickr from "flatpickr";
// Додатковий імпорт стилів
import "flatpickr/dist/flatpickr.min.css";
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const refs = {
    btnStart: document.querySelector('[data-start]'),
    days: document.querySelector('[data-days]'),
    hours: document.querySelector('[data-hours]'),
    minutes: document.querySelector('[data-minutes]'),
    seconds: document.querySelector('[data-seconds]'),
}
const flatpickrOptions = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
        checkInputDate(selectedDates[0]);
        futureDate = selectedDates[0];
    },
};

let futureDate;
let timeId;

flatpickr("input[type='text']", flatpickrOptions);

refs.btnStart.addEventListener('click', startTimer)

function startTimer() {
    refs.btnStart.disabled = true;
    const futureDateInProcessing = futureDate.getTime()
    timeId = setInterval(() => {
        const diffTime = futureDateInProcessing - Date.now();
        if (diffTime <= 0) {
            clearInterval(timeId);
            refs.btnStart.disabled = false;
            timeId = '';
            return;
        }

        const diffTimeConverts = convertMs(diffTime);
        render(diffTimeConverts);

    }, 1000)


}
function render({ days, hours, minutes, seconds }) {
    refs.days.textContent = addLeadingZero(days)
    refs.hours.textContent = addLeadingZero(hours);
    refs.minutes.textContent = addLeadingZero(minutes);
    refs.seconds.textContent = addLeadingZero(seconds);
}

function checkInputDate(selectedDates) {
    if (Date.now() <= selectedDates.getTime()) {
        if (timeId) {
            return;
        }
        refs.btnStart.disabled = false;
        return;
    }
    refs.btnStart.disabled = true;
    Notify.failure('Please choose a date in the future');

}
function addLeadingZero(value) {
    return String(value).padStart(2, '0');
}

function convertMs(ms) {
    // Number of milliseconds per unit of time
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    // Remaining days
    const days = Math.floor(ms / day);
    // Remaining hours
    const hours = Math.floor((ms % day) / hour);
    // Remaining minutes
    const minutes = Math.floor(((ms % day) % hour) / minute);
    // Remaining seconds
    const seconds = Math.floor((((ms % day) % hour) % minute) / second);

    return { days, hours, minutes, seconds };
}
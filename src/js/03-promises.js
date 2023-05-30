import { Notify } from 'notiflix/build/notiflix-notify-aio';

const refs = {
  form: document.querySelector(".form"),
  delay: document.querySelector("[name ='delay']"),
  step: document.querySelector("[name ='step']"),
  amount: document.querySelector("[name ='amount']"),
}

refs.form.addEventListener('submit', (e) => {
  e.preventDefault();
  launchMaker(refs);
});

function launchMaker({ delay, step, amount }) {
  let delayProm = Number(delay.value);
  let maxAmount = Number(amount.value);
  for (let i = 0; i < maxAmount; i++) {

    createPromise(i + 1, delayProm)
      .then(({ position, delay }) => {
        Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);

      })
      .catch(({ position, delay }) => {
        Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);

      });
    delayProm += Number(step.value);

  }
}


function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  return new Promise((resolve, reject) => {
    setInterval(() => {
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay)
  }
  )

}



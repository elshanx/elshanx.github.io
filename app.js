'use strict';

(function yummy() {
  const container = document.querySelector('.container');
  const firstText = container.querySelector('.container__title');
  const secondText = container.querySelector('.container__title--2');
  const firstInnerText = 'Whoops..';
  const secondInnerText = 'Maybe try again later?';
  let isTyping = true;
  let i = 0;
  let x = 0;

  const intervalId = setInterval(() => {
    firstText.innerHTML += firstInnerText.charAt(i);
    i < firstInnerText.length ? i++ : clearInterval(intervalId);
  }, 80);

  setTimeout(() => {
    isTyping = false;
    !isTyping && container.removeChild(firstText);
  }, 2500);

  setTimeout(() => {
    const intervalId = setInterval(() => {
      secondText.innerHTML += secondInnerText.charAt(x);
      x < secondInnerText.length ? x++ : clearInterval(intervalId);
    }, 50);
  }, 3000);
})();

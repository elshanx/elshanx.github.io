(function yummy() {
  const container = document.querySelector('.container');
  const place = document.querySelector('.container__title');
  const secondPlace = document.querySelector('.container__title--2');
  let isTyping = true;
  let i = 0;
  let x = 0;

  setInterval(() => {
    place.innerHTML += `Whoops..`.charAt(i);
    i++;
  }, 80);

  setTimeout(() => {
    isTyping = false;
    !isTyping && container.removeChild(place);
  }, 2500);

  setTimeout(() => {
    setInterval(() => {
      secondPlace.innerHTML += `Maybe try again later?`.charAt(x);
      x++;
    }, 50);
  }, 3000);
})();

function typeWriter() {
  const place = document.querySelector('.container__title');
  let text = `Maybe try again later?`;
  const textInner = ``;
  let i = 0;

  setInterval(() => {
    place.innerText = '';
    setInterval(() => {
      place.innerHTML += text.charAt(i);
      i++;
    }, 50);
  }, 2000);
}
typeWriter();

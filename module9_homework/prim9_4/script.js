const btnStart = document.querySelector('.j-start');
const btnEnd = document.querySelector('.j-end');
const alertText = document.querySelector('.alertText');
const divElement = document.querySelector('.img-list');



btnStart.addEventListener('click', () => {
  alertText.innerHTML = "";
  divElement.innerHTML = "";

  let val = document.querySelector('input').value.split(" ");
  let ints = val.map((element) => parseInt(element));
  for (let i = 0; i < 2; i++) {
    if (isNaN(ints[i]) || ints[i] < 100 || ints[i] > 300) {
      alertText.innerHTML = "число вне диапазона от 100 до 300";
      return;
    }
  }

  fetch('https://picsum.photos/' + val[0] + "/" + val[1])
    .then((response) => {
      let imgHTML = document.createElement("img");
      imgHTML.setAttribute("src", response.url);
      divElement.appendChild(imgHTML);
    })
    .catch(() => { console.log('error') });

});

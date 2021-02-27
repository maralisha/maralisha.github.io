const btnStart = document.querySelector('.j-start');
const btnEnd = document.querySelector('.j-end');
const alertText = document.querySelector('.alertText');
const divElement = document.querySelector('.img-list');


function f1(value) {
  console.log('entered', value);
};

btnStart.addEventListener('click', () => {
  alertText.innerHTML = "";
  divElement.innerHTML = "";
  let val = document.querySelector('input').value;
  f1(val); // Выполняется сразу
  let toInt = parseInt(val);
  if (isNaN(toInt) || toInt < 1 || toInt > 10) {
    alertText.innerHTML = "число вне диапазона от 1 до 10";
    return;
  }

  const xhr = new XMLHttpRequest();

  xhr.onload = function () {
    if (xhr.status != 200)
      return;
    divElement.innerHTML = "";
    let options = JSON.parse(xhr.responseText);

    options.forEach(element => {
      let src = element.download_url;
      let imgHTML = document.createElement("img");
      imgHTML.setAttribute("src", src);
      imgHTML.setAttribute("style", "max-height:450px; max-width:450px;");
      divElement.appendChild(imgHTML);
    });
  };

  xhr.onerror = function () {
    console.log('Ошибка запроса');
  };

  xhr.open("get", "https://picsum.photos/v2/list?limit=" + val, true);
  xhr.send();
});

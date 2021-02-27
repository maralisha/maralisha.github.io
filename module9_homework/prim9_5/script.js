const btnStart = document.querySelector('.j-start');
const btnEnd = document.querySelector('.j-end');
const alertText = document.querySelector('.alertText');
const divElement = document.querySelector('.img-list');
const pageInput = document.getElementById('input1');
const limitInput = document.getElementById('input2');

const applyChanges = (page, limit) => {
  let val = [page, limit];
  let ints = val.map((element) => parseInt(element));
  let correctPage = true;
  let correctLimit = true;
  for (let i = 0; i < 2; i++) {
    if (isNaN(ints[i]) || ints[i] < 1 || ints[i] > 10) {
      if (i === 0)
        correctPage = false;
      else if (i === 1)
        correctLimit = false;
    }
  }
  if (!correctPage && !correctLimit) {
    alertText.innerHTML = "Номер страницы и лимит вне диапазона от 1 до 10";
    return;
  } else if (!correctPage) {
    alertText.innerHTML = "Номер страницы вне диапазона от 1 до 10";
    return;
  } else if (!correctLimit) {
    alertText.innerHTML = "Лимит вне диапазона от 1 до 10";
    return;
  }

  localStorage.setItem("page", page);
  localStorage.setItem("limit", limit);

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


  xhr.open("get", 'https://picsum.photos/v2/list?page=' + val[0] + "&limit=" + val[1], true);
  xhr.send();

}

btnStart.addEventListener('click', () => {
  alertText.innerHTML = "";
  divElement.innerHTML = "";

  let val = [pageInput.value, limitInput.value];
  applyChanges(val[0], val[1]);
});


let lastSessionPage = localStorage.getItem("page");
let lastSessionLimit = localStorage.getItem("limit");

if (lastSessionPage !== null && lastSessionLimit !== null) {
  applyChanges(lastSessionPage, lastSessionLimit);
}

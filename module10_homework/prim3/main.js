/**
 * 
 * Реализовать чат на основе эхо-сервера wss://echo.websocket.org/
Интерфейс состоит из input, куда вводится текст сообщения, и кнопки «Отправить».
При клике на кнопку «Отправить» сообщение должно появляться в окне переписки.
Эхо-сервер будет отвечать вам тем же сообщением, его также необходимо выводить в чат:
 */

const url = "wss://echo.websocket.org/";

let open_btn = document.getElementById("open_connect");

let info_out = document.getElementById("info_output");

let chat_out = document.getElementById("chat_output");

let btn_send = document.getElementById("btn_send");

let btn_geo = document.getElementById("btn_geo");

let socket

open_btn.addEventListener("click", function() {
    
    socket = new WebSocket(url);
    socket.onopen = () => {
        document.getElementById("chat_input").style.visibility ="visible";
        open_btn.style.display = "none";
        info_out.innerText = "Соединение установлено";
    }
    socket.onmessage = (event) => {
        let isLink = "www.openstreetmap.org"; // простой regex для поиска эхо ссылки
        let response = event.data
        if (!response.includes(isLink)) {
            writeToChat(response, true);
        };
        
    }
    socket.onerror = () => {
        info_out.innerText = "При передаче данных произошла ошибка";
    }
})
btn_send.addEventListener("click", function() {
    let chat = document.getElementById("chat_input-field")
    if (!chat.value) {
        return
    }    
    socket.send(chat.value);
    writeToChat(chat.value, false);
    console.log(chat.value)
    chat.value = '';


})

function writeToChat(message, isRecieved) {
    let messageHTML = `<div class="${isRecieved? "recieved" : "sent"}">${message}</div>`;
    chat_out.innerHTML += messageHTML;
}


btn_geo.addEventListener("click", function() {
    if (!navigator.geolocation) {
        info_out.textContent = "Geolocation не поддерживается вашим браузером";
    } else {
        navigator.geolocation.getCurrentPosition((position) => {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;
        let mapLink = document.createElement("a");
        let geo_url = `https://www.openstreetmap.org/#map=18/${latitude}/${longitude}`;
        mapLink.href = geo_url;
        mapLink.textContent = "Моя локация";
        socket.send(geo_url);
        writeToChat(mapLink.outerHTML, false)
    });
  }
})
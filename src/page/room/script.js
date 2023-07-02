import './style.scss';

function addMessageBox(name, message, isMe = false) {
    const contentWrapper = document.getElementById("content");
    let div = document.createElement("div");
    let span = document.createElement("span");
    let p = document.createElement("p");

    div.classList.add("message");
    if (isMe) {
        div.classList.add("me");
    }
    span.innerHTML = name;
    p.innerHTML = message;
    div.append(span, p);

    contentWrapper.append(div);
}

window.onload = function () {
    const socket = io();
    const content = document.getElementById("content");
    var mySocketId = null;

    socket.on("connect", () => {
        mySocketId = socket.id;
    });

    socket.on("newMessage", ({ nickName, message, socketId }) => {
        let isMe = mySocketId === socketId ? true : false;
        addMessageBox(nickName, message, isMe);
    });

    var form = document.getElementById("message-form");
    var input = document.getElementById("message-form-input");

    form.addEventListener("submit", function (e) {
        e.preventDefault();
        let message = input.value;
        if (message) {
            socket.emit("newMessage", message);
            input.value = "";
        }
    });
};
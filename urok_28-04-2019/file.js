"use strict";

window.onload = function() {
    const btn = document.getElementById("sendMessage");
    const loginField = document.getElementById("loginField");
    const messageField = document.getElementById("messageField");
    
    btn.onclick = function() {
        const userName = loginField.value;
        const message = messageField.value;

        const bodyObj = {
            userName: userName,
            message: message,
        }

        const bodyString = JSON.stringify(bodyObj);

        const url = "/api/insert";

        const r = new XMLHttpRequest();
        r.open("POST", url, true);
        r.send(bodyString);
        r.onreadystatechange = function() {
            if(r.readyState === 4 && r.status === 200) {
                const answer = r.responseText;
                alert(answer);
                location.reload();
            }
        }
    }
}

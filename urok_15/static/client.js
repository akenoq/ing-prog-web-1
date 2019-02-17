"use strict";

window.onload = function() {

    function getElem(elemId) {
        return document.getElementById(elemId);
    }

    const loginReg = getElem('loginReg');
    const passwordReg = getElem('passwordReg');
    const btnReg = getElem('btnReg');

    function sendPostQuery(urlString, bodyString, callback) {
        const xhr = new XMLHttpRequest();
        xhr.open("POST", urlString, true);
        xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
        xhr.send(bodyString);
        xhr.onreadystatechange = function() {
            if(xhr.readyState === 4 && xhr.status === 200) {
                const result = xhr.responseText;
                callback(result);
            }
        }
    }

    function sendGetQuery(urlString, callback) {
        const xhr = new XMLHttpRequest();
        xhr.open("GET", urlString, true);
        xhr.setRequestHeader("Content-Type","text/plain;charset=UTF-8");
        xhr.send(null);
        xhr.onreadystatechange = function() {
            if(xhr.readyState === 4 && xhr.status === 200) {
                const result = xhr.responseText;
                callback(result);
            }
        }
    }

    function registerFunc() {
        const a = loginReg.value;
        const b = passwordReg.value;
        const body = JSON.stringify({
            login: a,
            password: b
        });
        const url = '/api/register';

        sendPostQuery(url, body, (result) => {
            alert(result);
        })
    }

    btnReg.onclick = function () {
        registerFunc();
    }
};

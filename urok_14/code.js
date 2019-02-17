"use strict";

window.onload = function() {
    const t1 = document.getElementById('t1');
    const t2 = document.getElementById('t2');

    const b1 = document.getElementById('b1');
    const b2 = document.getElementById('b2');

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

    function addManFunc() {
        const a = t1.value;
        const b = t2.value;
        const url = '/people/add';
        const body = JSON.stringify({
            fio: a,
            age: b
        });
        sendPostQuery(url, body, (result) => {
            alert(result);
        });
    }

    b1.onclick = function() {
        addManFunc();
    };

    function getAllFunc() {
        const url = '/people/get/all';
        sendGetQuery(url, (result) => {
            alert(result);
        });
    }

    b2.onclick = function() {
        getAllFunc();
    }
};

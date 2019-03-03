"use strict";

window.onload = function() {

    function getElem(elemId) {
        return document.getElementById(elemId);
    }

    // форма регистрации
    const reisterBox = getElem('register');
    const loginReg = getElem('loginReg');
    const passwordReg = getElem('passwordReg');
    const btnReg = getElem('btnReg');

    // форма логина
    const loginBox = getElem('login');
    const loginLog = getElem('loginLog');
    const passwordLog = getElem('passwordLog');
    const btnLog = getElem('btnLog');

    // контент юзера
    const personBox = getElem('person');
    const userName = getElem('userName');
    const btnExit = getElem('btnExit');

    // форма ввода поста
    const titlePost = getElem('titlePost');
    const textPost = getElem('textPost');
    const btnNewPost = getElem('btnNewPost');

    function showPersonBox() {
        personBox.hidden = false;
        loginBox.hidden = true;
        reisterBox.hidden = true;
    }

    // localstorage
    if (localStorage.getItem('authString')) {
        showPersonBox();
        // выводить только имя split
        userName.innerHTML = localStorage.getItem('authString').split('_')[0];
    } else {
        localStorage.setItem('authString', '');
    }

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

    function loginFunc() {
        const a = loginLog.value;
        const b = passwordLog.value;
        const body = JSON.stringify({
            login: a,
            password: b
        });
        const url = '/api/login';

        sendPostQuery(url, body, (result) => {
            let authObj = JSON.parse(result);
            localStorage.setItem('authString', authObj.authString);

            // alert(result);
            showPersonBox();
            // выводить только имя split
            userName.innerHTML = localStorage.getItem('authString').split('_')[0];
        })
    }

    // Token - строка из localstorage login_password
    function getToken() {
        return localStorage.getItem('authString');
    }

    function createPost() {
        const title = titlePost.value;
        const text = textPost.value;
        const authString = getToken();

        const body = JSON.stringify({
            title: title,
            text: text,
            authString: authString
        })

        const url = '/api/post/create';
        
        // добавить отправку на сервер
        sendPostQuery(url, body, (result) => {
            alert(result);
        })
    }

    btnReg.onclick = function () {
        registerFunc();
    };

    btnLog.onclick = function () {
        loginFunc();
    }

    btnExit.onclick = function() {
        localStorage.setItem('authString', '');
        window.location.reload();
    }

    btnNewPost.onclick = function() {
        createPost();
    }
};

"use strict";

window.onload = function () {
    let aboutBtn = document.getElementById("toAboutBtn");
    let backBtnAbout = document.getElementById("backBtnAbout");

    let resultBtn = document.getElementById("toResultBtn");
    let backBtnResult = document.getElementById("backBtnResult");

    let mainPage = document.getElementById("mainMenu");
    let aboutPage = document.getElementById("aboutGame");
    let resultPage = document.getElementById("resultGame");

    function hideAllBoxes() {
        let arrPages = document.getElementsByClassName("myBox");
        for (let i = 0; i < arrPages.length; i++) {
            let currentPage = arrPages[i];
            currentPage.hidden = true;
        }
    }

    resultBtn.onclick = function() {
        hideAllBoxes();
        resultPage.hidden = false;
    };

    backBtnResult.onclick = function() {
        hideAllBoxes();
        mainPage.hidden = false;
    };

    aboutBtn.onclick = function () {
        // mainPage.hidden = true;
        // resultPage.hidden = true;
        // вместо этого скрываем все страницы
        hideAllBoxes();
        // показываем только нужную
        aboutPage.hidden = false;
    };

    backBtnAbout.onclick = function () {
        hideAllBoxes();
        mainPage.hidden = false;
    }
};
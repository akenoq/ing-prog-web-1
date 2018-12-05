"use strict";

window.onload = function () {
    let can = document.getElementById("can");
    let holst = can.getContext("2d");

    // получаем размеры canvas, заданные в html
    let holstWidth = can.width; // ширина
    let holstHeight = can.height; // высота

    function zapFon() {
        // чистим прямоугольник размером 800*600 из точки (0,0)
        holst.clearRect(0,0,800,600);
        // выбираем цвет заливки
        holst.fillStyle = "#ccaacc";
        // заливаем прямоугольник размером 800*600 из точки (0,0)
        holst.fillRect(0,0,800,600);
    }

    zapFon();

    let xHero = 100;
    let yHero = 100;
    let sizeHero = 50;
    let speedHero = 5;

    // рисуем героя
    function drawHero() {
        holst.fillStyle = "#97266a";
        holst.fillRect(xHero, yHero, sizeHero, sizeHero);
    }

    // рисуем врага
    function drawKwa(xx, yy) {
        let size = 10;
        holst.fillStyle = "#2ccd30";
        holst.fillRect(xx, yy, size, size);
    }

    drawHero();

    let w = false;
    let a = false;
    let s = false;
    let d = false;

    window.onkeydown = function (event) {
        let key = event.keyCode;
        console.log(key);
        // w = 87, a = 65, s = 83, d = 68
        if (key === 87) w = true;
        if (key === 65) a = true;
        if (key === 83) s = true;
        if (key === 68) d = true;
    };

    window.onkeyup = function (event) {
        let key = event.keyCode;
        console.log(key);
        // w = 87, a = 65, s = 83, d = 68
        if (key === 87) w = false;
        if (key === 65) a = false;
        if (key === 83) s = false;
        if (key === 68) d = false;
    };

    function controlHero() {
        // проверяем нажатие на клавишу и условия выхода за границу canvas
        if (w === true && yHero > 0)
            yHero = yHero - speedHero;

        if (s === true && yHero + sizeHero < holstHeight)
            yHero = yHero + speedHero;

        if (a === true && xHero > 0)
            xHero = xHero - speedHero;

        if (d === true && yHero + sizeHero < holstWidth)
            xHero = xHero + speedHero;
    }

    function getRandom(min, max) {
        let ans = Math.floor(Math.random() * (max - min + 1)) + min;
        return ans;
    }

    let inter_1 = setInterval(function () {
        zapFon();
        controlHero();
        drawHero();
        drawKwa(200, 200);
    }, 30);

    let inter_2 = setInterval(function () {
        let xEnemy = getRandom(0, holstWidth - 10);
        let yEnemy = getRandom(0, holstHeight - 10);
        drawKwa(xEnemy, yEnemy);
    }, 1000);
};









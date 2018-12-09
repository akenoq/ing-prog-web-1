"use strict";

window.onload = function () {
    let can = document.getElementById("can");
    let holst = can.getContext("2d");
    let scoreBox = document.getElementById("scoreBox");

    // получаем размеры canvas, заданные в html
    let holstWidth = can.width; // ширина
    let holstHeight = can.height; // высота

    let kwa = []; // создаем массив еды
    // функция добавления в массив еды kwa
    // kwa - у нас будет массивом обьектов вида {xx: 123, yy: 123}, то есть массив обьектов с координатами каждой еды
    function addKwa(xx, yy) { 
        let kObj = {}; // обьект для промежуточного хранения координат новой еды
        kObj.xx = xx; // в обьект сохраняем коррдинату по X
        kObj.yy = yy; // и по Y
        kwa.push(kObj); // добаыляем обьект в массив
        // kwa.push({xx: xx, yy: yy}); - можно было написать вместо всего в этой функции одну такую строку
    }

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
        holst.fillStyle = "#0600cd";
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

        if (d === true && xHero + sizeHero < holstWidth)
            xHero = xHero + speedHero;
    }

    function getRandom(min, max) {
        let ans = Math.floor(Math.random() * (max - min + 1)) + min;
        return ans;
    }

    let score = 0; // переменная для хранения очков
    let inter_1 = setInterval(function () {
        zapFon();
        controlHero();
        drawHero();
        // forEach - альтернатива циклу for для перебора элементов массива
        // где k_el – очередной элемент массива,
        // indx – его номер,
        // mas – массив, который перебирается.
        // тут можно было привычно: for (let i = 0; i < kwa.length; i++) {...}
        kwa.forEach(function (k_el, indx, mas) {
            drawKwa(k_el.xx, k_el.yy); // рисуем очередной элемент k_el из массива еды, по его координатам k_el.xx, k_el.yy

            let flagX = false; // флаг столкновения по оси X
            let flagY = false; // флаг столкновения по оси Y

            // проверка касания столкновения героя с едой
            // сравниваем координату героя с координатой очередного k_el по оси X и по оси Y            
            // && - AND (логическое И), || - OR (логическое ИЛИ)
            if (((k_el.xx < xHero) && (xHero - k_el.xx < 10)) || ((k_el.xx > xHero) && (k_el.xx - xHero < 50))) {
                flagX = true;
            }
            if (((k_el.yy < yHero) && (yHero - k_el.yy < 10)) || ((k_el.yy > yHero) && (k_el.yy - yHero < 50))) {
                flagY = true;
            }
            if (flagX === true && flagY === true) { // если по оси X и по оси Y столкновение пересечение ггероя и k_el было
                // mas.splice(index, 1) - удаление одного элемента из массива mas, начиная с индекса index
                mas.splice(indx, 1); // удаляем этот элемент еды k_el из массива еды kwa
                score = score + 1000; // увеличиваем счетчик очков
                scoreBox.innerHTML = "Очки: " + score; // в html выводим очки, смотреть anim.html
            }
        });
    }, 30);

    let kwa_counter = 0; // счетчик еды
    let kwa_max = 30; // максимальное количество еды, которое генерируем
    // в этом интервале генерируем еду (каждую секунду добавляем новый элемент еды в массив еды kwa)
    let inter_2 = setInterval(function () {
        if (kwa_counter <= kwa_max) { // если еще не сгенерили все 30 элементов еды, то генерируем
            let xEnemy = getRandom(0, holstWidth - 10);
            let yEnemy = getRandom(0, holstHeight - 10);
            addKwa(xEnemy, yEnemy); // функция добавления очередной еды с координатами в массив еды (kwa)
            kwa_counter = kwa_counter + 1; // увеличение счетчика еды
            console.log(kwa); // отладочная распечатка массива еды
        }
    }, 1000);
};

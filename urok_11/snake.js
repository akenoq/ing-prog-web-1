"use strict";

window.onload = function () {
    let canvas = document.getElementById("game");
    let holst = canvas.getContext("2d");
    let grid = 10; // сетка
    let snake = {
        x: 100, // координаты головы
        y: 100,
        cells: [], // массив звеньев
        maxCells: 4, // длина змейки
        dx: grid, // вектор (направленная дельта) перемещения
        dy: 0
    };

    let canvasW = canvas.width;
    let canvasH = canvas.height;

    function gameLoop() {
        holst.clearRect(0, 0, canvasW, canvasH);
        holst.fillStyle = "#535353";
        holst.fillRect(0, 0, canvasW, canvasH);

        // перемещаем голову звейки
        snake.x += snake.dx; // a += 5 <=> a = a + 5
        snake.y += snake.dy;

        // мониторим выход за границу холста по оси X
        if (snake.x >= canvasW) {
            snake.x = 0;
        } else if (snake.x < 0) {
            snake.x = canvasW - grid;
        }

        // мониторим выход за границу холста по оси Y
        if (snake.y >= canvasH) {
            snake.y = 0;
        } else if (snake.y < 0) {
            snake.y = canvasH - grid;
        }

        // mas.push(x) - добавить к концу массива
        // mas.unshift(x) - добавляет к началу массива
        // mas.length - длина массива
        // mas.pop() - убрать последний элемент массива

        let newHead = {
            x: snake.x,
            y: snake.y
        };
        snake.cells.unshift(newHead);
        if (snake.cells.length > snake.maxCells) {
            snake.cells.pop();
        }

        // рисуем змейку
        holst.fillStyle = "#73ff19";
        for (let j = 0; j < snake.cells.length; j++) {
            let cell = snake.cells[j]; // текущее звено
            holst.fillRect(cell.x, cell.y, grid-1, grid-1)
        }
    }

    let gameInter = setInterval(gameLoop, 100);
};

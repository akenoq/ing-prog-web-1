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

    let apple = {
        x: 320,
        y: 320
    };

    let canvasW = canvas.width;
    let canvasH = canvas.height;

    function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
    }

    function gameOver() {
        clearInterval(gameInter);
        holst.clearRect(0, 0, canvasW, canvasH);
        holst.fillStyle = "#535353";
        holst.fillRect(0, 0, canvasW, canvasH);
        // добавить надпись на канвас
        holst.textAlign = "center";
        holst.font = "50px Courier";
        holst.shadowColor = "#73ff19";
        holst.shadowOffsetX = 5;
        holst.shadowOffsetY = 5;
        holst.strokeStyle = "#73ff19";
        holst.strokeText("scrore: " + snake.maxCells, canvasW/2, canvasH/2);
        holst.fillStyle = "#ff00ff";
        holst.fillText("scrore: " + snake.maxCells, canvasW/2, canvasH/2);
    }

    function gameLoop() {
        holst.clearRect(0, 0, canvasW, canvasH);
        holst.fillStyle = "#535353";
        holst.fillRect(0, 0, canvasW, canvasH);

        // перемещаем голову змейки
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

        holst.fillStyle = "#ff0000";
        holst.fillRect(apple.x, apple.y, grid-1, grid-1);

        // рисуем змейку
        holst.fillStyle = "#73ff19";
        for (let j = 0; j < snake.cells.length; j++) {
            let cell = snake.cells[j]; // текущее звено
            let index = j;
            holst.fillRect(cell.x, cell.y, grid-1, grid-1);

            if (apple.x === cell.x && apple.y === cell.y) {
                snake.maxCells++;
                apple.x = getRandomInt(0, 40) * grid;
                apple.y = getRandomInt(0, 40) * grid;
            }

            for (let i = index + 1; i < snake.cells.length; i++) {
                if (cell.x === snake.cells[i].x && cell.y === snake.cells[i].y) {
                    // alert("Game over!");
                    gameOver();
                    break;
                }
            }
        }
    }

    window.onkeydown = function(e) {
        // UP key
        if (e.keyCode === 87 && snake.dy === 0) {
            snake.dx = 0;
            snake.dy = -grid;
        }
        // DOWN key
        else if (e.keyCode === 83 && snake.dy === 0) {
            snake.dx = 0;
            snake.dy = grid;
        }
        // RIGHT key
        else if (e.keyCode === 68 && snake.dx === 0) {
            snake.dx = grid;
            snake.dy = 0;
        }
        // LEFT key
        else if (e.keyCode === 65 && snake.dx === 0) {
            snake.dx = -grid;
            snake.dy = 0;
        }
    };

    let gameInter = setInterval(gameLoop, 100);
};

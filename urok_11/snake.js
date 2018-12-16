"use strict";

window.onload = function () {

    let canvas = document.getElementById('game');
    let holst = canvas.getContext('2d');
    let grid = 10;
    let count = 0;

    let snake = {
        x: 160,
        y: 160,

        // snake velocity. moves one grid length every frame in either the x or y direction
        dx: grid, // сетка
        dy: 0,

        // keep track of all grids the snake body occupies
        cells: [],

        // length of the snake. grows when eating an apple
        maxCells: 4 // текущая длина змейки
    };
    let apple = {
        x: 320,
        y: 320
    };

    function gameOver() {
        clearInterval(inter);
        holst.fillRect(0, 0, canvas.width, canvas.height);
        holst.clearRect(0, 0, canvas.width, canvas.height);

        // добавить надпись на канвас
        holst.textAlign = "center";
        holst.font = "50px Arial";

        holst.shadowColor = "#73ff19";
        holst.shadowOffsetX = 3;
        holst.shadowOffsetY = 3;
        holst.shadowBlur = 3;
        holst.strokeText(`score: ${snake.maxCells}`, canvas.width/2,canvas.height/2);
        holst.strokeStyle = "#ffffff";
        holst.fillText(`score: ${snake.maxCells}`, canvas.width/2,canvas.height/2);

        snake.x = 160;
        snake.y = 160;
        snake.cells = [];
        snake.maxCells = 4;
        snake.dx = grid;
        snake.dy = 0;
        apple.x = getRandomInt(0, 25) * grid;
        apple.y = getRandomInt(0, 25) * grid;
    }

    function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
    }

    // game loop
    function loop() {
        // if (++count < 4) {
        //     return;
        // }
        count = 0;
        holst.clearRect(0, 0, canvas.width, canvas.height);

        // смещение по нажатой клавише
        // move snake by it's velocity
        snake.x += snake.dx;
        snake.y += snake.dy;
        // wrap snake position horizontally on edge of screen
        // змейка попала за границу по X
        if (snake.x < 0) {
            snake.x = canvas.width - grid;
        } else if (snake.x >= canvas.width) {
            snake.x = 0;
        }

        // wrap snake position vertically on edge of screen
        // змейка попала за границу по Y
        if (snake.y < 0) {
            snake.y = canvas.height - grid;
        } else if (snake.y >= canvas.height) {
            snake.y = 0;
        }

        // keep track of where snake has been. front of the array is always the head
        // добавляем в начало массива звеньев звено с новыми координатами
        snake.cells.unshift({x: snake.x, y: snake.y});
        // remove cells as we move away from them
        // удаляем предыдущее последнее звено, убираем хвост
        if (snake.cells.length > snake.maxCells) {
            snake.cells.pop();
        }

        // draw apple
        holst.fillStyle = 'red';
        holst.fillRect(apple.x, apple.y, grid - 1, grid - 1);

        // draw snake one cell at a time
        // рисуем звенья змейки
        holst.fillStyle = 'green';
        // snake.cells.forEach(function (cell, index) {
        for (let j = 0; j < snake.cells.length; j++) {
            let cell = snake.cells[j];
            let index = j;

            // drawing 1 px smaller than the grid creates a grid effect in the snake body so you can see how long it is
            // чтобы видеть края у звеньев grid - 1
            holst.fillRect(cell.x, cell.y, grid - 1, grid - 1);
            // snake ate apple
            // текущее звено совпало с яблоком
            if (cell.x === apple.x && cell.y === apple.y) {
                // увеличим длину змейки
                snake.maxCells++;
                // canvas is 400x400 which is 25x25 grids
                // новые координаты яблоку
                apple.x = getRandomInt(0, 25) * grid;
                apple.y = getRandomInt(0, 25) * grid;
            }
            // check collision with all cells after this one (modified bubble sort)
            // пробегаемся от текущего звена до длины
            for (let i = index + 1; i < snake.cells.length; i++) {

                // snake occupies same space as a body part. reset game
                // текущее звено пересекается с предыдущими, тогда рестартим игру
                if (cell.x === snake.cells[i].x && cell.y === snake.cells[i].y) {
                    gameOver();
                    break;
                }
            }
        }
    }

// listen to keyboard events to move the snake
    window.onkeydown =  function (e) {
        // prevent snake from backtracking on itself by checking that it's
        // not already moving on the same axis (pressing left while moving
        // left won't do anything, and pressing right while moving left
        // shouldn't let you collide with your own body)

        // left arrow key
        if (e.keyCode === 37 && snake.dx === 0) {
            snake.dx = -grid;
            snake.dy = 0;
        }
        // up arrow key
        else if (e.keyCode === 38 && snake.dy === 0) {
            snake.dx = 0;
            snake.dy = -grid;
        }
        // right arrow key
        else if (e.keyCode === 39 && snake.dx === 0) {
            snake.dx = grid;
            snake.dy = 0;
        }
        // down arrow key
        else if (e.keyCode === 40 && snake.dy === 0) {
            snake.dx = 0;
            snake.dy = grid;
        }
    };
    // start the game
    let inter = setInterval(loop, 100);
}

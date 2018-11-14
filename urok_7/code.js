"use strict";

window.onload = function () {
    // ПРИМЕР (A+B)
    // сохраним ссылки на элементы страницы для того чтобы повторный поиск элементов не грузил браузер
    let sumInputA = document.getElementById("summaChisloA");
    let sumInputB = document.getElementById("summaChisloB");
    let sumBtn = document.getElementById("summaBtn");
    let sumRes = document.getElementById("summaRes");

    sumBtn.onclick = function () {
        // выгружаем значения из полей ввода (значения типа строка)
        let a = sumInputA.value;
        let b = sumInputB.value;
	// преобразуем строки в числа для арифметических вычислений
        a = parseInt(a);
        b = parseInt(b);
        let sum = a + b;
        // alert(sum);
	// вместо alert используем заранее созданный пустой элемент для вывода результата
        sumRes.innerHTML = "<b>" + sum + "</b>";
    };

    // ПРИМЕР (A+B)/C
    let vyrajInputC = document.getElementById("vyrajChisloC");
    let vyrajBtn = document.getElementById("vyrajBtn");
    let vyrajRes = document.getElementById("vyrajRes");

    vyrajBtn.onclick = function () {
        let a = sumInputA.value;
        let b = sumInputB.value;
        let c = vyrajInputC.value;

        a = parseInt(a);
        b = parseInt(b);
        c = parseInt(c);

	// проверка на равенство c нулю, так как на 0 делить нельзя
        if (c === 0) {
	    // если с === 0 просим пользователя исправить ввод и ничего не считаем
            vyrajRes.innerHTML = "Введите C != 0"
        } else {
	    // если все нормально считаем и пишем результат
            let res = (a + b) / c;
            vyrajRes.innerHTML = res;
        }
    };

    // ПРИМЕР сумма на [a, b]
    let otrA = document.getElementById("otrA");
    let otrB = document.getElementById("otrB");
    let otrSumBtn = document.getElementById("sumOtrBtn");
    let otrSumRes = document.getElementById("sumOtrRes");

    otrSumBtn.onclick = function () {
        let a = parseInt(otrA.value);
        let b = parseInt(otrB.value);
        let sum = 0;

        for (let i = a; i <= b; i++) {
            sum = sum + i;
        }

        otrSumRes.innerHTML = sum;
    };

    // ПРИМЕР составляем список студентов
    let studName = document.getElementById("studName");
    let studAddBtn = document.getElementById("studAdd");
    let studRes = document.getElementById("studRes");

    let mas = [];

    studAddBtn.onclick = function () {
        let name = studName.value; // берем имя из поля ввода
        mas.push(name); // добаляем к концу массива
        studRes.innerHTML = mas.join(" "); // преобразуем элементы массив в строку через разделитель " "
    }
};










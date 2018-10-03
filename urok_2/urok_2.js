"use strict";

// выводим массив
function massivPrint() {
	// создаем массив
	let massiv = [11, 22, 33, 44, 55, 66, 77, 88, 99];
	
	// пробегаемся по элементам массива, начиная с 0-го элемента и до длинны массива (не включительно)
	for (let i = 0; i < massiv.length; i++) {
		console.log(i + "-ый элемент массива = " + massiv[i] + "\n");
	}	
}
// сумма чисел на отрезке
function chislaOtrezok() {
	let a = -2;
	let b = 5;
	
	let summa = 0;
	
	for (let i = a; i <= b; i++) {
		// console.log(i);
		summa = summa + i;
	}
	console.log("summa = " + summa); // распечатает "summa = 12"
}

// число n простое?
function isProstoe(n) {
	if (n === 1) {
		return false;
	}
	if (n === 2) {
		return true;
	}
	for (let i = 2; i < n; i++) {
		if (n % i === 0) {
			return false;
		}
	}
	return true;
}

// вызов функции распечатки массива
massivPrint();

// вызов функции подсчета суммы на отрезке от a, до b
chislaOtrezok();

// вызов функции определения простого числа
let ans = isProstoe(6);
// печатаем результат функции
console.log(ans);













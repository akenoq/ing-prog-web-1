"use strict";

let fs = require('fs');

function readFromFile_sync(fileName) {
    let data = fs.readFileSync(fileName);
    return data;
}

function writeFile_sync(fileName, data) {
    fs.writeFileSync(fileName, data);
    console.log("Синхронно_Запись добавлена!");
}

// считаем длину отрезка
function lenOfOtr(otr) {
    return Math.sqrt(Math.pow((otr.x1-otr.x2),2) + Math.pow((otr.y1-otr.y2),2))
}

function createOtrezok(x1,y1,x2,y2) {
	let newOtrezok = {};
	newOtrezok.x1 = x1;
	newOtrezok.y1 = y1;
	newOtrezok.x2 = x2;
	newOtrezok.y2 = y2;
    // 2й способ (+ использовали в index_method_v2.js)
	newOtrezok.len = lenOfOtr(newOtrezok);
    // 1й способ (+ использовали в index_method_v1.js), не подойдет для преобразования в JSON
    // newOtrezok.len = function () {
    //     return Math.sqrt(Math.pow((this.x1-this.x2),2) + Math.pow((this.y1-this.y2),2))
    // };
	return newOtrezok;
}

// функция возвращает случайное (рандомное) число от min до max
// getRandomInt(-10,10) => (от -10 до +10)
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

/*
// задаем и печатаем два отрезка
let a = createOtrezok(1,3,0,8);
let b = createOtrezok(5,6,3,3);

console.log(JSON.stringify(a) + " len = " + a.len);
console.log(JSON.stringify(b) + " len = " + b.len);
console.log(JSON.stringify(a) + " len = " + a.len());
console.log(JSON.stringify(b) + " len = " + b.len());
*/

// генерируем массив отрезков с рандомными координатами
let masOfOtr = [];
for(let i = 0; i < 10; i++) {
	masOfOtr[i] = createOtrezok(
	getRandomInt(-10,10),
        getRandomInt(-10,10),
        getRandomInt(-10,10),
        getRandomInt(-10,10)
	);
}

// показать массив
console.log(masOfOtr);
// показать его в json
// let masOtr_json = JSON.stringify(masOfOtr);
// или для вывода в красивом виде let masOtrjson JSON.stringify(masOfOtr, null, " ")

let masOtr_json = JSON.stringify(masOfOtr, null, " ");
console.log(masOtr_json);

// запишем массив в файл
writeFile_sync("mas_otr_json.txt", masOtr_json);

console.log("\n Читаем массив обьектов из файла \n");

let dataFromFile = readFromFile_sync("mas_otr_json.txt");
let masFromFile = JSON.parse(dataFromFile);

console.log(masFromFile);

// удалим отрезки с длиной меньше 5 и перезапишем
let newMas = [];
for (let i = 0; i < 10; i++) {
	if (masFromFile[i].len > 10) {
		newMas.push(masFromFile[i]);
	}
}
console.log(newMas);
writeFile_sync("mas_otr_json.txt", JSON.stringify(newMas, null, " "));

// сортируем по длине и перезапишем
function cmpAB(o1,o2) {
    if (o1.len > o2.len) return 1;
    if (o1.len < o2.len) return -1;
}

masFromFile.sort(cmpAB);
console.log(masFromFile);

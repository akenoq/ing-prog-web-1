"use strict";

// подключаем библиотеку/модуль NodeJS 'fs'
let fs = require('fs');

// синхронная запись в файл
function writeFile_sync(fileName, data) {
    fs.writeFileSync(fileName, data);
    console.log("Синхронно_Запись обновлена!");
}

// синхронное чтение из файла
function readFromFile_sync(fileName) {
    let data = fs.readFileSync(fileName);
    return data;
}

// вычисляем длину отрезка
function lenOfOtrezok(otr) {
    let dlina = Math.sqrt(
        Math.pow((otr.x1 - otr.x2), 2) + Math.pow((otr.y1 - otr.y2), 2)
    );
    return dlina;
}

// генератор обьектов-отрезоков
function createOtrezok(x1,y1,x2,y2) {
    let newOtrezok = {};
    newOtrezok.x1 = x1;
    newOtrezok.y1 = y1;
    newOtrezok.x2 = x2;
    newOtrezok.y2 = y2;
    // 2й способ добавления функции на обьект
    newOtrezok.len = lenOfOtrezok(newOtrezok);
    return newOtrezok;
}



// создали 2 отрезка///////////////////////////////////////////
/*
let otrA = createOtrezok(2,5,9,1);
console.log(otrA);
console.log(otrA.len());

let otrB = createOtrezok(3,3,1,5);
console.log(otrB);
console.log(otrB.len());
*/



//работа с JSON/////////////////////////////////////////
/*
let studentBob = {
    name: "Bob",
    age: 17
};

console.log("\n");
console.log(studentBob);

// преобразуем обьект в JSON
let studentBob_json = JSON.stringify(studentBob);
console.log("\n");
console.log(studentBob_json);

// преобразуем массив в JSON
let mas = [1, 2, 3];
console.log(mas);
console.log(JSON.stringify(mas));
*/



//работа с файлами, для сохранения массива обьектов-отрезков/////////////////////////////////////////

let masOtr = [];
masOtr[0] = createOtrezok(2,5,9,1);
masOtr[1] = createOtrezok(3,3,1,5);
masOtr[2] = createOtrezok(7,3,7,5);

console.log(masOtr);
console.log(JSON.stringify(masOtr));

let masOtr_json = JSON.stringify(masOtr, null, " ");

writeFile_sync("otrezki.txt", masOtr_json);
console.log("файл записан! \n");


let masFromFile_json = readFromFile_sync("otrezki.txt");
let masFromFile = JSON.parse(masFromFile_json);
console.log(masFromFile);

// пробегались по отрезкам и если длина < 2, то обнуляли все поля
for (let i = 0; i < 3; i++) {
    if(masFromFile[i].len <= 2) {
        masFromFile[i].x1 = 0;
        masFromFile[i].y1 = 0;
        masFromFile[i].x2 = 0;
        masFromFile[i].y2 = 0;
        masFromFile[i].len = 0;
    }
}
console.log(masFromFile);

writeFile_sync("otrezki.txt", JSON.stringify(masFromFile, null, " "));


















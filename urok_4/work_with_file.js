"use strict";

// подключаем библиотеку/модуль NodeJS 'fs'
// для работы с файловой системой компьютера/сервера
let fs = require('fs');

// реализуем три основные функции для работы с файлами
// синхронная запись
function writeFile_sync(fileName, data) {
    fs.writeFileSync(fileName, data);
    console.log("Синхронно_Запись обновлена!");
}

// синхронное чтение
function readFromFile_sync(fileName) {
    let data = fs.readFileSync(fileName);
    return data;
}

// синхронное добавление записи к концу файла
function appendToFile_sync(fileName, data) {
    fs.appendFileSync(fileName, data);
}

// протестируем эти функции
// перезапись в файл
writeFile_sync("hellofs.txt", "HELLO FS");
// чтение из файла
let data = readFromFile_sync("hellofs.txt");
console.log("HELLOFS.TXT = " + data);
// добавление к концу файла
appendToFile_sync("hellofs.txt", "hello 2");

data = readFromFile_sync("hellofs.txt");
console.log("HELLOFS.TXT append = " + data);

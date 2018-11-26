"use strict";

window.onload = function () {

    if(localStorage.getItem("book") === null) {
        localStorage.setItem("book", JSON.stringify([]))
    }

    let editName = document.getElementById("editName");
    let editPhone = document.getElementById("editPhone");
    let addBtn = document.getElementById("addBtn");

    function getAllRecords() {
        let bookFromStorage = localStorage.getItem("book");
        return JSON.parse(bookFromStorage);
    }

    function addRecord(record) {
        let bookMas = getAllRecords();
        bookMas.push(record);
        localStorage.setItem("book", JSON.stringify(bookMas))
    }

    addBtn.onclick = function () {
        let record = {
            name: editName.value,
            phone: editPhone.value
        };
        if (record.name !== "" && record.phone !== "") {
            addRecord(record);
            editName.value = "";
            editPhone.value = "";
            alert("Запись успешно добавлена") // заменить на нормальные сообщения
        } else {
            alert("Заполните поля") // заменить на нормальные сообщения
        }
    };

    let findName = document.getElementById("findName");
    let findBtn = document.getElementById("findBtn");
    let resultBox = document.getElementById("result");

    findBtn.onclick = function () {
        resultBox.innerHTML = "";
        let name = findName.value;

        if (name !== "") {
            let book = getAllRecords();
            for (let i = 0; i < book.length; i++) {
                if(book[i].name === name) {
                    // доделать до вида списка, то есть, если несколько записей,
                    // то 1. 123-123-123, 2. 456-456-456
                    resultBox.innerHTML = resultBox.innerHTML + "<br>" + book[i].phone
                }
            }
            if (resultBox.innerHTML === "") {
                resultBox.innerHTML = "Запись не найдена"
            }
            findName.value = "";
        } else {
            alert("Введите имя для поиска")
        }
    }
};











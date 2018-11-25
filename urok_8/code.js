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
        addRecord(record);
    }
};

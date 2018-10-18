"use strict";

function createOtrezok(x1,y1,x2,y2) {
    let newOtrezok = {};
    newOtrezok.x1 = x1;
    newOtrezok.y1 = y1;
    newOtrezok.x2 = x2;
    newOtrezok.y2 = y2;
    // поле с функцией == метод (1й способ добавления функции на обьект)
    newOtrezok.len = function () {
        let dlina = Math.sqrt(
            Math.pow((this.x1 - this.x2), 2) + Math.pow((this.y1 - this.y2), 2)
        );
        return dlina;
    };
    return newOtrezok;
}



let otrA = createOtrezok(2,5,9,1);
console.log(otrA);
console.log(otrA.len());

let otrB = createOtrezok(3,3,1,5);
console.log(otrB);
console.log(otrB.len());











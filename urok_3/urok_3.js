"use strict";

function square(x,y) {
    return x*y;
}

function volume(s,h) {
    return s*h;
}

function getVolume(x,y,z) {
    let s = square(x,y);
    return volume(s,z);
}

// console.log(getVolume(3, 5, 7));

function objCreator(name,age,prof) {
    let man = {};
    man.name = name;
    man.age = age;
    man.prof = prof;
    return man;
}

function objArr() {
    let m1 = objCreator("Alex",35,"math");
    let m2 = objCreator("Maxim",23,"comp");
    let m3 = objCreator("Nick",23,"yandex");
    // console.log(m1);
    // console.log(m2);
    // console.log(m3);

    for (let key in m1) {
        if (m1[key]==35) {
            console.log(m1);
        }
    }
}

// objArr();

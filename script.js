"use strict";

const options = {
    name: "test",
    width: 1024,
    height: 1024,
    colors: {
        border: "black",
        bg: "green"
    },
    makeTest: function() {
        console.log("Nasq - butt");
    }
};

options.makeTest();
const {border, bg} = options.colors;
console.log(border);

//console.log(options);
//console.log(options.colors.border);
//delete options.name;
//console.log(options);

for (let key in options) {
    if (typeof (options[key]) === 'object') {
        for (let i in options[key]) {
            console.log(`Свойство ${i} имеет значение ${options[key][i]}`);
        }
    } else {
        console.log(`Свойство ${key} имеет значение ${options[key]}`);
    }
}

console.log(Object.keys(options).length);

const arr1 = {
    a: 1
};

const arr2 = {
    b: 2
};

const arr3 = {
    c: 3
};

const newArr = Object.assign(arr1, arr2, arr3);
console.log(newArr);
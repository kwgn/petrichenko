"use strict";

/*const person = {
    name: "Alexander",
    age: 25,
    isMarried: false
};

console.log(person.name); //идентичны 2 варианта, но 1 правильный
//console.log(person["name"]);

let ImgArr = ["apple.png", "car.jpg", 8, {}, []]; //в массиве могут быть другие объекты
console.log(ImgArr[4]);*/

//const result = confirm("Are you here?"); //как алерт с 2-мя вариантами ответа
//console.log(result); //принимает true or false

//const answer = prompt("У тебя есть хата на НГ?", "Нету:("); //вторые кавычки - дефолт, который будет заранее находиться в строке
//console.log(answer); //аларм с инпутом, вход - стринг

//const numAnswer = +prompt("У тебя есть хата на НГ?", "Нету:("); //+ это вариант динамической типизации, преобразующий вход в тип number
//console.log(typeof(numAnswer));

/*const answers = [];

answers[0] = prompt("Ваше имя?", "");
answers[1] = prompt("Ваша фамилия?", "");
answers[2] = prompt("Ваш возраст?", "");

document.write(answers); //выводит массив, заполненный пользователем*/

//const category = "toys"; //метод интерполяции, работает только с `такими кавычками`
//const url = "https://";
//console.log(`${url}someurl.com/${category}/5`);
//alert(`We need to buy some ${category}`);

//const answers = [];

let numberOfFilms;

function start() {
    numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");
    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");
    }
}

start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

function rememberMyFilms() {
    for (let i = 0; i < 2; i++) {
        let lastMovie = prompt("Один из последних просмотренных фильмов?", ""),
            lastMovieMark = prompt("На сколько оцените его?", "");

        if (lastMovie != null && lastMovieMark != null && lastMovie != '' && lastMovieMark != '' && lastMovie.length < 50) {
            personalMovieDB.movies[lastMovie] = lastMovieMark; //работа через квадратные скобки защищает от ошибок*/
        } else {
            i--;
        }
    }
}

rememberMyFilms();

function detectPersonalLevel() {
    if (personalMovieDB.count < 10) {
        console.log('Мало');
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
        console.log('Норма');
    } else if (personalMovieDB.count >= 30) {
        console.log('Много');
    } else {
        console.log('Смешно');
    }
}

detectPersonalLevel();

function writeYourGenres() {
    for (let i = 0; i < 3; i++) {
        let lovelyGenre = prompt(`Ваш любимый жанр под номером ${i+1}?`, "");

        if (lovelyGenre != null && lovelyGenre != '' && isNaN(lovelyGenre)) {
            personalMovieDB.genres[i] = lovelyGenre; //работа через квадратные скобки защищает от ошибок*/
        } else {
            i--;
        }
    }
}

writeYourGenres();

function showMyDB() {
    if (personalMovieDB.privat == false) {
        console.log(personalMovieDB);
    }
}

showMyDB();






/*const num = 100;
(num == 99) ? console.log('да') : console.log('нет');

switch (num) { //строгое сравнение ===
    case 99:
        console.log('no');
        break;
    case 49:
        console.log('no');
        break; //если совпадение, чтобы не пошел проверять дальше
    case '100':
        console.log('yes');
        break;
    default: //если ни одного совпадения
        console.log('fuck');
        break;
}*/

/*let num = 56;

while (num <= 55) {
    console.log(num);
    num++;
}

do { // сперва сделай, потом проверь, а выше наоборот
    console.log(num);
    num++;
}
while (num <= 55);*/



/*for (let i = 1; i < 10; i++) {
    if (i === 6) {
        //break; останавливает выполнение цикла
        continue; //пропускает выполнение при выполнении условия
    }
    console.log(i);
}*/

/*function soon() {
    console.log("A lot of money (minimum 1000$) every month");
}

soon(); //вызов функции

function soonSoosoon(text) {
    console.log(text);
}

soonSoosoon("POOPA"); // вызов функции с передачей переменной, которая поступает ей на вход*/

/*function calc(a, b) {
    return (a + b); //после return код перестает отрабатываться, это конец выполнения функции
}

console.log(calc(11, 12));
console.log(calc(700, 77));
console.log(calc(500, 500));*/

/*function up() {
    let num = 50;
    return num;
}

const upNum = up();
console.log(upNum); //с помощью return локальные переменные можно сделать глобальными*/

/* const logger = function() { //данная функция создается только после объявления
    console.log("Hello!")
};

logger(); */

/* const calc = (a, b) => {
    console.log('1');
    return a + b;
};

console.log(calc(3, 4));
// если функция в 1 строчку, то можно опускать фигурные скобки
const simpleCalc = (a, b) => a + b; */

// console.log('ABCDEFGHI'.substr(4, 2));

/* const num = 12.2;
console.log(Math.round(num)); //округление

const test = "12.2px";
console.log(parseInt(test)); //целое число из строки
console.log(parseFloat(test)); //с плавающей запятой */
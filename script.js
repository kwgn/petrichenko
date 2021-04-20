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

let numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");

const personalMovieDB = {
    count: numberOfFilms,
    movies : {},
    actors : {},
    genres : [],
    privat: false
};

let lastMovie = prompt("Один из последних просмотренных фильмов?", "");
let lastMovieMark = prompt("На сколько оцените его?", "");

personalMovieDB.movies[lastMovie] = lastMovieMark; //работа через квадратные скобки защищает от ошибок

console.log(personalMovieDB.movies);
"use strict";

let numberOfFilms;

function start() {
    while (numberOfFilms == '' || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt("Сколько фильмов посмотрел?", '1');
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
    let i = 0;
    while (i < 2) {
        let lastMovie = prompt("Последний фильм?", 'Железный человек'),
            lastMovieMark = +prompt("Дай ему оценку", '8');
        if (lastMovie != '' && lastMovie != null && lastMovie != undefined && lastMovie.length <= 50 && !isNaN(lastMovieMark)) {
            personalMovieDB.movies[lastMovie] = lastMovieMark;
            i++;
        }
    }
}
rememberMyFilms();


function writeYourGenres() {
    for (let i = 1; i < 4; i++) {
        personalMovieDB.genres[i-1] = prompt(`Ваш любимый жанр под номером ${i}?`);
    }
}
writeYourGenres();


function showMyDB() {
    if (personalMovieDB.privat == false) {
        console.log(personalMovieDB);
    }
}
showMyDB();


function detectedPersonalLevel() {
    if (personalMovieDB.count < 10) {
        console.log("Мало");
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
        console.log("Нормально");
    } else if (personalMovieDB.count > 30) {
        console.log("Много");
    } else {
        console.log("Косяк");
    }
}
detectedPersonalLevel();
"use strict";

const a = 100;
(a === 500) ? console.log('yes'): console.log('no');

switch (a) {
    case 99:
        console.log(a);
        break;
    case 101:
        console.log(a);
        break;
    case 1000:
        console.log(a);
        break;
    default:
        console.log('Нет совпадений');
        break;
}

const numberOfFilms = +prompt("Сколько фильмов посмотрел?", '1');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

for (let i = 0; i < 2; i++) {
    let lastMovie = prompt("Последний фильм?", 'Железный человек');
    let lastMovieMark = +prompt("Дай ему оценку", '8');
    personalMovieDB.movies[lastMovie] = lastMovieMark;
}

console.log(personalMovieDB);


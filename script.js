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

let i = 0;
while (i < 2) {
    let lastMovie = prompt("Последний фильм?", 'Железный человек'),
        lastMovieMark = +prompt("Дай ему оценку", '8');
    if (lastMovie != '' && lastMovie != null && lastMovie != undefined && lastMovie.length <= 50 && !isNaN(lastMovieMark)) {
        personalMovieDB.movies[lastMovie] = lastMovieMark;
        i++;
    }
}

/* пример из урока (выше сам решил)
    for (let i = 0; i < 2; i++) {
        const a = promt('Один из последних просмотренных фильмов?', ''),
              b = promt('На колько оцените его?', '');
        if (a != null && b != null && a != '' && b != '' && a.length < 50) {
            personalMovieDB.movies[a] = b;
        } else {
            i--;
        }
    }
*/

console.log(personalMovieDB);
if (personalMovieDB.count < 10) {
    console.log("Мало");
} else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
    console.log("Нормально");
} else if (personalMovieDB.count > 30) {
    console.log("Много");
} else {
    console.log("Косяк");
}

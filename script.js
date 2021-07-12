"use strict";

const personalMovieDB = {

    count: '',

    movies: {},

    actors: {},

    genres: [],

    privat: true,

    start: function () {
        while (personalMovieDB.count == '' || isNaN(personalMovieDB.count)) {
            personalMovieDB.count = +prompt("Сколько фильмов посмотрел?", '1');
        }
    },

    rememberMyFilms: function () {
        let i = 0;
        while (i < 2) {
            let lastMovie = prompt("Последний фильм?", 'Железный человек'),
                lastMovieMark = +prompt("Дай ему оценку", '8');
            if (lastMovie != '' && lastMovie != null && lastMovie != undefined && lastMovie.length <= 50 && !isNaN(lastMovieMark)) {
                personalMovieDB.movies[lastMovie] = lastMovieMark;
                i++;
            }
        }
    },

    writeYourGenres: function () {
        for (let i = 1; i < 4; i++) {
            let favouriteGenre = prompt(`Ваш любимый жанр под номером ${i}?`);
            (favouriteGenre != '' && favouriteGenre != null && isNaN(favouriteGenre)) ? (personalMovieDB.genres[i - 1] = favouriteGenre) : i--;
        }
        personalMovieDB.genres.forEach((elem, i) => {
            console.log(`Любимый жанр #${i+1} - это ${elem}`);
        })
    },

    showMyDB: function () {
        if (personalMovieDB.privat == false) {
            console.log(personalMovieDB);
        }
    },

    detectedPersonalLevel: function () {
        if (personalMovieDB.count < 10) {
            console.log("Мало");
        } else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
            console.log("Нормально");
        } else if (personalMovieDB.count > 30) {
            console.log("Много");
        } else {
            console.log("Косяк");
        }
    },

    toggleVisibleMyDB: function () {
        personalMovieDB.privat ? personalMovieDB.privat = false : personalMovieDB.privat = true;
    }
};
personalMovieDB.start();
personalMovieDB.rememberMyFilms();
personalMovieDB.writeYourGenres();
personalMovieDB.detectedPersonalLevel();
personalMovieDB.toggleVisibleMyDB();
personalMovieDB.showMyDB();

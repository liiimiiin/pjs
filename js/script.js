'use strict';


// / УРОК


// const numberOfFilms = +prompt ("Сколько фильмов вы уже посмотрели?", "");

// const personalMovieDB = {
//     count: numberOfFilms,
//     movies: {},
//     actors: {},
//     genros: [],
//     privat: false
// };


// const a = prompt ("One of have watched movie", ""),
//       b = prompt ("Marck it", ""),
//       c = prompt ("One of have watched movie", ""),
//       d = prompt ("Marck it", "");

// prrsonalMovieDB.movies[a] = b;
// prrsonalMovieDB.movies[c] = d;

// let i = 0;
// while (i < 2) {
//     const a = prompt ("Название фильма", ""),
//         b = prompt ("Оценка", ""); 

//     if (a != null && b != null && a != '' && b != '' && a.length <50) {
//         personalMovieDB.movies[a] = b;
//         i++;
//         console.log('done');
//     } else {
//         console.log('error');
//         i--;
//     } 
// }   

// let i = 0;
// do {
//     const a = prompt ("Название фильма", ""),
//           b = prompt ("Оценка", ""); 

//     if (a != null && b != null && a != '' && b != '' && a.length <50) {
//         personalMovieDB.movies[a] = b;
//         i++;
//         console.log('done');
//     } else {
//         console.log('error');
//         i--;
//     } 
// } while (i < 2);

// if (numberOfFilms < 10) {
//     console.log("Вы посмотрелии слишком мало фмльмов");
// } else if (numberOfFilms >= 10 && numberOfFilms < 30) {
//     console.log("вы классический звритель");
// } else if (numberOfFilms >= 30) {
//     console.log("вы киноман");
// } else {
//     console.log("error");
// }
// console.log(personalMovieDB);

// for (let i = 0; i < 2; i++) {
//     const a = prompt ("One of have watched movie", ""),
//         b = prompt ("Marck it", "");
//     if (a != null && b != null && a != '' && b != '' && a.length <50) {
//         personalMovieDB.movies[a] = b;
//         console.log('done');
//     } else {
//         console.log('error');
//         i--;
//     }    
// }



// if (4 == 9) {
//     console.log('Ok!');
// } else {
//     console.log('error');
// }


// const num = 50;

// if (num < 49) {
//     console.log('error');
// } else if (num > 100) {
//     console.log('Too many');
// } else {
//     console.log('Everthing is ok');

// }

// const num = 66;

// // (num === 50) ? console.log('Everthing is ok'): console.log('error');

// switch (num) {
//     case 49:
//         console.log('error');
//         break;
//     case 100:
//         console.log('error');
//         break;
//     case 50:
//         console.log('ok');
//         break;
//     default:
//         console.log('not this time!');
//         break;

// }

// УРОК

// let num = 50;

// while (num <= 55) {
//     console.log(num);
//     num++;
// }

// do {
//     console.log(num);
//     num++;
// } while (num <= 55);


// for (let i = 1; i < 10; i++) {
//     if (i === 6) {
//         // break;
//         continue;
//     }
//     console.log(i);
// }


//!УРОК 16


// let num = 20;
// function showFirstMessage(text) {
//     console.log(text);
//     let num = 10;
//     console.log(num);
// }

// showFirstMessage("Hello world");
// console.log(num);

// function calc(a, b) {
//     return (a + b); //окончание функции
// }
// console.log(calc(4, 3));
// console.log(calc(5, 6));
// console.log(calc(10, 6));


// function ret() {
//     let num = 50;
//     return num;
// }
// const anotherNum = ret();
// console.log(anotherNum);

// const logger = function() {
//     console.log("hello");
// };

// logger();

// const calc = (a, b) => {
//     console.log('1');
//     return a + b;
// };
// calc();

//Урок 17

// const str = "test";
// const arr = [1, 2, 4];

// // console.log(str[2]);

// // console.log(str.toUpperCase());
// console.log(str.toLowerCase());
// let fruit = 'Some fruit';

// console.log(fruit.indexOf('fruit'));

// const logg = "hello world";
// // console.log(logg.slice(-5, -1));
// // console.log(logg.substring(6, 11));
// console.log(logg.substr(6, 4));

// const num = 12.2;
// console.log(Math.round(num));

// const test = "12.2px";
// // console.log(parseInt(test));
// console.log(parseFloat(test));


//Урок 18

let numberOfFilms;

function start() {
    numberOfFilms = +prompt ("Сколько фильмов вы уже посмотрели?", "");
    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
    numberOfFilms = +prompt ("Сколько фильмов вы уже посмотрели?", "");
    }
}
start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genros: [],
    privat: false
};

function rememberMyFilms() {
    for (let i = 0; i < 2; i++) {
        const a = prompt ("One of have watched movie", ""),
              b = prompt ("Marck it", "");
        if (a != null && b != null && a != '' && b != '' && a.length <50) {
            personalMovieDB.movies[a] = b;
            console.log('done');
        } else {
            console.log('error');
            i--;
        }    
    }
}
// rememberMyFilms();



function detectPersonalLevel() {
    if (numberOfFilms < 10) {
        console.log("Вы посмотрелии слишком мало фмльмов");
    } else if (numberOfFilms >= 10 && numberOfFilms < 30) {
        console.log("вы классический звритель");
    } else if (numberOfFilms >= 30) {
        console.log("вы киноман");
    } else {
        console.log("error");
    }
}
// detectPersonalLevel();

function showMyDB (hidden) {
    if (!hidden) {
        console.log(personalMovieDB);
    }
}
showMyDB(personalMovieDB.privat);

function writeYouGenres() {
    for (let i = 1; i  <= 3; i++) {
        const genre = prompt(`Ваш лбьмый жанр ${i}`);
        personalMovieDB.genros[i - 1] = genre;
    }
}
writeYouGenres();

// console.log(personalMovieDB);

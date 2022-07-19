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

// let numberOfFilms;

// function start() {
//     numberOfFilms = +prompt ("Сколько фильмов вы уже посмотрели?", "");
//     while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
//     numberOfFilms = +prompt ("Сколько фильмов вы уже посмотрели?", "");
//     }
// }
// start();

// const personalMovieDB = {
//     count: numberOfFilms,
//     movies: {},
//     actors: {},
//     genros: [],
//     privat: false
// };

// function rememberMyFilms() {
//     for (let i = 0; i < 2; i++) {
//         const a = prompt ("One of have watched movie", ""),
//               b = prompt ("Marck it", "");
//         if (a != null && b != null && a != '' && b != '' && a.length <50) {
//             personalMovieDB.movies[a] = b;
//             console.log('done');
//         } else {
//             console.log('error');
//             i--;
//         }    
//     }
// }
// // rememberMyFilms();



// function detectPersonalLevel() {
//     if (numberOfFilms < 10) {
//         console.log("Вы посмотрелии слишком мало фмльмов");
//     } else if (numberOfFilms >= 10 && numberOfFilms < 30) {
//         console.log("вы классический звритель");
//     } else if (numberOfFilms >= 30) {
//         console.log("вы киноман");
//     } else {
//         console.log("error");
//     }
// }
// // detectPersonalLevel();

// function showMyDB (hidden) {
//     if (!hidden) {
//         console.log(personalMovieDB);
//     }
// }
// showMyDB(personalMovieDB.privat);

// function writeYouGenres() {
//     for (let i = 1; i  <= 3; i++) {
//         const genre = prompt(`Ваш лбьмый жанр ${i}`);
//         personalMovieDB.genros[i - 1] = genre;
//     }
// }
// writeYouGenres();

// // console.log(personalMovieDB);

//Урок 19

// function first() {
//     //do something
//     setTimeout(function() {
//         console.log(1);
//     }, 500);
// }
// function second() {
//     console.log(2);
// }

// first();
// second();

// function learnJS(lang, callback) {
//     console.log(`я учу: ${lang}`);
//     callback();
// }

// learnJS(`Javascript`, function() {
//     console.log(`Я прошел этот урок!`); 
// });

//Урок 20

// const options = {
//     name: 'test',
//     width: 1024,
//     height: 1024,
//     colors: {
//         border: 'black',
//         bg: 'red'
//     },
//     makeTest: function() {
//         console.log('Test');
//     }
// };

// // options.makeTest();

// // console.log(Object.keys(options).length);

// const {border, bg} = options.colors; // деструктуризация
// console.log(border);
// console.log(options.name);

// delete options.name;
// console.log(options);
// let counter = 0;
// for (let key in options) {
//     if (typeof(options[key]) === 'object') {
//         for (let i in options[key]) {
//     console.log(`Свойство  ${i} имеет значение ${options[key][i]}`);
//     counter++;
//         }
//     } else {
//     console.log(`Свойство  ${key} имеет значение ${options[key]}`);
//     counter++;
//     }
// }
// console.log(counter);

//Урок 21

// const arr = [2, 13, 26, 6, 10];
// arr.sort();
// console.log(arr);

// function compareNum(a, b) {
//     return a - b;
// }
// arr[99] = 0;

// console.log(arr.length);
// console.log(arr);

// arr.forEach(function(item, i, arr) {
//     console.log(`${i}: ${item} внутри массива ${arr}`);
// });


// arr.pop();
// arr.push(10);
// console.log(arr);

// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }

// for (let value of arr) {
//     console.log(value);
// }

// const str = prompt('', '');
// const products = str.split(', '); // сплит добавасляет условие
// products.sort(); // метод сортировки
// console.log(products.join('; ')); // метод склейки в однй строку

//Урок 22

let a = 5,
    b = a;

b = b + 5;
console.log(b);
console.log(a);

//передача по ссылке
const obj = {
    a: 5,
    b: 1
};
// const copy = obj;

// copy.a = 10;

// console.log(copy);
// console.log(obj);


function copy(mainObj) {
    let objCopy = {};
    let key;
    for (key in mainObj) {
        objCopy[key] =  mainObj[key];
    }
    return objCopy;
}

const numbers = {
    a: 2,
    b: 5,
    c: {
        x: 7,
        y:4
    }
};

const newNumbers = copy(numbers);

newNumbers.a = 10;
// console.log(newNumbers);
// console.log(numbers);

const add = {
    d: 17,
    e: 20
};
const clone = (Object.assign({}, add));

clone.d = 20;
// console.log(add);
// console.log(clone);

const oldArray = ['a', 'b', 'c'];
const newArray = oldArray.slice();
newArray[0] = 'asasas';
console.log(newArray);
console.log(oldArray);


const video = ['ytobe', 'vimeo', 'rutybe' ],
      blogs = ['wordpress', 'livejornal', 'blogg'],
      internet = [...video, ...blogs, 'vk', 'facebook'];
      console.log(internet);

function log(a, b, c) {
    console.log(a);
    console.log(b);
    console.log(c);
}
const num = [2, 5, 7];

log(...num);

const array = ['a', 'b'];
const newArray = [...array];

const q = {
    one: 1,
    two: 2
};

const newObj= {...q};

newObj.one = 3;
console.log(newObj);
console.log(q);


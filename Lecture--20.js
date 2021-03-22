//--------------------------------------------------Promise



//es 2015
//promise это объект который помнит свое состояние
//3 возможных состояния
//ожидание
//1 pending  => fulfiled(выполнено)- на эти 2 состояния навешиваются колбэк функции (есть кастомная колбэк функция)
//           => rejected(ошибка)

//объект промиса используется кодом который должен выполнить какую то логику асинхронно

//создание промиса

// let promise = new Promise(function(resolve, reject) {

// })

// let promise = new Promise(function(resolve, reject) {
//     // Эта функция будет вызвана автоматически

//     // В ней можно делать любые асинхронные операции,
//     // А когда они завершатся — нужно вызвать одно из:
//     // resolve(результат) при успешном выполнении
//     // reject(ошибка) при ошибке
//resolve и reject это название переменных которые ссылаются на кобэк функцию
//   })

//полная и правильная форма
//promise.then(onFulfilled, onRejected)

//частный случай(скращенные формы)
// onFulfilled сработает при успешном выполнении
//promise.then(onFulfilled)
// onRejected сработает при ошибке
//promise.then(null, onRejected) === .catch(onRejected)

//reject(new Error('O_o')) === throw new Error('O_o');


'use strict'

// let promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         console.log('start');
//         resolve('result');//поменять местами колбэк функция вызывается отдельно
//         reject('error');//rejected : result
//         // setTimeout(() => {
//         //     console.log('tttt');//отработало после колбэк функции так как он выполняется но после выполнеия ждет 5 секунд
//         // }, 5000);
//         for (let i = 0; i < 10000; i++) {
//             console.log(i);//resolve последним отработает
//         }
//         console.log('end');
//     }, 1000)
// });
// promise
//     .then(
//       result => {
//           // первая функция-обработчик - запустится при вызове resolve
//           console.log("Fulfilled: " + result); // result - аргумент resolve
//       },
//       error => {
//           // вторая функция - запустится при вызове reject
//           console.log("Rejected: " + error); // error - аргумент reject
//       }
//     );

// console.log('hello ');//для проверки что функция работает асинхронно


// let promise = new Promise((resolve, reject) => {

//         console.log('start');
//         //resolve('result');//поменять местами колбэк функция вызывается отдельно
//         //reject('error');//rejected : result
//         for (let i = 0; i < 10; i++) {
//             console.log(i);//resolve последним отработает
//         }
//         throw new Error('O_o O_o O_o');
//         // setTimeout(() => {
//         //     console.log('tttt');//отработало после колбэк функции так как он выполняется но после выполнеия ждет 5 секунд
//         // }, 5000);

//         console.log('end');


// });
// promise
//     .catch(console.log('Right'));

// console.log('hello ');//для проверки что функция работает асинхронно



// let promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         reject(new Error('Время вышло'));
//         console.log("Rejected: " );
//     }, 1000)
// });
// promise
//     .then(
//       result => {
//           // первая функция-обработчик - запустится при вызове resolve
//           console.log("Fulfilled: " + result); // result - аргумент resolve
//       },
//       error => {
//           // вторая функция - запустится при вызове reject
//           console.log("Rejected: " + error); // error - аргумент reject
//       }
//     );


// let promise = new Promise((resolve, reject) => {


//     setTimeout(() => resolve("result"), 1000);//если поставить 3000 результат будет другой
//     setTimeout(() => reject(new Error("ignored")), 2000);


//   });

//   promise
//     .then(
//       result => console.log("Fulfilled: " + result), // сработает
//       error => console.log("Rejected: " + error) // не сработает
//     );


//Промисификация
//когда асинхронная логика оборачивается и возвращается как объект промиса
//удобства работы с асинхронным кодом



//Цепочка промисов

//асинхронные цепочки промисов
//осуществляется при помощи последовательности .then
//httpGet(...)
//.then(...)//в следующий then передается результат из предидущего
//.then(...)
//.then(...)


//4 свойства
//PromiseState - состояние объекта промиса когда он только создан (pending)
//PromiseResult - результат. при созданиии значения нет
//PromiseFullFillReactions- список колбэк функций успешно выполненых
//PromiseRejectReactions - список колбэков обработчиков ошибки


//когда асинхронный код выполняет reject то PromiseState = rejected
//и если resolve то promiseState = resolved
//все функции обработчики помещатся в систмную очередь PromiseJobs
//очередь выполняется после исполнения основного интерпритируемого кода

//исключение из правила с очередью
//если функция resolve возвращает другой промис то дальнейшее выполнение колбэк функций ожидают результата выполнения этого промиса
//функции обработчики будут выплнятся уже с этим новым промисом


var promise = new Promise((resolve, reject) => reject(1));

promise.then( function f1(result) {
    console.log(result);
    return 'f1';
})

promise.then( function f2(result) {
    console.log(result);
    return 'f2';
})
//никакой передачи не ппроисходит chaining(138 строка) так как обработчики навешены на один и тот же промис (выполняются последовательно)

//PromiseState - 'resplved'
//promiseResult - 1
//PromiseFullFillReactions- [f1, f2]
//PromiseRejectReactions - [Thrower, Thrower] автоматические обработчики

//1 успешно arg => arg
//2 ошибка arg => throe arg

//нужно создать новый промис внутри обработчика
//они пустые
//1 когда выполняется обработчик f1 и f2  то их результат будет передан в новые промисы
//1  если возвращается обычное значение не промис то новый промис переходит в состояние resolved
//2 если был throw то новый промис перейдет в состояние rejected с ошибкой
//3 если возвращается промис (return new promise) колбэк функцией то мы должны использовать результат этого возвращенного промиса
//и результат этого промиса может быть resolve и rejected





































































// //задание

// //написать игру морской бой
// //бот против бота
// //класс самой игры когда первый бот ходит когда второй начало игры конец игры
// //класс поля с методами инициализация (расположение караблей 4444  333  22  1 что бы знать какой это карабль) поля метод поподания в корабль
// //класс бота метод генерирует случ координату имя его (можно сделать память что бы он помнил где ужестрелял)

// 'use strict'


// class Field {
//     constructor(x, y) {
//         this.x = x;
//         this.y = y;
//         this.field = new Array(10);
//     }
//     makeField() {
//         for (let i = 0; i < this.field.length; i++) {
//             this.field[i] = new Array(10);
//         }
//         for (let row = 0; row < this.field.length; row++) {
//             for (let col = 0; col < this.field[row].length; col++) {
//                 this.field[row][col] = 0;
//             }
//         }
//         return this.field;
//     }
//     init() {
//         this.field[0][0] = 4;
//         this.field[0][1] = 4;
//         this.field[0][2] = 4;
//         this.field[0][3] = 4;
//         this.field[5][0] = 3;
//         this.field[5][1] = 3;
//         this.field[5][2] = 3;
//         this.field[9][3] = 1;
//     }
//     printField() {
//         console.log('--------------------');
//         for (let row = 0; row < this.field.length; row++) {
//             let manual = '';
//             for (let col = 0; col < this.field[row].length; col++) {
//                 manual += this.field[row][col] + ' ';
//             }
//             console.log(manual);
//         }
//         console.log('--------------------');
//     }
//     check(x, y) {
//         if (arguments.length) {
//             this.field[x][y] = '-' + this.field[x][y];
//             }
//         }

// }

// class Bot {
//     constructor(name) {
//         this.name = name;
//         this.coordinates = {};
//         this.memory = new Set();
//         //this.lastShot = false;
//     }
//     makeShot() {
//         console.log('*' + this.name + '*');
//         console.log('(' + 'x:' + (this.coordinates.x) + ' ' + 'y:' + (this.coordinates.y) + ')');
//         this.coordinates.x = Math.floor(Math.random() * 10);
//         this.coordinates.y = Math.floor(Math.random() * 10);
//         if (this.memory.size) {
//             this.memory.forEach(val => {
//                 if (this.coordinates.x == val.x && this.coordinates.y == val.y) {
//                     //посмотреть рекрсию wash dishes
//                     console.log('Уже стрелял туда !!!')//нужно подумать как сделать с помощью булева значения (стрелял не стрелял)
//                     return;
//                 } else {
//                     this.memory.add({x: this.coordinates.x, y: this.coordinates.y})
//                     return this.memory;
//                 }
//             })
//         }
//     }
// }





// let firstField = new Field();
// firstField.makeField();
// firstField.init();
// firstField.printField();

// let firstBot = new Bot('Петя');


// for (let i = 0; i < 100; i++) {
//     console.log('ход - ' + i);
//     firstBot.makeShot();
//     firstField.check(firstBot.coordinates.x, firstBot.coordinates.y);
//     firstField.printField();
// }

// console.log(firstBot.memory);
// // console.log(-0 + '');
// // console.log(-(-0 + ''));

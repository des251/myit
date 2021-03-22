//Модули

//node js серевер для javascript
//common js - одна из систем помтроения модульности и была взята на вооружение сервером nodejs

//старые системы модулей
//AMD
//UMD

//export - элемент будеэкспортироваться и будет доступен для других модулей

// export let one = 1;
// let two = 2;
// export {two};
// export {one, two};
// export {two as twice};//во внешнем модуле этот модульь будет иметь имя twice это имя называется алиас

// export {User, sayHi} //и класс и функции

// //функции без имени нельзя экспортировать


// //import

// import{one, two} from './nums';
// //import {two as twice};//алиаса

// import * as numbers from './nums';//импортированные элементы становятся свойствами numbers а numbers становиться объектом

//export default

//этот модуль выполняет экпорт только одного экспортируемого значения и этот модуль становиться  значением по умолчанию
//такое значение можно импортировать без фигурных скобок import User from '/nums'

//сисема сборки проекта Babel.js
//webpack технология которая применяется совместнос бабел для построения отдельных модулей


//генеаторы

//это функции которые возвращают промежуточный результат

// function* sayHi() {
//     yield 1;//прерывает функцию и возвращает промежуточный результат в виде объекта {value: 1, done: false}
//     yield 2;
//     return 3;
// }

//let generator = sayHi();//сама функция не выполняется возвращает спец объект который выполняет эу ф-цию


// function* generateSequence() {
//     yield 1;
//     yield 2;
//     return 3;
// }

// let generator = generateSequence();
// console.log(generator);
// let one = generator.next();
// console.log(one);
// let two = generator.next();
// console.log(two);
// let three = generator.next();
// console.log(three);
// let four = generator.next();
// console.log(four);

// //движемся только в перед назад вернуться нельзя

// generator = generateSequence();
// console.log(generator);
// one = generator.next();
// console.log(one);
// two = generator.next();
// console.log(two);
// three = generator.next();
// console.log(three);
// four = generator.next();
// console.log(four);

//* можно и так и так

//function* ()
//function *()


//объект генератора является итерируемым можно перебрать через for of
// function* generateSequence() {
//     yield 1;
//     yield 2;
//     return 3;
// }

// let generator = generateSequence(); //перебираются только yildy то есть return он ен видит
// for (let value of generator) {
//     console.log(value);
// }
//если нужно сделать что бы выводились все нужно использовать вместо return yield

// function* generateSequence() {
//     yield 1;
//     yield 2;
//     return 3;
// }

// let generator = generateSequence(); //перебираются только yildy то есть return он ен видит
// for (let value of generator) {
//     console.log(value);
// }
// let three = generator.next();
// console.log(three);




//композиция в вопросе генераторов
//это когда один генератор влючает в себя другие генераторы
//... это оператор почитать каждое значение на каждой терации записывает в масси
// function* generateSequence(start, end) {
//     for (let i = start; i <= end; i++) {
//         yield i;
//     }
// }
// let sequnce = [...generateSequence(2, 5)];

// // console.log(sequnce);

// function* generateAlphaNum() {
//     yield* generateSequence(48, 57);//делеирует выполнению другому генератору
//     yield* generateSequence(65, 90);
//     //yield* generateSequence(97, 122);
//     for (let i = 97; i <= 122; i++) {//то же самое
//         yield i;
//     }

// }

// let str = '';

// for(let code of generateAlphaNum()) {
//     str += String.fromCharCode(code);
//   }

// console.log(str);


// //yield может работать в бе стороны

// let result = yield value//возвращает во внешний код значение value и останавливает выполнение генератора
// //после выполнени явнешним кодом
// generator.next(arg)
// //значение arg записывается в переменную result


// function* gen() {
//     // Передать вопрос во внешний код и подождать ответа
//     let result = yield '2 + 2?';
//     console.log(result);
//     let result2 = yield '3 * 5?';
//     console.log(result2);
// }

// let generator = gen();

// //let question = generator.next().value;//что бы yield вернуло значение
// //let question2 = generator.next().value;
// generator.next().value; //от фигурной открывающей скобки до yield
// //generator.next().value;
//   // "2 + 2?"
// //console.log(question);
// generator.next(4);//так как вызвали снова next идет следующая команда о коду а это console.log(result)


// generator.next(9);

//generator throw
//вернуть можно не только значение но и ошибку


// function* gen() {
//     try {//потенциально опасный код
//         // в этой строке возникнет ошибка
//         let result = yield "Сколько будет 2 + 2?"; // (**)

//         console.log("выше будет исключение ^^^");
//     } catch(e) {//е это catch перехватывает ошибку throw
//         console.log(e); // выведет ошибку
//     }
//     console.log('dddddd');
// }

// let generator = gen();

// let question = generator.next().value;

// generator.throw(new Error("ответ не найден в моей базе данных")); // (*)
// //генератор из внешнего кода моджет вернуть объект ошибки


//generator throw
//вернуть можно не только значение но и ошибку

//почитать про try catch
function* gen() {
    try {//потенциально опасный код
        // в этой строке возникнет ошибка
        let result = yield "Сколько будет 2 + 2?"; // (**)

        console.log("выше будет исключение ^^^");
    } catch(e) {//е это catch перехватывает ошибку throw
        console.log(e); // выведет ошибку
    }
    console.log('dddddd');
}

let generator = gen();

let question = generator.next().value;

generator.throw(new Error("ответ не найден в моей базе данных")); // (*)
//генератор из внешнего кода моджет вернуть объект ошибки


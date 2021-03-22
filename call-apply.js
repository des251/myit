// let data = {
//     name: 'John',
//     age: 25
// }

// function getFullName(surname) {
//     console.log(this.name + surname);
// }

// //разница между call и apply 
// getFullName.call(data, 'Snow');//один аргумент
// getFullName.apply(data, ['Weak']);//несколько аргументов


// //жесткий метод привязки контекста

// function count(number) {
//     return this * number;
// }

// let x = count.bind(2);//четко определяем чему будет равен this то есть 2

// console.log(x(5));
// console.log(x.this);//undefined

//1 Просто вызов функции - window/undefined
//2 Метод объекта - this = объект
//3 Конструктор (new) - this = новый созданный объект
//4 Указание конкретноо контекста - call, apply, bind
//5 В обработчиках событий внутри callback функции this будет
//равет тому элементу на котором произошло событие
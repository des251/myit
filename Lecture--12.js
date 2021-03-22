//Замыкания
//область видимости (scope) та областьв которой переменную можно использовать
//1 Global scope - переменные видимы во всей программе
//2 Local scope - локальные переменные видны только внутри функции
//block scope - это функция в js


// var scope = 'global';
// function f() {//все переменные инициализируются здесь но им не присваивается значение поэтому undefined не использует глобальную т к она была проинициализирована
//     console.log(scope);
//     var scope = 'local';
//     console.log(scope);
// }
// f();

//scope cahin - каждая сточка кода js(не важно ф-ция или глобальная) ассоциирован со свои собственным scope chain
//scope chain - это список объектов который определяет набор переменных которые доступны для данной строчке кода

//для строчки кода не расположенной в функции scope chain  состоит из одного объекта Global Object

//для отделной функции - scope chain состоит из двух объектов : 1й - это объект который ассоциирован с самой функцией он хранит локальные переменные этой функции,
//и параметры функции()
// 2й - это Глобальный объект

//функиция вложнная в другую ф-цию - scope chain будет состоять из 3х и более объектов
//Что при объявленни ф-ции запоминается scope chain ассоциированный с ней в момент объявления
//в момент вызова ф-ции она создает новый объект для сохранения в нем своих собственных локальных переменных и параметров и добавляет этот объект к своему сохраненному scope chain удлинняя его

//Комбинация объекта функции и scope chain сохраненного для этой ф-ции называется "замыканием " в теории програмирования - оно используется для разрешения вызовов переменных

// var scope = 'global scope';

// function checkscope() {
//     var scope = 'localscope';
//     function f() {
//         console.log(scope);
//         return scope;
//     }
//     return f();
// }
// checkscope();

// var scope = 'global scope';

// function checkscope() {
//     var scope = 'localscope';
//     function f() {
//         console.log(scope);
//         return scope;
//     }
//     return f;
// }
// checkscope()();//выводит local так как scope chain остается так как из за замыкания

//в js функции выполняются используя scope chain который существовал в момент объявления этой функции

// uniqueInteger.counter = 0;

// function uniqueInteger() {
//     console.log(uniqueInteger.counter);
//     return uniqueInteger.counter++;
// }
// uniqueInteger();
// uniqueInteger();
// uniqueInteger.counter = 0;
// uniqueInteger();

// var uniqueInteger = (function() {
//     var counter = 0;
//     return function() {
//         return counter++;
//     };
// }());
// console.log(uniqueInteger());
// console.log(uniqueInteger());
// console.log(uniqueInteger());
// console.log(uniqueInteger());
// uniqueInteger.counter = 0;//вася не нагадит
// console.log(uniqueInteger());
// console.log(uniqueInteger());

//две и более вложенных функции размещенных в одной и той же внешней функции могут использовать вместе один и тот же scopr chain

// function counter() {
//     var n = 0;
//     return {
//         count: function() {return n++},
//         reset: function() {n = 0;}
//     };
// }

// var c = counter();
// var d = counter();

// console.log(c.count());
// console.log(d.count());
// console.log(c.count());
// console.log(d.count());
// c.reset();
// console.log(c.count());
// console.log(d.count());

//оба метода count и reset одного и того же объекта работают с одной и той же переменной n
//каждый вызом метода count создает новый scope chain и соответственно новую переменную n
//  т о дважды вызвав на исполнение counter мы создадим два объекта у каждых и з которых своя собственная переменная n

//---------СВОЙСТВА ФУНКЦИИ

// console.log(typeof function o() { });

// function i(x, y) {
//     return x * x;
// }
// console.log(i(2));
// console.log(i.length);//length показывает количество аргументов функции
// console.log(i.prototype);
// console.log(i.toString());//возвращает текст самой функции

//call() apply()//посмотреть отличичя и понять

//вызов функции неявный как будто функция является собств методом объекта к которому мы применяем call и apply

//конструктор function для создания объектов функции
// var f = new Function('x', 'y', 'return x * y;');
// console.log(f);
// console.log(f(1, 2));
// f = 0;
//console.log(f(2, 2));// not a function//переопределили как обычную переменную
//можно задать любое количество аргументов для формируемой функции
//последний аргумент это строка которая задает тело функции
//ф-ции создаются анонимными  f - это переменная то есть ссылка а не имя функции как например function f() и его можно переопределить как переменную
//конструктор function позволяет формировать сразу на лету функции
//при каждом вызове будет формироваться новый объект функции
//конструкторы которые формируться через функции конструктор не создают свой собственный scope

// 'use strict'
// var scope = 'global';
// function f() {
//     var scope = 'local';
//     return new Function('return scope');

// }
// console.log(f()());//должен выдать global//не выдает так как ссылается на window



//----------------регулярные выражения

//это объект который задает некторый шаблон для последовательности символов
//RegExp используется для создания регулярного выражения
//используем либо класс string либо класс RegExp

//1 вар использование конструктора new RegExp()
//2 через использование литерала регулярного выражения(/s$/);2 слота

//в квадратных скобках символы из одного слот[abc]


//'JavaScript'.search(abv);

// var temp = '1 plus 2 equals 3';
// console.log(temp.match(/1/));

//var pattern = /Java/g;
//var pattern = /[abc]/g;//находит по отдельности все что в квадратных скобках
//var pattern = /[^abc]/g;//означает не
//var pattern = /[a-z]/g;//весь алфавит прописные
//var pattern = /[ab][a-zA-Z0-9]/g;
//var pattern = /[ab][\w]/g;
//var pattern = /[ab][\W]/g;//все кроме


//{n,m}---???самая универсальная вещь
//{m}
//var pattern = /\d{2,4}/g;
// var pattern = /[a-zA-Z]{3}\d?/g;//либо три первых буквы либо если есть цифра то 3 первых буквы и цифра

//+ - один либо большое количество повторений== {1,}
//* - это ноль или более повторений== {0,}

//var pattern = /0[xX][a-fA-F0-9]+/g;

//var pattern = /ab|cd|ef/g;//или

// var pattern = /java(script)?/g;//группирует слоты в круглые скобки
// var text = 'Java8Scri898pt 0xA10 is more ab 89 fucdn tha555n Java java Javascript';
// var result;
// while ((result = pattern.exec(text)) != null) {
//     console.log('Matched ' + result[0] + '' + ' at position ' + result.index + '; next search begins at ' + pattern.lastIndex);
// }

///[ab][a-zA-Z0-9]/ = \w //аналог
//\s \S пробелы и не пробелы
//\d -цифры
//\D - нецифры
//\b - backspace



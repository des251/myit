//'use strict'

//атрибуты св-в объектов

//written/enumerated/configured
//es3 нельзя было управляьб этими свойствами
//es5 можно
//1 при разработке библиотек
//2 можно заморозить объекты сделать их неизменяемыми freezing objects


//data property
// 1 value
// 2 writable
// 3 enumerable
// 4 configurable

//Accessor propertys
// 1 get
// 2 set
// 3 enumerable
// 4 configurable


// console.log(Object.getOwnPropertyDescriptor({x : 1}, 'x'));//data property

// var x = {y : 2};
// console.log(Object.getOwnPropertyDescriptor(x, 'y'));

//console.log(Object.getOwnPropertyDescriptor({x : 1}, 'x'));
// var random = {
//   get octet() {return Math.floor(Math.random() * 256);},
//   get uint16() {return Math.floor(Math.random() * 65536);},
//   get int16() {return Math.floor(Math.random() * 65536) - 32768;},
//   get cat() {return 'Umpa - Lumpa';}
// }
// console.log(random.octet);
// console.log(random.uint16);
// console.log(random.int16);
// console.log(random.cat);


// console.log(Object.getOwnPropertyDescriptor(random, 'octet'));


// var a = {};
// console.log(Object.getOwnPropertyDescriptor(a, 'y'));
// console.log(Object.getOwnPropertyDescriptor(Object.toString, 'y'));//у object prototype


//метод для установки св-в
//Object.defineProperty();//позволяет добавить св-во и установить атрибуты
//Object.defineProperties();//-//- несколько свойств

//если нельзя изменить свойства с помощью этого метода tye error


// var o = {};
// Object.defineProperty(o, 'x', {
//     value : 1,
//     writable : true,
//     enumerable : false,
//     configurable : true
// });
// o.y = 7;
// o.f = 9;
// console.log(o.x);
// console.log(Object.keys(o));//not enuumerable
// console.log(Object.getOwnPropertyDescriptor(o, 'x'));
// console.log(Object.getOwnPropertyDescriptor(o, 'y'));//уже будет enumerable

// var o = {};
// Object.defineProperty(o, 'x', {
//     value : 1,
//     writable : true,
//     enumerable : true,
//     configurable : true
// });
// o.y = 2;
// console.log(Object.keys(o));//enumerable
// console.log(Object.getOwnPropertyDescriptor(o, 'x'));
// Object.defineProperty(o, 'x', {writable : false});//запрещаем свойству менять значение
// console.log(Object.getOwnPropertyDescriptor(o, 'x'));
// o.x = 9;//теперь так нельзя поменять
// console.log(o.x);
// Object.defineProperty(o, 'x', {value : 7});//так можно поменять   защиат от дурака
// console.log(o.x);

// Object.defineProperty(o, 'x', {get : function() {return 0;}});
// console.log(Object.getOwnPropertyDescriptor(o, 'x'));//меняем на accessor properties



// var p = Object.defineProperties({}, {
//     x : {value : 1, writable : true, enumerable : true, configurable: true},
//     y : {value : 1, writable : true, enumerable : true, configurable: true},
//     r : {
//         get: function() {return Math.sqrt(this.x * this.x + this.y * this.y)},
//         enumerable: true,
//         configurable: true
//     }
// });

// console.log(Object.getOwnPropertyDescriptor(p, 'x'));
// console.log(Object.getOwnPropertyDescriptor(p, 'y'));
// console.log(Object.getOwnPropertyDescriptor(p, 'r'));

// console.log(p.r);
// console.log(p);


//атрибуты у объектов

// 1 prototype ссылка на родительский объект
// 2 class хранитт строку которая характеризует тип этого объекта  (значение этого атрибута запрещено)
// 3 extensible (расширяемый) если true можно добавлять новые свойства если false то запрещено


// var b = {x: 1};
// console.log(b.toString());//показывает класс к которому пренадлежит объект то есть object

// var c = [1, 2, 3];//не обращается к классу а выводит содержимое массива
// console.log(c.toString());

// console.log(Object.isExtensible(b));
// console.log(Object.isExtensible(c));

// Object.preventExtensions(b);//меняем на не расширяемый(изменять те что существуют можно новые добавлять нельзя)

// console.log(Object.isExtensible(b));
// b.y = 3;
// b.x = 9;
// b.x = 2;
// b.z = 90;
// console.log(b);//однажды сделав объект не расширяемый назад уже нельзя вернуть


// var x = {x : 1};
// var y = Object.create(x);
// y.i = 2;
// console.log(x);
// console.log(y);

// console.log(Object.isExtensible(y));

// Object.preventExtensions(y);
// console.log(Object.isExtensible(y));
// y.o = 5;
// console.log(y);//нельзя добавлять

// x.o = 5;

// console.log(x);
// console.log(y.o);//прототипу можно добавлять и менять значения


//полезне методы ES5


//Object.seal()  делпет объект нерасширяемымы как Object.preventExtensions и все св-ва делает non configurable:
// к нему нельзя добавлять новые св-ва
// уже сущ е св-ва нельзя удалить и нельзя конфигурировать(то есть менять значения через defineProperty())
// св-ва существущ writable по прежнему могут быть перезаписаны
// его нельзя вернуть обратно

// var x = {x: 1, y: 2};

// Object.seal(x);
// console.log(Object.isSealed(x));
// x.x = 9;//значения менять можно
// x.z = 1;//добавлять новые нельзя
// x.y = 10;
// x.l = 5;
// delete x.x;
// console.log(x);

// console.log(Object.getOwnPropertyDescriptor(x, 'x'));
// console.log(Object.getOwnPropertyDescriptor(x, 'y'));

// Object.defineProperty(x, 'x', {
//     value : 5
// });
// console.log(x);//можно поменять значение через defineProperty() и только значение то есть value

// Object.defineProperty(x, 'x', {
//     value : 5,
//     writable : true,
//     enumerable : false,
//     configurable : true
// });
// console.log(x);//TYpe error так как конфигурация запрещена

// //попробовать сконфигурировать Object.getOwnPropertyDescriptor

// //Object.freeze то же самое что seal  но более жесткое и делает все свойства data poperty неизменяемыми
//// то есть все то же самое только значение value нельзя менять

// var x = {x: 1, y: 2};

// Object.freeze(x);
// console.log(Object.isFrozen(x));
// console.log(Object.getOwnPropertyDescriptor(x, 'x'));

// x.z = 1;
// x.y = 10;
// delete x.x;
// console.log(x);

// Object.defineProperty(x, 'x', {
//     value : 5,
//     writable : false,
//     enumerable : true,
//     configurable : false
// });
// console.log(x);//TYpe error так как конфигурация запрещена и изменения запрещены


//можно замороить все прототипы и сам объект не добавлять accessor prpertys  и тогда уже с ним ничего нельзя сделать!!!!!

// var cat = {};
// cat.say = function(m) {
//     console.log(m)
// }
// console.log(cat);
// cat.say('meawwww');




//-----------------------------------FUNсTION

//фукция объявленная в объекте это метод и принадлежит объекут
//для метода объект становится кнтекстом вызова функции
//к контексту вызова имеем дотуп через this
//отдельный вид функций конструктор ее назначение создание новых объектов
//в js функции это особый вид объектов
//в функцию можно добавить св-во как обычному объекту
//у функции может быть свой набор методов и эти методы могут вызываться на объекте функции

//ф-ции могут объявляться внтри других функций такая ф-ция будет вложенная функция вложенная фция имеет доступ ко всем еременным которые объявлены в ее внешней функции
//т о функции являются замыканием(closures)
//2 категории функий:
//-statement(declaration)

//-expression  создание через var , функция внутри метода

// printprops({x: 1, y: 2, z: 3});//hoisted(это когда можно вызывать функцию до ее объявления)
// function printprops(o) {
//     for (var p in o) {
//         console.log(p + ':' + o[p] + '\n');
//     }
//     //console.log(this);//обратиться к глобальному объекту
// }

//console.log(square(10)); //hoisted не работает

// var square = function(x) {
//     //console.log(this);
//     return x * x;

// }

// console.log(square(10));


// var data = [1, 2, 8, 4, 6, 3];
// data.sort(function(a, b) {
//     return a-b;
// });
// console.log(data);

// var tensquared = (function(x) {
//     return x * x;
// } (10)
// );
// console.log(tensquared);

// var tensquared = (function(x, y) {
//     return x * y;
// } (10, 5)
// );
// console.log(tensquared);

//пример использования function expression
//'use strict'
// var age = 17;
// if (age >= 18) {
//     function sayHi() {
//         console.log('hello')
//     }
// } else {
//     function sayHi() {
//         console.log('no no no')
//     }
// }
// sayHi();

//при использовании use strict только так можно объявить функцию в зависимости от условия
// var age = 17;
// var sayHi;
// if (age >= 18) {
//     sayHi = function () {
//         console.log('hello')
//     }
// } else {
//     sayHi = function () {
//         console.log('no no no')
//     }
// }
// sayHi();


// //имя у functional expression можно добавить что бы сделать рекурсию(вызывать саму себя на исполнение)
//named function expression

//допплнительное имя нельзя перезаписывать
// var f = function fact(x) {
//     if (x <= 1) return 1;
//     else return x * fact(x -1);
// }
// var d = f;//если функцию записать в новую переменную то с дополнительным именем рекурсия сработает так как функция будет ссылаться на дополнительное имя а не на само имя функции
// console.log(f(170));//факториал числа 5
// console.log(d(170));


//рекурсия

// var washNextItem = function(itemsleft) {
//     itemsleft--;
//     console.log('В раковине осталось ' + itemsleft + ' предметов');

//     if (itemsleft > 0) {
//         washNextItem(itemsleft);
//     }
// }
// washNextItem(10);


//function statemet - hoisted можно вызыватьна исполнение до того как выполнено объявлеие
//в js объявление переменных Hoisted а присвоение значений не hooisted


//вызов функций на исполнение
//1 как фунция
//2 как метод
//3 как конструктор
//4 call() and apply()

// //**********
// function sayHi() {
//     console.log('Hi');
// }
// console.log(sayHi);//[Function: sayHi]

// function sayHi() {
//     console.log('Hi');
// }
// var func = sayHi;//функцию можно присвоить в новую переменную
// func();
// sayHi();
// ////sayHi = null;
// sayHi();


//1
//name();
//в случае если statement this ссылается н аглобальный объект или undefined

//2
// var o = {};
// o.m = function(o) {
//     for (var p in o) {
//         console.log(p + ':' + o[p] + '\n');
//         console.log(this);
//     }
// }
// o.m({x: 1, y: 2});

// var calculator = {
//     operand1: 1,
//     operand2: 1,
//     add: function() {
//         this.result = this.operand1 + this.operand2;
//     }
// };
// calculator.add();
// console.log(calculator.result);
//console.log(this);

//this ссылается на оъект в котором он создан
//

// //
// var ob = {};
// ob['tensquared'] = (function(x, y) {
//     return x * y;
// }
// );
// console.log(ob);
// console.log(ob['tensquared'](2, 2));//2 й способ доступа к методу объекта


//this

// это не ключевое слово это свойс во объекта которое автоматически прописывается этому объекту
//самому this ничего присвоить нельзя
// var o = {
//     m: function() {
//         console.log(this === o);
//         f();
//         function f() {
//             console.log(this === o)
//         }
//     }
// };
// o.m();
// //f() та кнельзя т к локальная
// var o = {
//     m: function() {
//         var self = this;//локальная переменная
//         console.log(this === o);
//         f();
//         function f() {
//             console.log(this === o);
//             console.log(self === o);
//         }
//     }
// };
// o.m();


//3 вызов ф ции конструктор оператор new
//создает нов пустой объект который является наследником объекта св ва prototype функция конструктор
//используется для инициализации создаваемых на базе нее объектов
//this в функции конструктор ссылается на новый создаваемый функцие конструктором объект
// var o = new Object();
// var o = new Object;


//4 не прямой вызов функции call() apply()
//this можно установить в ручную на тот объект для которого выполняется опосредованный вызов
//найти пример с call



//значения параметров функции
//присвоение дефолтного значения опциональному параметру

// function getPropertyNames(o, a) {
//     if (a === undefined) {
//         a = [];
//     }
//     console.log(a);
//     return a;
// }
// getPropertyNames(5);
// getPropertyNames(5, 10);

// //2 й вариант присвоения дефолтноо значения
// function getPropertyNames(o, a) {
//     a = a || [];//-----!!!!!!
//     console.log(a);
//     return a;
// }
// getPropertyNames(5);
// getPropertyNames(5, 10);
//если ф функции предполагаются опциональные параметры то они должны быть в конце


//ОБЪект аргуметов функции

//ф-ции автоматически создается объект который наз ся аргументом ф-ции
//он назвается arrary like object

function f(x, y, z) {
    if (arguments.length != 3) {
        throw new Error ('function f called with ' + arguments.length);
    }
}
f(1, 2, 3);
//f(1, 2);
//во многих функциях js можно передавать неограниченное кол-во аргументов
console.log(Math.max(1, 10, 100000, 89, 657, 5889895656566));
console.log(Math.min(1, 10, 100000, 89, 657, 5889895656566));
//varargs function


//создание модулей на базе функций(name space)
//изолированная функция
function mymodule() {
    //code
}
mymodule();

(function mymodule() {
    //code
}());//сразу вызываем


//Замыкание

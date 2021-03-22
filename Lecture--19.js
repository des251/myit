// class Coin {
//     constructor(heads, tails) {
//         this.heads = heads;
//         this.tails = tails;
//     }
//     flipping(times) {
//         for (var i = 0; i < times; i++) {
//             (i % 2 != 0) ? console.log(this.heads) : console.log(this.tails);
//           }
//     }
//     randomFlipping() {
//         let r = Math.floor(Math.random() * 2);
//         return r;
//     }
// }

// let flippingCoin = new Coin('-', '0');

// //flippingCoin.flipping(10);
// console.log(flippingCoin.randomFlipping());
// console.log(flippingCoin.randomFlipping());
// console.log(flippingCoin.randomFlipping());
// console.log(flippingCoin.randomFlipping());
// console.log(flippingCoin.randomFlipping());


//2

// class Movable {
//     get x() {

//     }
// }

// class Graph extends Movable {
//     constructor()
//     draw() {

//     }
// }

// class MyWindow extends Movable {
//     constructor()
// }


// class Graph {
//     constructor() {

//     }
//     draw() {
//         console.log('nothing');
//     }
// }

// class Background extends Graph {
//     constructor(color, texture) {
//         super();
//         this.color = color;
//         this.texture = texture;
//     }
// }

// class Point extends Graph {
//     constructor(x, y) {
//         //так как graph пустой
//         super();
//         this.x = x;
//         this.y = y;
//     }
//     draw() {
//         console.log('x: ' + this.x + ' ' + 'y: ' + this.y);
//     }
//     get pointColor() {//для чтении
//         return this._pointColor;//(!!!!!!!!!!!!!почитать про нижнее подчеркивание)
//     }
//     set pointColor(value) {//для запси
//         this._pointColor = value;//автоматически присваивается
//     }

// }
//  class Rectangle extends Point {
//     constructor(x, y, w, h) {
//         super(x, y);
//         this.w = w;
//         this.h = h;
//     }
//     draw() {
//         console.log('x: ' + this.x + ' ' + 'y: ' + this.y);
//         console.log('width: ' + this.w + ' ' + 'height: ' + this.h);
//     }
//  }

//  class Circle extends Point {
//     constructor(x, y, round) {
//         super(x, y);
//         this.round = round;
//     }
//     draw() {
//         console.log('x: ' + this.x + ' ' + 'y: ' + this.y);
//         console.log('round: ' + this.round);
//     }
//  }

//  class Elipse extends Rectangle {
//     constructor(x, y, w, h) {
//         super(x, y, w, h);
//     }
//     draw() {
//         console.log('x: ' + this.x + ' ' + 'y: ' + this.y);
//         console.log('width: ' + this.w + ' ' + 'height: ' + this.h);
//     }
//  }





// let p = new Point(15, 18);
// p.draw();

// p.pointColor = 'red';
// console.log('Point color is ' + p.pointColor);


// let r = new Rectangle(10, 15, '100px', '200px');
// r.draw();
// let round = new Circle(10, 12, 500);
// round.draw();
// let elipse = new Elipse(10, 11, '500px', '300px');
// elipse.draw();

// let bg = new Background();
// bg.draw();









//----------------------------------------------------------ТЕОРИЯ
//Set Map WeakSet WeakMap


//-----------------------------------------------------------map
//хранилище пар ключ значение

//коллекция это пара ключ значение и в нем работа ведется по ключу
//map позволяет в качестве ключа использовать любой тип данных

let map = new Map();

map.set('1', 'str1');
map.set(1, 'num1');
map.set(true, 'bul1');

console.log(map.get(1));
console.log(map.get(true));
console.log(map);


// let user = {
//     name: 'Vasia'
// }

// map.set(user, 'admin');
// console.log(map.get(user));

// console.log(map);

// let user1 = {
//     name: 'Ne Vasia'
// }

// map.set(user1, 'not admin');
// console.log(map.get(user1));
// console.log(map);
// user1 = user;

// console.log(map.get(user1));//js анализирует сам объект а не имя переменной
// console.log(map);

// let map = new Map();
// map
//     .set('1', 'str1')
//     .set(1, 'num1')
//     .set(true, 'bul1');//упрощенный синтаксис

// console.log(map.get(1));
// console.log(map.get(true));

// let user = {
//     name: 'Vasia'
// }

// map.set(user, 'admin');
// console.log(map.get(user));


// let user1 = {
//     name: 'Ne Vasia'
// }

// map.set(user1, 'not admin');
// console.log(map.get(user1));

// user1 = user;

// console.log(map.get(user1));//js анализирует сам объект а не имя переменной

//упрощенный синтаксис
// let map = new Map([
//     ['1', 'str1'],
//     [1, 'num1'],
//     [true, 'bul1'],
// ])

// console.log(map.get(1));
// console.log(map.get(true));
// console.log(map);

// //удаление записи из map

// //map.delete(key)//удалят по ключу

// //map.clear() //полностью очищает map

// //map.has(key)//содержит ли такойключ

// //map.size показывает длинну map

// console.log(map.size);
// map.delete(1);

// console.log(map.size);
// console.log(map.has(true));

// map.clear();
// console.log(map.size);


// let map = new Map([
//     ['1', 'str1'],
//     [1, 'num1'],
//     [true, 'bul1'],
// ])


//------цикл for of


// for (let a of map.keys()) {
//     console.log(a);
// }
// for (let b of map.values()) {
//     console.log(b);
// }
// for (let c of map.entries()) {
//     console.log(c);//возвращает массивами
// }
// for (let d of map) {
//     console.log(d);//возвращает массивами
// }

// //перебор выполняется в порядке вставки(порядок сохраняется)

// //forEach можно использовать в map

// map.forEach((value, key, map) => {console.log(value + key + map + `${key}`)})






//---------------------------------------------------------коллекция set

//хранилище где запрещено дублирование элементов, так же допускает ключи любых типов
//коллекция для хранения множества значений, причём каждое значение может встречаться лишь один раз.

//Например, к нам приходят посетители, и мы хотели бы сохранять всех, кто пришёл. При этом повторные визиты
//не должны приводить к дубликатам, то есть каждого посетителя нужно «посчитать» ровно один раз.

let set = new Set()
let vasya = {name: 'Vasia'};
let petya = {name: 'Petia'};
let dasha = {name: 'Dasha'};
let denis = {name: 'Petia'};

set.add(petya);
set.add(vasya);
set.add(dasha);
set.add(petya);//не добавиться

set.add(denis);//добавиься
set.add({name: 'Petia'});//так тоже добавиться (то есть дублирование отслеживается только по имени переменной)
// set.add({name: 'Petia'});
console.log(set.size);
console.log(set);


// // let map = new Map()
// // let vasya = {name: 'Vasia'};
// // let petya = {name: 'Petia'};
// // let dasha = {name: 'Dasha'};

// // map.set(petya);
// // map.set(vasya);
// // map.set(dasha);
// // map.set(petya);

// // console.log(map.size);


// //методы для set такие же как и для map
// //add delete has clear

// //forEach - (value, valueAgain, set)а в map (value, key, map)


// set.forEach((value, valueAgain, set) => {
//     console.log(value);
//     console.log(valueAgain);
//     console.log(set);
// })

//если есть возможность использовать вместо массива то лучше использовать set!!!
//так как в нем не будет повторений


//WeakSet

//сбрщие мусора может удалить из WeakSet и из WeakMap
//не удалит только если для этих элементов существует вспомогательный объект
//Иными словами, WeakMap работает только на запись (set, delete) и чтение (get, has) элементов по конкретному ключу, а
//не как полноценная коллекция. Нельзя вывести всё содержимое WeakMap, нет соответствующих методов.

//Эти ограничения могут показаться неудобными, но по сути они не мешают WeakMap/WeakSet выполнять свою основную задачу – быть
//«вторичным» хранилищем данных для объектов, актуальный список которых (и сами они) хранятся в каком-то другом месте.
//нету size и его нельзя перебрать элементы не перебираемые

//---используются только объекты в качестве колючей
//---нету size
//---нельзя итерировать и нету forEach()
//---нету метода clear чиститься при удалении вспомогательных объектов
//---методы(set/delete get/set)
//сборщик мусора может подчистить weakMap от элементов в любой недетерминированный момент выполнения программы
// let activeUsers = [
//     {name: 'Vasia'},
//     {name: 'Petia'},
//     {name: 'Petia'}
// ]
// let weakMap = new WeakMap();

// weakMap.set(activeUsers[0], 1);
// weakMap.set(activeUsers[1], 2);
// weakMap.set(activeUsers[2], 3);

// console.log(weakMap.set(activeUsers[0], 1));
// console.log(weakMap.set(activeUsers[1], 2));
// console.log(weakMap.set(activeUsers[2], 3));
// console.log(weakMap);

// activeUsers.splice(0, 1)//начиная с позиции 0 удалить один элемент




//---------------------------------Promise

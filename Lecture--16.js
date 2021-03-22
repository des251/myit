//новый стандарт
//es2015
//es06

//--------------------------------------------------let const

// var apples = 5;
// if(true) {
//     var apples = 10;
//     console.log(apples);
// }
// console.log(apples);

// let apples = 5;
// if(true) {
//     let apples = 10;//переменная видна только внутри блока кода if
//     console.log(apples);//10
// }
// console.log(apples);//5


// if(true) {
//     var apples = 10;//переменная видна только внутри блока кода if
//     console.log(apples);//10
// }
// console.log(apples);//10

//переменная let видна только после ее объявления

// console.log(a);
// var a = 5;//5

// console.log(a);
// let a = 5;//a is not defined

//при работе с циклами

//при каждой итерации цикла let создается новая переменная
//я так понимаю при каждой итерации let сохраняет то значение которое у него было во время этой итерации
// function makeArmy() {
//     var shooters = [];
//     for (var i = 0; i < 10; i++) {
//         shooters.push(function() {
//             console.log(i);
//         });
//     }
//     console.log(shooters[4]());//10
//     return shooters;
// }

// var army = makeArmy();
// army[0]();
// army[5]();


// function makeArmy() {
//     let shooters = [];
//     for (let i = 0; i < 10; i++) {
//         shooters.push(function() {
//             console.log(i);
//         });
//     }
//     console.log(shooters[4]());//4
//     return shooters;
// }

// var army = makeArmy();
// army[0]();
// army[5]();


//const


//const это тот же самый let только его значение изменить нельзя

// const apple = 7;
// apple = 10;
// console.log(apple);


//сам объект менять можно но нельзя менять ссылку на объект
// const USER = {name: 'Vasia'};
// USER.name = 'Petia';
// USER.age = '20';
// console.log(USER);
//USER = 6; //ошибка



//------------------------------------------Деструктуризация массивов



//напоминает ассоциативный массив
//let [firstName, lastName, firstName1, lastName1] = [3, 'Kantor', 'Ilia', 'Kantor'];
//console.log(firstName);
// var [firstName2, lastName2, firstName3, lastName3] = ['Ilia', 'Kantor', 'Ilia', 'Kantor'];
// console.log(firstName);


//порядок элементов массива важен
//если первый и второй элемент не нужны
// let [, , firstName3, lastName3] = ['Ilia', 'Kantor', 'Ilia', 'Kantor'];
// console.log(firstName3)
// console.log(lastName3);

// let [, , firstName3, lastName3, ...rest] = ['Ilia', 'Kantor', 'Vasia', 'Petrov', 'super cat', 'mega dog'];
// console.log(firstName3)
// console.log(lastName3);
// console.log(rest);



//...(spread)всегда идет в конце//запиисывает остальные значения в массивж
// let [firstName, lastName, firstName1, lastName1, ...rest] = ['Ilia', 'Kantor', 'Ilia', 'Kantor', 'cat', 'dog'];
// console.log(rest);//возвращает массив из оставшихся элементов
//////////////////////////////значение по умолчаниюв функции в классическом js через слэш(pipes) a = a || [];
//можно задавать значения по умолчанию

// let [firstName, lastName] = [];
// console.log(firstName);//udefined

// let [firstName = 'Ilia', lastName = 'Kantor'] = [];//значения по умочанию
// console.log(firstName);

// инициализацию можно выполнять через вызов функции [firstName = make()]



//---------------------------------------------Деструктуризация объектов



//из значений объекта делаем переменные
// let options = {
//     title: 'Menu',
//     width: 100,
//     height: 200
// }
// let {title,  height, width} = options;//порядок не важен важны имена

// console.log(title);
// console.log(width);
// console.log(height);


//если мы хотим дать имя отличное от имени свойства
// let options = {
//     title: 'Menu',
//     width: 100,
//     height: 200
// }
// let {title: w, width, height: h} = options;

// console.log(w);//Menu
// console.log(width);//100
// console.log(h);//200

//по умолчаению
// let options = {
//     title: 'Menu',
// }
// let {title, width = 100, height = 200} = options;

// console.log(title);//Menu
// console.log(width);//100
// console.log(height);//200

//можно комбинировать умолчание и изменение имени переменной width: w = 100
// let options = {
//     title: 'Menu',
//     width: 300
// }
// let {title, width: w = 100, height: h = 200} = options;

// console.log(title);//Menu
// console.log(w);//по умолчанию сработает только если нету такого свойства в объекте
// console.log(h);//200




//-----------------------вложенная деструктуризация объектов




// let options = {
//     size: {
//         width: 100,
//         height: 200
//     },
//     items: ['Cake', 'Cream'],
//     coordinates: {
//         block1: {
//             x1: 23,
//             y1: 55
//         },
//         block2: {
//             front: {
//                 x2: 45,
//                 y2: 78
//             },
//             back: {
//                 x3: 90,
//                 y3: 0
//             }
//         }
//     }
// }

// let {title="Menu",
//     size: {width, height}, items: [item1, item2], coordinates: {block1: {x1, y1}, block2: {front: {x2, y2}, back: {x3, y3}}}} = options;

// console.log(title);//Menu
// console.log(width);//100
// console.log(height);//200
// console.log(item1);//'Cake'
// console.log(item2);//'Cream'
// console.log(x1);
// console.log(y1);
// console.log(x2);
// console.log(y2);
// console.log(x3);
// console.log(y3);





//---------------------------------------------функции =>



//аргументы по умолчанию

//старое
// if (a === undefined) {
//     a = [];
// }
// a = a || [];
//пример

// function sayHi(name) {
//     //name = name || 'Mister';//name по умолчанию

//     if (name == undefined) {
//         name = 'Mister';//name по умолчанию
//     }


//     console.log('Hi ' + name);
// }
// sayHi();



//новое es2015

// function sayHi(name = 'Mister') {//минимум кода
//     console.log('Hi ' + name);
// }
// sayHi();





//возможность выполнить инициализацию(то есть title = 'No heading' - это инициализация переменной) парметра прямо в заголовке функции

// function showMenu(title = 'No headig', width = 100, height = 200) {
//     console.log(title + ' ' +  width + ' ' + height)
// }
// showMenu('Menu');// Menu 100 200
// showMenu();//No heading 100 200

// function showMenu(title = 'Title', width = 100, height = 200) {
//     console.log(title + ' ' +  width + ' ' + height)
// }
// showMenu('Menu');
// showMenu(undefined, null);//Title null 200 (так как null это значение а undefined нет)


//------------------------------------------параметром может быть и вызов функции


// function sayHi (who = getCurrentUser().toUpperCase()) {//вызов функции плюс к нему еще добавлен метод
//     console.log('Hello, ' + who.toUpperCase());
// }
// function getCurrentUser() {
//     return 'Vasia';
// }
// sayHi();
// sayHi('Denis');



//----------------------------------------...(spread) можно использовать в объетах


//в старом через псевдомасив  arguments

// function sayHi(name, surname) {
//     console.log(arguments);//{ '0': 'Ivan', '1': 'Petrov' }
//     console.log('Hi ' + name + ' ' + surname);
//     console.log(arguments[0] + ' ' + arguments[1]);
// }
//sayHi('Ivan', 'Petrov');

// function sayHi() {
//     console.log(arguments);//{ '0': 'Ivan', '1': 'Petrov' }
//     console.log(arguments[0] + ' ' + arguments[1]);// Ivan Petrov
// }
// sayHi('Ivan', 'Petrov');



//в es 2015 создается настоящий массив через ...spread


// function showName(firstName, lastName, ...rest) {
//     console.log(firstName + " - " + lastName + " - " + rest)
//     rest.forEach(function(el) {//forEach применится так как ... это настоящий массив а argunents это псевдомассив
//         console.log(el);
//     })
// }
// showName('Uliy', 'Cesar', 'Emperer', 'Rome');

// var i = ['sell'];
// console.log(i);
// var f = 'not';
// console.log(i + f);//массив приводиться к строке из за конкатенации со строкой(метод toString()) Array.toString + Object.toString()
//var t = {x: 90};
//var u = 'text';
//console.log(t + u);//[object Object]text(к объекту применился метод toString)Object.toString





//-----------------------------------------деструктуризация в параметрах функции





//прямо при объявлении в заголовке функции

// let options = {title: 'menu', width: 100, height: 200};

// //применяем деструктуризатор

// function showMenu({title, width, height}) {
//     console.log(title + ' ' + width + ' ' + height);
// }
// showMenu(options);

//по умолчанию + другое название

// let options = {title: 'menu', width: 100, height: 200};
// function showMenu({title, width: w, height, name = 'Denis'}) {
//     console.log(title + ' ' + w + ' ' + height + ' ' + name);
//     console.log(options);
// }
// showMenu(options);

// console.log(options);


// let options = {title: 'menu'};

// function showMenu({title = 'heading', width:w = 100, height:h = 200}) {
//     console.log(title + ' ' + w + ' ' + h);
// }
// showMenu(options);

// -              ----------------вызов без параметров

// let options = {title: 'menu'};

// function showMenu({title = 'heading', width:w = 100, height:h = 200}) {
//     console.log(title + ' ' + w + ' ' + h);
// }
// showMenu()//ошибка;


//деструкторизатору присваиваем значение по умолчанию что бы не было ошибки при вызове без параметров


// function showMenu({title = 'heading', width:w = 100, height:h = 200} = {}) {//значение по умолчанию
//     console.log(title + ' ' + w + ' ' + h);
// }
// showMenu()



//-------------------------------------Имя функции



//имя создается у функции как свойство name

// function f() {}; //f.name == 'f'
// let g = function g() {}; //g.name == 'g'

// console.log(f.name + g.name);//имена сложаться как две строки


// let g = function() {};
// console.log(g.name)//g

// let k = function h() {};
// console.log(k.name)//h


// let k = function h() {};
// console.log(h.name)//is not defined


//функции в блоке

//видна только в блоке кода


'use strict'


// if (true) {
//     sayHi();
//     function sayHi() {console.log('Hello');}//hello
// }
//sayHi();//is not defined




//----------------------------------Функция стрелка =>



// let inc = x => x + 1;//return есть всегда
// let inc = function(x) {return x + 1;};

// console.log(inc(1));

//несколько аргументов

// let sum = (a,b) => console.log(a+b);
// //let sum = function(a,b) {return a + b;};
// sum(1,2);


//Когда тело функции достаточно большое, то можно его обернуть в фигурные скобки {…}
//И в этом случает результат функции уже не возвращается автоматически
//Такая функция должна делать явный return

//Без применения {...}

// let getTime = () => new Date().getHours() + ' : ' + new Date().getMinutes();
// console.log(getTime());


//С применением {...}

// let getTime = () => {
//     let date = new Date();
//     let hours = date.getHours();
//     let minutes = date.getMinutes();
//     return hours + ':' + minutes;
// }
// console.log(getTime());

//Функции стрелки очень удобны в качестве колбэков

// let arr = [5, 8, 3, 33];
// console.log(arr);

// let sorted = arr.sort((a,b) => a - b);
// console.log(sorted);
// console.log(arr);

// let sorted = arr.sort((a,b) => b - a);
// console.log(sorted);
// console.log(arr);

//функции стрелки => не имеют своего this
//а так же в колбэк функции => нету this
//Внутри функций стрелок => тот же this что и снаружи

// let group = {
//     title: 'our course',
//     students: ['Vasia', 'Petya', 'Dasha'],
//     showLst: function() {
//         this.students.forEach(student => console.log(this.title + ': ' + student))//то есть group.title
//     }
// }
// group.showLst();


// let group = {
//     title: 'our course',
//     students: ['Vasia', 'Petya', 'Dasha'],
//     showLst: function() {
//         this.students.forEach(function(student) { console.log(this.title + ': ' + student);//так как в кол бэк функции this будет undefined так как не на что ччылаться
//         })
//     }
// }
// group.showLst();


//Классы

//--------------ФЛАГИ
//флаги формируют правила высокого уровня для применения шаблонов
//применяются не внутри // литералов регулярных выражений а снаружи

// i - применяется в незавизимости от регистра
//var pattern = /java(script)?/gi;//группирует слоты в круглые скобки

// var pattern = /^java/img
// var text = 'Java8Scri898pt 0xA10 is more ab 89 fucdn tha555n Java java Javascript java';
// var result;
// while ((result = pattern.exec(text)) != null) {
//     console.log('Matched ' + result[0] + '' + ' at position ' + result.index + '; next search begins at ' + pattern.lastIndex);
// }

//g - будет применен ко всем совпадением с исходной строкой

//m - в случаях многострочных тестов ^ - начало строки(ставится перед слотами) $ - конец строки(ставиться после сллотов)


//Методы у Строк

//.search() - поиск

//console.log('JavaScript'.search(/script/i));//ищет только первую позицию (возвращает позицию символа)

//.replace() - выполняет замену символов надругие которые записаны в параметр

//console.log('JavaScript'.replace(/script/i, 'noscript'));


//split() - превращает строку в массив

//console.log('1, 2, 3, 4'.split(/\s*,\s*/));


//.match() - возвращает массив который является результатом применения регулярного выражения

//console.log('1 plus 2 equals 3'.match(/\d+/g));
//console.log('1 plus 2 equals 3'.match(/\d+/));


//Методы у regExp() -содержит 3 метода и набор свойств которые связаны с регулярными выражениями
//1 й аргумент для regExp() само регулярное выражение а второе может быть опциональным например может быть флаг или их комбинация


//var zipCode = new RegExp('\\d{5}', 'g');//полезна если нужно создать регулярное выражние динамически то есть во время выполнения программы
//есть 5 свойстав у regExp
//source - как строку хранит регулярное выражение
//global - является булеан и хранит флаг g
//ignoreCase - тоже булеан и хранит состояние i
//multiline - тоже булеан и хранит состояние m
//lsatIndex - сохраняет позицию последненг найденого совпадения шаблона к строке

//методы
//1 .exec()- основной метод объекта regExp - похож на метод match() у string но в
//случае если не найдено совпадение возвращает null а match() -1; пример выше
//2 .test() - возвращает тру если нашел

//var pattern = /java/i;

//console.log(pattern.test('JavaScript'));
//console.log(RegExp());


//КЛАССЫ _________________________________

//это описывает предметную сущность области
//абстрактно
//на базе функции фабрики
// function range(from, to) {
//     var r = Object.create(range.methods);
//     r.from = from;
//     r.to = to;
//     return r;
// }

// range.methods = {
//     includes: function(x) {return this.from <= x && x <= this.to;},
//     foreach: function(f) {
//         for (var x = Math.ceil(this.from); x <= this.to; x++) f(x);
//     },
//     toString: function() { return '(' + this.from + '...' + this.to + ')';}
// };

// var r = range(1,3);
// console.log(r.includes(2));
// r.foreach(console.log);
// console.log(r);


// var r = range(2,7);
// console.log(r.includes(2));
// r.foreach(console.log);
// console.log(r);

// var r = range(4,39);
// console.log(r.includes(2));
// r.foreach(console.log);
// console.log(r);


//2 на базе функции онструктора
//название с большой буквы

function Range(from, to) {
    this.from = from;
    this.to = to;
}

Range.prototype = {
    includes: function(x) {return this.from <= x && x <= this.to;},
    foreach: function(f) {
        for (var x = Math.ceil(this.from); x <= this.to; x++) f(x);
    },
    toString: function() { return '(' + this.from + '...' + this.to + ')';}
};

var r = new Range(1,3);
console.log(r.includes(2));
r.foreach(console.log);
console.log(r);

var r = new Range(9,19);
console.log(r.includes(2));
r.foreach(console.log);
console.log(r);

var r = new Range(3,10);
console.log(r.includes(2));
r.foreach(console.log);
console.log(r);
//имя фции конструктора воспринимается как имя класса
console.log(r instanceof Range);//является ли Range классом r

//объектное поле - поле которое является собственным полем каждого объекта instance fields
//Статическое поле - оно пренадлежит всему классу а не отдельному объекту class feids
//объектный метод - вызывается для одного заданного объекта instance methods
//статический метод - принадлежит классу и вызывается для всего класса class methods

//при создании класса мы задаем класс на базе 3 объектов
//1 фция конструктора
//2 объект прототипа
//3 сам объект который формируется после вызова оператора new

//имя фции конструктора становиться именем класса
//если объявляем свойство то оно стновиться стстичесеим задается за функцией range.company например а не r.company
//методы которые мы размещаем в объект прототипа становятся аналогами объектных методов класса (объектных полей в ООП)(from и to)

//-------------------------------------------------МАССИВЫ(ARRAY) ------------------------------------

// var array = [2, 3, 5, 7, 11];// в массиве могут содержаться любые типы данных
// var misc = [1.1, true, "a"];
// var base  = 1024;
// var table = [base, ++base, base + 2, base + 3]; //так же перменные и выражения
// console.log(table);

// var b = [[1, {x:1, y:1}], [1, {x:1, y:1}]];//массив в массиве и объектв массиве
// console.log(b);

// var count = [1,,3];
// var undefs = [,,];//2 пустых (undefined) значения

// console.log(count);
// console.log(count[1]);//undefined
// console.log(undefs);

// var a = ["world"];
// var val = a[0];
// console.log(val);
// console.log(a[0]);
// a[0] = "Hello world";//заменяет предидущее значение
// a[1] = 3.14;
// console.log(a);

// var i = 2;
// a[i] = 3;//промежуточная переменная
// console.log(a);

// a[i + 1] = "hello";//через выражение
// console.log(a);

// var b = [1, 2, 3];
// var c = [1, 2, 3];
// b[a[i]] = "20";// через значение другого масива
// c[a[i]] = a[0];
// console.log(b);
// console.log(b.length);
// console.log(c);


//--------------------------Sudents and marks--------------------


/*var studentMark = [5, 6, 7, 5, 9, 10, 5, 6, 7, 10];
var studentName = [];
  studentName[0] ='Миша';
  studentName[1] ='Петя';
  studentName[2] ='Оля';
  studentName[3] ='Витя';
  studentName[4] ='Олег';
  studentName[5] ='Таня';
  studentName[6] ='Антон';
  studentName[7] ='Юра';
  studentName[8] ='Вася';
  studentName[9] ='Надя';

var maxMark = 0;

for (i = 0; i < studentMark.length; i++) {
  if (studentMark[i] > studentMark[maxMark]) {
    maxMark = i;//высчитываем индекс в котором лежит максимальная оценка
  }
}
for (b = 0; b < studentMark.length; b++) {
  if (studentMark[maxMark] == studentMark[b]) {//находим все максимальные оценки и выводим
    console.log("Индекс максимальной оценки " + b);
    console.log("Максимальная оценка " + studentMark[b]);
  }
}
var sum = 0;
for (a = 0; a < studentMark.length; a++) {
  sum = sum + studentMark[a]; //складываем каждое значение массива с нулем
}
console.log("Средний бал " + sum/studentMark.length);// делим на общее колличество индексов и получаем средний бал


for (k = 0; k < studentName.length; k++) {
  console.log(studentName[k] + "-" + studentMark[k]); //склеиваем значения изодного массива со значениями из другого мссива
}

for (var l = 0; l < studentMark.length; l++) {
  if ((studentMark[l] % 2) !== 0 && studentMark[l] < 6) {
      console.log(studentName[l] + "-" + studentMark[l]);//все нечетные оценки ниже 6
  }
}*/

//------------------------------------ОБЪЕКТЫ(OBJECTS)------------------------------------
//точечная нотация
//скобочная нотация
//Скобочная нотация намного гибче точечной. Например, вы можете прочитать из объекта свойство, название которого записано в """переменную""" (через точечную нотацию к такому свойству обратиться не получиться )
var name = 'Кекс';
var catsFavoriteFood = { Кекс: 'рыба' };

console.log(catsFavoriteFood.name);
// Выведет в консоль undefined

console.log(catsFavoriteFood[name]);
// Выведет в консоль 'рыба'

console.log(catsFavoriteFood[name]);
// Незаметно внутри программы превращается в:
console.log(catsFavoriteFood['Кекс']);


//И ещё один сюрприз. В качестве ключей в объекте можно использовать любые строки, даже строки с пробелами. С точечной нотацией такие свойства прочитать не получится, а со скобочной — без проблем.

var cat = { 'favorite food': 'Сметана' };

//console.log(cat.favorite food);
// Вызовет ошибку

console.log(cat['favorite food']);
// Отработает нормально

var empty = {}; //1-й сопсоб создания объекта (создаем пустой объект) (литерал объекта)
var point = {x:0, y:0}; //точки ккординат
var point2 = {x:point.x, y:point.y+1}; //использует переменную point и через точку обращаемся к ключу объекта
var book = {
  "main title": "JavaScript", //ключ всегда срока "string" если в значении ключа есть пробел ставятся ковычки если пробелов нет ковычки можно не ставить
  'sub-title': "Defenitive Guide",
  "for": "all audience",
  author: {
    firstname: "David",
    surname: "Flanagan"
  }
};
console.log(point2);
console.log(point2.x);
console.log(point2.y);
console.log(book["main title"]);
console.log(book.author.firstname);
console.log(book.author.surname);

var loopObject = {
  name: "Denis",
  age: 30
};
var sumLoopObject = 0;
for (z = 0; z < 10; z++) {
  sumLoopObject = z + loopObject;
console.log(sumLoopObject);//если литерал объекта в цкле то каждый раз будет создаваться новый объект

}


//конструкторы встроенные в js для создания библиотечных стандартных объектов
var o = new Object();// 2-й способ создания объекта
var i = new Array();
var d = new Date();
var r = new RegExp("js");

console.log(o);
console.log(i);
console.log(d);
console.log(r);



var o1 = Object.create({x:1, y:2});
console.log(o1);//Выводит как пустой объект но он не пустой
console.log(o1.y);

var o2 = Object.create(null);

console.log(o2);


var o3 = Object.create(Object.prototype);// то же самое что new Object()

console.log(o3);


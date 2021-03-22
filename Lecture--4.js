// var table = new Array(10);// построение квадратной матрицы (двумерная матрица)

// for (var i = 0; i < table.length; i++) {
//   table[i] = new Array(10);//создаем пустой массив с 10ю массивами внутри
// }
// for (var row = 0; row < table.length; row++) {
//   for (col = 0; col < table[row].length; col++) {
//     table[row][col] = row * col;//прогоняется все значения матрицы
//   }
// }
// console.log(table);
// console.log(table[2][4]);
// console.log(table[0][9]);
// console.log(table[1][3]);
// table[2][4] = -3;//поменяли значени 
// console.log(table[2][4]);
// console.log(table);


// for (var row = 0; row < table.length; row++) {
//   var str = "";
//   for (col = 0; col < table[row].length; col++) {
//     str = str + table[row][col] + " "; // при складывании с пустой строкой преобразуется в строку
//   }
//   console.log(str);//вы водим таблицу в ручном виде строки
// }


// for (var row = 0; row < table.length; row++) {
//   for (col = 0; col < table[row].length; col++) {
//     table[row][col] = Math.random();// рандомное значение 
//   }
  
// }




// for (var row = 0; row < table.length; row++) {
//   for (col = 0; col < table[row].length; col++) {
//     table[row][col] = Math.random().toFixed(2);// 2 знака после запятой в вещественном значении
//   }
// }
// console.log(table);

// for (var row = 0; row < table.length; row++) {
//   var str2 = "";
//   for (col = 0; col < table[row].length; col++) {
//     str2 = str2 + table[row][col] + "|";
//   }
//   console.log(str2);//таблица вручную
// }

// console.log(Math.PI.toFixed(2)); // "3.14"
// console.log(Math.PI.toPrecision(2)); // "3.1"




//--------------------------------------ФУНКЦИЯ-----------------------------
// 1й сценарий создания функции
// function myFirstFunction () {
//   console.log("Hello world !");//создание функции
// }
// myFirstFunction();//вызов фунции


// function myName (name) {// функция со значением
//   console.log("Hello world" + name);
// }
// myName(" Rocky");

// function myName2 (pref, name) {// функция с 2 значениями
//   console.log("Hello world" + " " + pref + " " + name);
// }
// myName2("Mr","Rocky");


// function square (num) {
//   var a = num * num;
//   return a;  //выводит ---значение--- а не переменную из функции во внешний код и его можно записать в глобальную переменную и выходит их функции , код после return не будет выполнен
                        // можно писать несколько раз в случае 
                        // if { 
                        //   return 1;
                        // }  else {
                        //   return 2
                        // }     
// }
// var result = square(5);
// console.log(result);

// var result = square(11);
// console.log(result);

// function task (time, distance) {
//   var i = distance/time;
//   return  i;
// }
// var speed = task(100, 50);
// console.log(speed);



function getRandomNumber () {
  var num = Math.floor(Math.random(num) * 100);
  return num;
}
var randomNumber = getRandomNumber();
console.log(randomNumber);


// for (i = 0; i < 100; i++){
//   console.log(getRandomNumber());//выводим 100 раз и каждый раз срабатывает math random
// }
// for (i = 0; i < 100; i++){
//   console.log(randomNumber);//а так выведет 100 раз дно и тоже число
// }
// function getRandomNumber () {
//   var num = Math.floor(Math.random(num) * 100);
//   return num;
// }
// var randomNumber = getRandomNumber();// после вывода
// console.log(randomNumber);

//функция присваиватся переменной -----------------2й сценарий созания функций

// var square = function(x) {
//   return x*x;
// };

// console.log(square(12));

// var square = function(x) {//отличие от первого сценария !!! если поменять местами получим ошибку 
//   return x*x;
// };
// square(5);//не сработает так как в фунции нечего исполнять
// var s = square(12);
// console.log(s);//только если присвоить в переменную значение которое вернулось тогда сработает



// var x = "outside";// глобальная 
// var f1 = function() {
//   var x = "inside f1";//локальная 
// };
// f1();//исполнени функции 
// console.log(x);//глобальная видна локальная нет 

// var f2 = function() {
//   x = "inside f2";//обращается к глобальной (выше) переменной и меняет ее значение 
// };
// f2();
// console.log(x);// поэтому здесь будет уже значение из функции так как в фунции мы не создавали новую переменную а поменяи глобальну

//create 3 способ создания объекта ???
//-------------ФУНКЦИЯ В ОБЪЕКТЕ------------------
//функция в объекте называется метод
//а значение - свойство

var dog = {
  name: "Jack",
  age: 5,
  sayGav: function() {
    console.log("Гав Гав Рррр")
  }
};
console.log(dog.name);
console.log(dog.age);
dog.sayGav();

var dog2 = {
  name: "Jack",
  age: 5,
  sayGav: function(x) {
    return x * x;
  },
  extendedSayGav: function(times) {
    var b = "";
    for(i = 0; i < times; i++) {
      b = "Гав Гав Гав Гав Гав" + b;
    }
    return b;
  }
};
console.log(dog2.extendedSayGav(5));
console.log(dog2.sayGav(2));
dog2.sayGav(5);

function check(x) {
  return x * x;
}
check(3);//функция не срабатывает так как в ней ничего нет 
console.log(check(4));//но выводит в консоль возвращаемое значение

var square = function(x) {
  return x*x;
};

console.log(square(12));
//% остаток от деления применяется что бы проверить не четные ли числа 
// алгоритмы записываем в функции
// console.log(!!null);
// console.log(!null);


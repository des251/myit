//splice()

//и вставка и удаление  в массив (он модифицирует массив!!!)
// var a = [1, 2, 3, 4, 5, 6, 7, 8];

// var c = a.splice(4);//отрежеи из а все элементы начиная с 4 го индекса и вернет в с все значения начиная с 4 го индекса
// console.log(a);
// console.log(c);


// var a = [1, 2, 3, 4, 5, 6, 7, 8];
// var e = a.splice(1,3);//позиция в массиве(индекс) а второе значение кол-во эл-ов(вырежет все значения начиная с 1 го индекса 3 элемента)
// console.log(e);
// console.log(a);
// console.log(a.indexOf(1));
// var e = a.splice(1,1);//позиция в массиве(индекс) а второе значение кол-во эл-ов(вырежет одно значение с индексом 1)
// console.log(e);
// var w = [1, 2, 3, 4, 5, 6, 7, 8];
// var e = w.splice(1, 3, 90, 90);
// console.log(e);//удаляет
// console.log(w);//добавляет и раздвигает масси если добавленных больше чем удаленных

//push()pop()

//push вставка
//pop удаляет
//стек first in first out

// var stack = [1, 2, 3, 4, 5, 6, 7, 8];

// stack.push(10 , 11 , 12);
// console.log(stack);
// stack.pop();//удаляет последний элемент (в данном случе один)и возвращает значение
// console.log(stack);
// stack.pop();//аргумент не передается
// console.log(stack);
// stack.push([5, 5], {x : 1});
// console.log(stack);

//unshift() shift()

// var stack = [1, 2, 3, 4, 5, 6, 7, 8];
// stack.unshift('a' , 'b' , 'c');
// console.log(stack);
// stack.shift();//аргумент не передаеттся значение можно сохранить в переменную
// console.log(stack);


// ////toString()  преобразует все эл ты массива к строке и выводятся через заятую как строка

// var x = [1, 2, 3];
// console.log([1, 2, 3].toString());
// console.log(x.toString());
//// toLocalString()//??????????


//ES5

//1й аргумент это функция которая вызывается автоматически для каждого эл массива
//если массив spars эта ф-ция не применяется к несущ эл-ам
//эта ф-ция может принимать 3 аргумента
//1й аргумент - значение текущ эл массива
//2й аргумент - индекс текущего эл массива
//3й аргумент - ссылка на весь массив целиком
//ни один из методов из этой группы не изменяет исходный массив
//модифицировать исходный массив можно из ф-ции которая упоменалась выше

//forEach()--------------------------------------------------важный
//используется для перебора массива


// var data = [1, 2, 3, 4];
// var sum = 0;
// data.forEach(function(value) {sum += value;})
// console.log(sum);
// console.log(data)

// var data = [1, 2, 3, 4];
// var num = 0;
// data.forEach(function() {num += 1; console.log(num);})//значение в функции можно не передавать
// console.log(num);


// var data = [1, 2, 3, 4];
// data.forEach(function(v, i, a) {a[i] = v + 1})//'Вид цикла forEach не прерывается то есть из цикла нельзя выйти принудительно он всегда завершает все итерации'
// console.log(data);

// var data = [1, 2, 3, 4, 5];

// data.forEach(function(v, i, a) {
//     if (v % 2 == 0) {
//         a[i] += 2;
//     } else {
//         a[i] -= 2;
//     }
// })
// console.log(data);

//--------------------------------------------map() - создаст новый массив из эл массива над которым заданы преобразования внутри функции
//используется для трансформации массива

// var a = [1, 2, 3];
// var b = a.map(function(x) {return x*x});
// console.log(b);


// var a = [1, 2, 3, , ,];//пропуски остаются
// var b = a.map(function(x) {return x*x});
// console.log(b);


// var a = [1, 2,,, 4];
// var b = a.map(function(x, i) {return i*i});//то есть он в значения перенес индексы в квадрате
// console.log(b);

// var names = ['HTML', 'CSS', 'JavaScript'];

// var nameLengths = names.map(function(name) {
//   return name.length;
// });
// console.log(nameLengths);//запишет в значения длинны каждой строки!!!!!!!!!!!!!!!!!!!!!

//---------------------------------------------------filter()//пропускает spars и в итоге dense массив
//если условие дает true тогда фильтр пропускает это значение если false то не пропускает

var a = [5, 4, 3, 2, , , 1, -1, 0];

var smallValues = a.filter(function(x) {return x < 3});
console.log(smallValues);

// var other = a.filter(function(x, i) {return i % 2 == 0});
// console.log(other);

// var dense = a.filter(function() {return true});//специальный приемчик для того что бы из spars сделать dense
// console.log(dense);
// var a = [5, 4, 3, 2, , , 1, -1, 0, null, undefined, NaN];
// var dense = a.filter(function(x) {return (x != null) && (x != undefined) && (!(isNaN(x)))});//отфильтрует spars null undefined NaN
// console.log(dense);

//every()(квантор всеобщности) some()(квантор существования)

// var a = [1, 2, 3, 4, 5];

// var b = a.every(function(x) {return x < 10});//если все зачения дают true

// console.log(b);
// console.log(a);

// var a = [1, 2, 3, 4, 5, 11];

// var b = a.some(function(x) {return x > 10});//если хотя бы одно зачения дают true

// console.log(b);

// //на spars этим способом не проверишь

// var a = [1, 2, 3, 4, 5, , 11, , , ,];

// var b = a.every(function(x) {return x == true});

// console.log(b);

// var a = [1, 2, 3, 4, 5, 0, 11, -1];

// var b = a.every(function(x) {return x == true});

// console.log(b);

// var a = [1, 2, 3, 4, 5, 0, 11, -1, 'hello'];//true проверить если хотя бы один элемент не является числом

// console.log(a.some(isNaN));

// console.log(b);

//reduce() reduceRight()

// var a = [1, 2, 3, 4, 5];

// var sum = a.reduce(function(x,y){return x + y}, 0); //x и y значения масива рядом стоящие 0 - это переменная то есть в итоге получаем сумму всех элементов

// console.log(sum);

// var b = a.reduce(function(x, y){ return (x > y) ? x : y;});//высчитываем самое большое число в массиве

// console.log(b);

// var b = a.reduceRight(function(x, y){ return (x > y) ? x : y;});//перебор элементов идет с конца в начало

// console.log(b);

//indexOf() lastIndexOf()
//1й аргумент искомое начение
//2й аргумент индекс с которго следует выполнять поиск

// var a = [1, 2, 3, 4, 5];
// console.log(a.indexOf(1));//
// console.log(a.indexOf(10));//если нет такого эл возвращает -1 если несколько таких эл возвращает первый
// console.log(a.lastIndexOf(1));
// console.log(a.indexOf(1, 3));


// var a = [1, 2, 1, 1, 3, 4, 5];
// var pos = a.indexOf(1);
// while (pos != -1) {//когда запросится несуществующий элемент выдаст -1
//     console.log(typeof pos);
//     console.log(pos);
//     pos = a.indexOf(1, pos + 1);//
// }


//проверить просто объект или объект массива

//ES5
// var a = [];
// var b = {x : 1};
// console.log(Array.isArray(a));
// console.log(Array.isArray(b));

// //старое
// [] instanceof Array


//.length автоматически обновляется
//Array.protoype
//есть объекты которые выглядят как массивы но массивами не являются

//array like object----------------------------------------------------------------------------------========>>>

// var a = {};
// var i = 0;
// while(i < 10) {
//     a[i] = i * i;
//     i++;
// }

// a.length = i;//она добавляется как просто имя length и значение i

// var total = 0;
// a[20] = 500;
// console.log(a);
// for (var j = 0; j < a.length; j++) {
//     total += a[j];
//     console.log(a[j])
// };

// console.log(total);

// var a = {'0' : 'a', '1' : 'b', '2': 'c', length : 3};
// console.log(Array.prototype.join.call(a, '+'));
// console.log(Array.prototype.slice.call(a, 0));
// Array.prototype.map.call(a, function(x) {
//     return x.toUpperCase();
// })


//строки и массивы это разные вещи

// var s = 'JavaScript';
// console.log(Array.prototype.join.call(s, ' '));
// console.log(Array.prototype.filter.call(s, function(x) {
//     return x.match(/[^aeiou]/);//регулярное выражение
// }).join(''));
//console.log(s.reverse());//не работает

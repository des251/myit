// "use strict"

// ----------------------------------------ПРОТОТИПЫ

//___Прототипы объектов


// var p = {x: 1};

// console.log(p.isPrototypeOf(Object.prototype));//p не является прототипом obj prototype
// console.log(Object.prototype.isPrototypeOf(p));//obj prototype является прототипом p

// var y = [1, 2, 3];

// console.log(y.isPrototypeOf(p));
// console.log(y.isPrototypeOf(Object.prototype));
// console.log(Object.prototype.isPrototypeOf(y));
// console.log(Array.prototype.isPrototypeOf(y));
// console.log(Object.prototype.isPrototypeOf(Array.prototype));


//___Создание прототипов


// var p = {x : 1};
// var o = Object.create(p);//создаем новый объект его прототипом будет p
// o.y = "hello";//все свойства которые есть у p будут у о

// console.log(p, o, o.x);


// console.log(o.isPrototypeOf(p));
// console.log(p.isPrototypeOf(o));//true
// console.log(o.isPrototypeOf(Object.prototype));
// console.log(Object.prototype.isPrototypeOf(o));//true
// console.log(Object.prototype.isPrototypeOf(p));//true



// var xxx = Object.create(o);

// console.log(o.isPrototypeOf(xxx) + "  xxx");//true
// console.log(p.isPrototypeOf(xxx));//true
// console.log(Object.prototype.isPrototypeOf(xxx));//true

// var yyy = new Object(o);

// console.log(yyy);


// console.log(o.isPrototypeOf(yyy));//false
// console.log(p.isPrototypeOf(yyy));//true
// console.log(Object.prototype.isPrototypeOf(yyy));//true

// var zzz = new Array(o);//внутри массива появиться объект о
// console.log(zzz);




//___Доступ через наследование 


//_Чение

// var o = {};
// o.x = 1;
// var p = Object.create(o);//о будет прототипом р
// p.y = 2;
// var q = Object.create(p);//р будет прототипом q
// q.z = 3;
// var s = q.toString();//метод который есть в object protoype
// console.log(s);
// console.log(q.toString());
// console.log(q.x + q.y);//q наследует свойства из прототипа о и р





//_Изменение


// //изменение значения свойства(работает по другому)
// //раскрутка иерархии прототипов не роисходит 
// var unitcircle = {r: "Hello", p: 55};
// var c = Object.create(unitcircle);
// c.x = 1;
// c.y = 1;
// console.log(c.r);//берет из прототипа
// c.r = 2;//js создает 2 свойства одно свое а второе из иерарии r:1
// console.log(c);
// console.log(c.r);//свойства прототипа не меняются меняются только собственные свойства к которым он обращается в первую очередь
// console.log(unitcircle.r);
// console.log(c.r);
// console.log(unitcircle.l);//если обратиться к несуществующему свойству - undefined
// //console.log(unitcircle.l.length);//если к undefined  применить свойство - type error

// //ошибки связанные с доступам к свойствам

// //лайф хак проверка если есть обьект то можно применить свойство

// var len = undefined;
// if (unitcircle) {//если существует объект unitcircle
//   if (unitcircle.r) {//если r не undefined и является сторокй
//     len = unitcircle.r.length;//то можно применять свойства length
//     console.log(len);
//   }//иначе условие не выполниться и значение len останется undefined 
// }


// var nel = undefined;
// if (unitcircle) {//если существует объект unitcircle
//   if (unitcircle.l) {//если r не undefined и является сторокй
//     nel = unitcircle.l.length;//то можно применять свойства length
//     console.log(nel + " --------");
//   } console.log(nel);//иначе условие не выполниться и значение len останется undefined 
// }
// //console.log(unitcircle.l.length);//если к undefined применить свойство length  - type error


// // var k = 100;
// // console.log(k.length);//к числам length не применяется
// // var k = 100;
// // k += "";
// // console.log(k.length);// а так можно 


// var len = unitcircle && unitcircle.l && unitcircle.r.length;
// console.log(len + " = = = = = =");

// var len = unitcircle && unitcircle.r && unitcircle.r.length;
// console.log(len + " ++++++++");

// unitcircle.l = 67;
// console.log(unitcircle);
// unitcircle.l.k = 99;
// console.log(unitcircle.l.k);//undefined
// //unitcircle.j.g = 67;//попытка присвоить свойство для undefined - type error
// Object.prototype = 0;



//__Удаление свойства из объекта


// var unitcircle = {r: "Hello", p: 55};
// delete unitcircle.r;//удаляет только собственные свойства !!!
// console.log(unitcircle);
// console.log(unitcircle.r);
// var unitcircle = {r: "Hello", p: 55};
// var c = Object.create(unitcircle);
// c.x = 1;
// c.y = 1;
// console.log(c);
// console.log(c.p);//унаследовало из прототипа
// console.log(c.r);//унаследовало из прототипа
// delete c.r;
// console.log(unitcircle);//не удаляет наследуемые свойства
// //delete глупое!!!!!!! может пропустить и не выдать ошибку нужно исползовать use strict строгий режим
// var o = {x:1};
// console.log(delete o.x);
// console.log(delete o.x);
// console.log(delete o.toString);
// console.log(delete 1);//true не понятные действия
// console.log(o);



//----------Объекты в объекте


// var u = {
//   one: {
//     two: {
//       three: 1
//     }
//   }
// };
// console.log(u);
// console.log(u.one.two.three);//объекты в объекте



//__________Проверка свойств

//_1_Оператор in

//возвращает true, если свойство содержится в указанном объекте или в его цепочке прототипов
//оператор in проверяет и собственные свойства и унаследованные
// var o = {x:1};
// console.log("x" in o);//собственное свойство
// console.log("y" in o);//свойство пишется в кавычках
// console.log("toString" in o);//наследованное свойство из object prototype
// var p = Object.create(o);
// p.y = 9;
// console.log(p);
// console.log("x" in p);//наследуемое свойство


//_2_ метод hasOwnPropert()

//Каждый объект, произошедший от Object, наследует метод hasOwnProperty. 
//Этот метод может использоваться для определения того, содержит ли объект указанное свойство 
//в качестве собственного свойства объекта; в отличие от оператора in, 
//этот метод не проверяет существование свойств в цепочке прототипов объекта
// var o = {x:1};//проверяет собственное ли свойство или унаследованное
// console.log(o.hasOwnProperty("x"));//true даст только собственное свойство
// console.log(o.hasOwnProperty("y"));
// console.log(o.hasOwnProperty("toString"));




//_3__метод propertyIsEnumerable()

//Каждый объект имеет метод propertyIsEnumerable. 
//Этот метод может определять, является ли указанное свойство в 
//объекте перечисляемым в цикле for...in, за исключением свойств, 
//унаследованных из цепочки прототипов. Если объект не имеет
//указанного свойства, метод вернёт false.
//то есть им можно проверить собственные свойства объекта
// var o = {x:1};
// var p = Object.create(o)
// p.y = 55;
// //проверяет перечисляемые объекты или нет и являются ли свойсва свои и унаследованные
// console.log(p.propertyIsEnumerable("x"));
// console.log(p.propertyIsEnumerable("y"));//ture так как это собственное свойство
// console.log(o.propertyIsEnumerable("toString"));


//_4_Способ проверки !==undefined

// var o = {x:1};
// console.log(o.x !== undefined);//если такое свойство есть значит оно не равно undefined будет true
// console.log(o.y !== undefined);//если такого свойства нет будет false
// console.log(o.toString !== undefined);//true так как оно унаследовалось из object prototype
// console.log(o.toString in o);//а так будет false


//__Отличие проверки оператором in  от способа !==undefined 

// var o = {x: undefined};//если в объекте намеренно задано undefined
// console.log(o.x !== undefined);//false
// console.log(o.y !== undefined);//false
// console.log("x" in o);//true такое свойство есть
// console.log("y" in o);//false такого свойства нету
// console.log(o.toString in o);//false так проверять нельзя
// console.log(delete o.x);//удаляет свойство х
// console.log("x" in o);//поэтому здесьб false


//___Цикл for in
//Цикл for...in проходит через перечисляемые свойства объекта. Он пройдёт по каждому отдельному элементу

// var o = {
//   x: 1,
//   y: 2,
//   z: 3
// }
// console.log(o);

// var p = Object.create(o);
// p["a"] = 90;//можно и так задавать
// p.b = "80";
// p.c = function name(){};
// console.log(p);

// for (i in o) {// создаем новую переменную i и в нее перечисляем все свойства объекта свои и наследуемые
//   console.log(i);//показывает иена элементов
//   console.log(o[i]);//только через квадратные скобки через точки не получиться так как i это переменная
//   //обращаемся к свойствам элементов
// }
// for (i in p) {// создаем новую переменную i и в нее перечисляем все свойства объекта свои и наследуемые
//   console.log(i);
//   //console.log(o[i]);//покажет свои свойства так как о является прототипом р
//   console.log(p[i]);//покажет все свойства свои  и унаследованные
// }




// ___Выведение определенных свойств объектов

// var o = {
//     x: 1,
//     y: 2,
//     z: 3
//   }
//   console.log(o);
  
//   var p = Object.create(o);
//   p["a"] = 90;//можно и так задавать
//   p.b = "80";
//   p.c = function name(){};
//   console.log(p);

// for (var k in p) {
//   console.log(k + "выводит все свойства");//выводит все ключи  и унаследованные и собственные
//   console.log(p[k]);// выводит все свойства и свои и унаследованные
// }
// for (var k in p) {
//   if (!p.hasOwnProperty(k)) continue;//выводит только собственные свойства
//   console.log(k + " только собственные  свойства");
// }
// for (var k in p) {
//   if (p.hasOwnProperty(k)) continue;//выводит только унаследованные свойства
//   console.log(k + " только унаследованные  свойства");
// }
// for(var l in p) {
//   if (typeof p[l] === "function") continue;//выводит все свойства кроме функций
//   console.log(l + " все свойства кроме функий");
// }

// for (var r in p) {
//   if ((!p.hasOwnProperty(r)) || (typeof p[r] === "function")) continue;//выводит только собственные свойства без фунций

//   console.log(r + " только собственные без функий");
// }




// var o = {
//     x: 1,
//     y: 2,
//     z: 3
//   }
//   console.log(o);
// var p = Object.create(o);
//   p["a"] = 90;//можно и так задавать
//   p.b = "80";
//   p.c = function name(){};
//   console.log(p);

// //Метод Object.keys() возвращает массив из собственных перечисляемых свойств 
// //переданного объекта, в том же порядке, в котором они бы обходились циклом for...in 
// //(разница между циклом и методом в том, что цикл перечисляет свойства и из цепочки прототипов).  

// var x = Object.keys(o);
// console.log(typeof x);
// console.log(Object.keys(p));//все исчисляемые собственные
// console.log(Object.keys(o));


// //Метод Object.getOwnPropertyNames() возвращает массив со всеми свойствами 
// //(независимо от того, перечисляемые они или нет), найденными 
// //непосредственно в переданном объекте.

// console.log(Object.getOwnPropertyNames(o)); // исчисляемыее и неисчисляемые
// console.log(Object.getOwnPropertyNames(p));


//создание объекта

//1
// var a = {x:1};
// console.log(a);

//2
// var b = new Object({y:2});
// console.log(b);
// var b = new Object(10);
// console.log(b);
//  var b1 = new Array(10);
//  console.log(b1);

//3 ES2015
// var c = Object.create(Object.prototype);
// c.z = 3;
// console.log(c);





//наследуемые
// var random = {
//   get octet() {return Math.floor(Math.random() * 256);},
//   get uint16() {return Math.floor(Math.random() * 65536);},
//   get int16() {return Math.floor(Math.random() * 65536) - 32768;}
// } 
// console.log(random.octet);
// console.log(random.uint16);
// console.log(random.int16);

// var n = Object.create(random);
// n.x = 1;
// n.y= 2;

// console.log(n.octet);//наследуются


// var o = {
//     x: 1,
//     y: 2,
//     z: 3
//   }
//   console.log(o);
// var p = Object.create(o);
//   p["a"] = 90;//можно и так задавать
//   p.b = "80";
//   p.c = function name(){};
//   console.log(p);

//   console.log(Object.getPrototypeOf(o));
//   console.log(Object.getPrototypeOf(p));//показывает объект прототипа
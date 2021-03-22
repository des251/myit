//ТЕРНАРНЫЙ ОПЕРАТОР-----------------------------------------------------------------------

// console.log(true ? 1 : 2);
// console.log(false ? 1 : 2);
// console.log(1 >= 2 ? 1 : 2);
// console.log(4 < 9  ? 1 : 2);

// var x = 15;

// console.log(x === 15 ? true : false);
// console.log(x === '15' ? true : false);

// var age = 17;
// var confirm = age >= 18 ? 'You can go' : 'You can not go';

// console.log(confirm);

// var age = 2;
// var greeting = age < 3 ? 'Hello kid' :
//    age < 18 ? 'How do you do' :
//    age >= 18 ? 'Hello' :
//   'Who da hell are you ?';

// console.log(greeting);


//NULL AND UNDEFINED-------------------------------------------------------------------------------------------

// console.log(null === undefined);
// console.log(null == undefined);
//undefined,  в любых математических операциях даёт NaN

//АВТОМАТИЧЕСКАЯ КОНВЕРТАЦИЯ ТИПОВ --------------------------------------------------------------------------------

// console.log(8 * null); // null to number
// console.log('5' - 1); // string yo number
// console.log('5' + 1); // concat number to string
// console.log('five' * 2); //Not a Number
// console.log(false == 0); // boolean to number
// console.log(true == 1); // boolean to number
// console.log(null == undefined); //to number
// console.log('0' == 0); //to number
// console.log('0' == false); //to number

// // FALSE VALUES(0/NaN/''/false) -------------------------------------------------------------------------
// console.log('' == false);
// console.log(false == '');
// console.log(0 == '');
// console.log('' == 0);
// console.log(false == 0);
// console.log(0 == false);
// //NaN always false


//РУЧНОЕ (ЯВНОЕ) ПРЕОБРАЗОВАНИЕ ТИПОВ-------------------------------------------------------------------------
                                                    //----1------

// console.log(Boolean('string'));
// console.log(Boolean(''));
// console.log(Boolean(456));
// console.log(Boolean(0));
// console.log(Number('string'));
// console.log(Number('456'));
// console.log(Number(true));
// console.log(Number(false));
// console.log(Number(null));
// console.log(String(255));
// console.log(String(true));
// console.log(String(null));
// console.log(String(undefined));
// console.log(String(NaN));

// console.log(Object(null));
// console.log(Object(undefined));
// console.log(Object('js'));
// console.log(typeof Object(89));


//-------2---------lifeHack

// var h = 15;
// console.log(h + '');

// var f = '15';
// console.log(+f);
// console.log(f-0);

// var e = 0;
// var k = 1;
// var p = 15;
// console.log(!!e);
// console.log(!!k);
// console.log(!!p);


                                                                //---------3----------------

// var r = 15;

// console.log(r.toString());
// console.log(r.toString(2)); //binary_string
// console.log('0' + r.toString(8));  //octal_string
// console.log('0x' + r.toString(16));  //hex_string
// console.log(15.toString()); // так нельзя
// console.log(15..toString()); //а так можно

                                                              //-----------4--------------

// var g = 125.89674;

// console.log(g.toFixed());
// console.log(g.toFixed(3));// длинна после запятой последнюю цифру округляет по законам математики

// console.log(g.toExponential());
// console.log(g.toExponential(2));

// console.log(g.toPrecision());
// console.log(g.toPrecision(4)); // вся длинна  последнюю цифру округляет по законам математики


                                                            //-------------5-----------------
// parseInt("10");// Переводит целые числа
// parseFloat("1.99"); // Переводит и целые и дробные (вещественные значения)
// console.log(parseInt('15'));
// console.log(parseFloat('15.99'));
// console.log(parseFloat('string'));
// console.log(parseFloat('.1'));
// console.log(parseInt('ff', 16));
// console.log(parseInt('11011', 2));
// console.log(parseInt('-0xFF'));
// console.log(parseInt('0.1'));
// console.log(parseFloat('$72.47'));
// console.log(parseFloat('meters 72.47'));
// console.log(parseFloat('72.47 meters'));


//УСЛОВНЫЕ КОНСТРУКЦИИ (ВЕТВЛЕНИЯ)


                                                //----------if else--------------
// var i = 2;
// var x = 6;

// if (i < 3) {
//   if (x > 3) {
//     console.log("inner1");
//   } else {
//     console.log("inner2");
//   };
//   console.log("outer1");
// } else {
//   console.log("outer2");
// }


//тернарный оператор возвращает значение а if else не возвращает ???????????????(09 04 2018)


                                                    //-------------switch-------------------
// var n = 2;

// switch(n) {
//   case 1:
//     console.log('case1')
//   break;
//   case 2:
//     console.log('case2')
//   //break;
//   case 3:
//     console.log('case3')
//   //break;
//   default:
//     console.log('case4')
//   break;
// }


// //ЦИКЛЫ for while

// var sum = 0;
// for (i = 0; i <= 100; i++) {
//   sum += i;
// }
// console.log(sum);
// // сумма всех чисел от 1 до 100





// var sum = 0;
// var i = 0;
// for (; i <= 100; i++) {
//   sum += i;
// }
// console.log(sum);
// // сумма всех чисел от 1 до 100



// var sum = 0;
// var i = 0;
// for (; i <= 100;) {
//   sum += i;
//   i++;
// }
// console.log(sum);
// // сумма всех чисел от 1 до 100


// var sum = 0;
// for (i = 1; i <= 100; i=i+2) {
//   sum += i;
// }
// console.log(sum);
// // сумма всех нечетных чисел от 1 до 100



// while (i <= 100) {
//   sum += i;
//   i++;
// }
// console.log(sum);
// var i = 3;

// while (i) {
//   console.log( i-- );
// }

var x = 0;
var y = x++
console.log(y);


var x = 0;
var z = ++x;
console.log(z);

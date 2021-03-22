
//ARRAY

// var newArray = [1, 2, 3, 4, 5];
// newArray.myName = "Denis";//что это ??????//записывается как объект и стоит в конце не имеет порядкового номера только ключ myName
// newArray[6] = {x:1};
// console.log(newArray);
// console.log(typeof (newArray.myName));
// console.log(newArray[7]);//свойство myname не является элем массива и к нему можно обратиться лишь только через ключ myName
// //массив это ОБЪЕКТ
// console.log(newArray[newArray.length - 1]);//последний эллемент массива

// var newArray = [1, 2,  , 6];
// newArray[-1.23] = true;//добавилось как свойство интерперетирует как свойство
// console.log(newArray);
// newArray["1000"] = 0;//преобразовал к целому числу
// console.log(newArray);
// console.log(newArray.length);
// console.log(newArray[999]);//пусто
// console.log(newArray[1.000]);//преобразовал к целому числу

//-----sparse

// var a = new Array(5);
// console.log(a);
// console.log(a.length);
// console.log(a[3]);//пусто undefined


// var b = [];
// console.log(b.length);
// b[1000] = 0;
// console.log(b.length);

// var c = [1, 2, 3, 4, 5];
// console.log(c.length);
// delete c[1];//удаляет только значение оставляя пустое место
// console.log(c);
// console.log(c[1]);//undefined
// console.log(c.length);

// var d = [,,,];
// console.log(d);
// console.log(d.length);
// console.log(d[0]);

// var e = new Array(3);

// console.log(0 in d);
// console.log(0 in e);
// console.log(1 in c);
// console.log(undefined in c);

// var f = [1, 2, 3, 4, 5];
// f.length = 3;//удаляет элементы
// console.log(f);
// f.length = 0;
// console.log(f);
// f.length = 5;//sparse массив то же что new Array(5)
// console.log(f);

// var o = [1, 2, 3, 4, 5, , 6, null, 9];
// var keys = Object.keys(o);//Превращает в объекто-массив сперечисленными свойствами как у объекта и по порядку как у массива
// console.log(keys);
// console.log(keys[2]);//так покажет что это строка так как это элемент объекто-массива keys
// console.log(typeof (keys[2]));
// for (var i = 0; i < keys.length; i++) {
//   console.log(o[keys[i]]);
//   console.log(typeof (o[keys[i]]));// а так покажет что это число т к  это элемент массива о
// }

//если нужно вывести только те элементы у которых есть значение (что бы сделать из spars dense нужно использовать forEach() или с помощью push() смотри ниже)


// var o = [1, 2, 3, 4, 5, , 6, null, 9];
// var notSparsArray = [];
// var str = '';
// var pushMe = [];
// for (var i = 0; i < o.length; i++) {//перепрыгивает null undefined и не существующие
//   if (!o[i]) continue;
//   console.log(o[i]);
//   notSparsArray[i] = o[i];
//   str += o[i] + ' ';
//   pushMe.push(o[i]);//--------------------------------------через push() можно зделать из spars dense !!!!!!!!!!!!!!!!!!!!!
// }

// console.log(notSparsArray);//spars все равно остаются не понятно почему
// console.log(str);
// console.log(pushMe);



// for (var i = 0; i < o.length; i++) {
//   if (o[i] === undefined) continue; //undefined и несуществующие
//   console.log(o[i]);
//   notSparsArray[i] = o[i];
// }
// console.log(notSparsArray[5]);//spars все равно остаются
// for (var i = 0; i < o.length; i++) {
//   if (!(i in o)) continue;//перепраыгивает несуществующие
//   console.log(o[i]);
// }




//for in для spars



// var sparseArray = [1, 2, 3, , 6];
// var denseArr = [];
// for (var index in sparseArray) {
//   var value = sparseArray[index];
//   console.log(value);
// }
// var sparseArray = [1, 2, 3, , 6];
// for (var index in sparseArray) {
//   denseArr.push(sparseArray[index]);
// }
// console.log(denseArr);//получился чисты массив без пробелов !!!!!!!!!!!!!!!!!!!!
// console.log(sparseArray.length);
// console.log(denseArr.length);


//forEach()//для перебора массива предпочтительней


//join() reverse() sort()

// var o = [1, 2, 3, 4, 5, {name: "Jack"}, "string"];
// var p = [5, 22, 3, 4, 1, {name: "Jack"}, "string", "A", "a"];
//console.log(o.join());
//console.log(o.join("--"));
//console.log(o.join("  "));

// console.log(o.reverse());
// console.log(p.sort());//переводит в строку и сортирует

// p.sort(function(a,b){
//   return a-b;
// });//делает сортировку массива по возрастанию
// console.log("_____" + p);

// p.sort(function(a,b){
//   return b-a;
// });//делает сортировку массива по убыванию
// console.log("_____" + p);

// var a = [1, 2, 3];
// console.log(a);
// var b = [4, 5];
// console.log(b);
// var c = a.concat(b);
// console.log(c);//обьединяет 2 массива то есть создается новый массив который в конец массива а добавляет массив b



// var a = [1, 2, 3, 4];
// var c = a.slice(0, a.length -1);//удалить последний элемент в этом случае он вырежет из а все элементы от 0 до предпоследнего элемента и вернет их в новую переменную c
// console.log(a);//не трогает старый массив
// console.log(c);

// var c = a.slice(0, 3);//вырежет все эллементы от 0 до 3 причем 3 не включительно то есть [0] [1] [2]
// console.log(a);//не трогает старый массив
// console.log(c);

// var arr = [1, 2, 3, 4, 5];

// var b = arr.slice(1, 3);//вырежет начиная с индекса 1 и 3 элемента
// console.log(b);
// console.log(arr);

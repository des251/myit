//-------------------------------------------------короткое свойства




// let name = 'Вася';
// let isAdmin = true;
// let user = {name, isAdmin};

// console.log(user);
// console.log(JSON.stringify(user));




//---------------------------------------------Вычисляемые имена свой-в




/* let propName = 'firstName';
let user = {[propName]: 'Вася'};

console.log(user.firstName); */

// let a = 'Мой ';
// let b = 'зеленый ';

// let user = {[(a + b).toUpperCase()]: 'Гена'};
// console.log(user);
// console.log(user['МОЙ ЗЕЛЕНЫЙ ']);//Гена
// console.log(user['мой зеленый ']);//undefined





//----------------------------------------------Получение и изменение прототипа
//getPrototypeOf() и setPrototypeOf()




// let prot = {
//     name: 'Name'
// }

// let newProt = {
//     surname: 'Surname'
// }
// var obj = Object.create(prot);


// console.log(Object.getPrototypeOf(obj));


// //меняем прототип через сеттер

// Object.setPrototypeOf(obj, newProt);

// console.log(Object.getPrototypeOf(obj));





//-----------------------------------Слияние свойства(одноуровневое клонирование)





//assign - клонируются все ссылки на объекты при изменении
// let user = {name: 'Vasia'};
// let visitor = {isAdmin: false, visits: true};
// let admin = {isAdmin: true};//если одинаковые имена свойство запишеться то что было последнее

// user.address = {
//     city: 'brest',
//     street: 'grodnenskaya',
//     house: '45'
// }

// Object.assign(user, visitor, admin);
// console.log(user);



// let clone = Object.assign({}, user);//одноуровневое клонирование объекта

// console.log(clone);

// user.address = {
//     city: 'minsk',
//     street: 'gaya',
//     house: '99'
// }

// console.log(user);
// console.log(clone);//клон не поменялся

// clone.address.city = 'los angeles';

// console.log(clone);
// console.log(user);//user не изменился

// let clone2 = Object.assign({}, user);//клонирование объекта
// //последующие свойства перзаписываю предидущие
// clone2.address.city = 'grodno';
// user.address.city = 'gomel';


// console.log(user);
// console.log(clone);
// console.log(clone2);

// user.address.city = 'minsk';

// console.log(user);
// console.log(clone);
// console.log(clone2);

// clone.address.city = 'grodno';
// console.log(user);
// console.log(clone);
// console.log(clone2);//=========================>>>>еще





//-----------------------------------------------функция is



/* console.log(Object.is(+0, -0));
console.log(+0 === -0);

console.log(Object.is(NaN, NaN));
console.log(NaN === NaN);

console.log(Object.is({a:'b'}, {a: 'b'}));

console.log(Object.is('hello', 'hello'));

console.log(Object.is(2, '2'));

let a = {a: 1};
let b = a;
console.log(Object.is(a, b)); */




//-------------------------------------------Настоящие методы  es2015



// //старый вариант
// var obj = {
//     prop: function() {
//         console.log('hello');
//     }
// }
// obj.prop();
// //новый вариант у метода появилось внутреннее свойство [[HomeObject]] со ссылкой на объект которому метод принадлежит
// let nObj = {
//     prop(){
//         console.log('sayHi');
//     }
// }
// nObj.prop();
// console.log(nObj.prop);

// let user = {
//     name: 'User',
//     age: 30,
//     sayHi(){
//         console.log('hello');
//     }
// }

// user.sayHi();


// let name = 'Вася';
// let surname = 'Петров';
// let user = {
//     name,
//     surname,
//     get fullName() {
//         return `Имя сотрудника ${name}     фамилия    ${surname}`;//интерполяция
//     }
// };
// console.log(user.fullName);//с помощью get добали свойство fullname объекту




//------------------------------------------Вычисляемые имена методов




//При объявлении метода (так же как и в свойствах) можно использовать [вычисления] вместо имени метода
//[methodName]() можно применять к имени метода вместо [methodName]: function(){return: 'Vasia'}

// let methodName = 'getFirst';

// let user = {
//     [methodName + 'Name']() {//конкатенация 'getFirstName'
//         return 'Vasia';
//     }
// }

// console.log(user.getFirstName());




//----------------------------------------Ключевое слово super.




//ключевое слово super используется только из методов объектов и позволяет из метода обратиться к свойстау прототипа

//__proto__ - удобная ссылка на объект прототипа и через нее можно задавать объект прототипа

//super. использует специальное свойство [[HomeObject]] и от него берет __proto__
//super. обращается к homeObject он в свою очередь ссылается на объект к которому пренадлежит
//и уже от него берет свойство __proto__ то есть ссылку на объект прототипа

//.super == HomeObject__proto__


// let animal = {
//     walk() {
//         console.log('im walking');
//     }
// };

// let rabbit = {
//     __proto__: animal,//делает animal прототипом для rabbit

//     // walk: function() {//ошибка так как в старом методе нету [[HomeObject]]
//     //     //обращаемся к прототипу animal
//     //     super.walk();// Ошибка не сработает так как нету [[HomeObject]] super. == [[HomeObject]].__proto__
//     //     this.__proto__.walk();//так сработает
//     // }

//     walk(){
//         //обращаемся к прототипу animal
//         super.walk();//тут сработает так как есть [[HomeObject]] super. == [[HomeObject]].__proto__
//     }

// };
// rabbit.walk();

//super. === (Объект в котором находится метод).__proto__





//------------у функции стрелки => являются исключением из правил в них используется super из внешней функции




//=> нету this. super. arguments!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!


// let animal = {
//     walk() {
//         console.log('im walking');
//     }
// };
// let rabbit = {
//     __proto__: animal,
//     walk() {//super. есть у метода walk()
//         //super. здесь тот же что и снаружи то есть super. берется из walk() наружной функции
//         setTimeout(() => super.walk());//берет super из внешней функции walk() а она уже ссылается на [[homeObject]]__proto__ то есть на свойство прототипа
//     },
//     fc:() => super.walk()
// };
// rabbit.walk();
// rabbit.fc();//не сработает так как у => нету super







//------------------------------------------------------КЛАССЫ





//новый способ
/* class User {
    constructor(name) {
        this.name = name;
    }
    sayHi() {
        console.log(this.name);
    }
}

let user = new User('Вася');
user.sayHi(); */
//старый способ
// function User(name) {
//     this.name = name;
// }
// User.prototype.sayHi = function() {
//     console.log(this.name);
// }

// var user1 = new User('Вася');
// user1.sayHi();

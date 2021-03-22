//--------------КЛАССЫ


// //старый способ
// var age = {
//     year: 1990
// }

// function User(name) {
//     this.name = name;
// }
// // User.prototype.sayHi = function() {
// //     console.log(this.name);
// // }
// User.prototype = age;//При создании объекта через new, в его прототип __proto__ записывается ссылка из prototype функции-конструктора.


// var user1 = new User('Вася');
// //user1.sayHi();
// console.log(user1.__proto__);
// console.log(user1.year);

// //console.log(User.prototype);


// function User(name) {
//     this.name = name;
// }
// //свойство prototype всегда содержит объект
// User.prototype = {//Само по себе, без вызова оператора new, оно вообще ничего не делает, его единственное назначение – указывать __proto__ для новых объектов.
//         sayHi: function() {
//         console.log(this.name);
//     }
// }
// var user1 = new User('Вася');//user1.__proto__ == User.prototype ()
//свойство prototype является по умолчанию объектом
//и у этого объекта есть единственное свойство constructor
//после создания объекта через new его прототипом становиться объект со свойством constructor то есть User.prototype == constructor
// user1.sayHi();
// console.log(User.prototype);
// console.log(User.__proto__);
// console.log(user1.prototype);
// console.log(user1.__proto__);
// console.log(Number.__proto__);





//новый способ

//------------------------------------------class declaration

//свойство prototype является по умолчанию объектом
//и у этого объекта есть единственное свойство constructor
// class User {
//     // constructor(name) {//инициализируется свойсто name
//     //     this.name = name;
//     // }
//     constructor(name, age = 0) {//не материально и появляется только после того как создан объект через new
//         this.name = name;
//         this.age = age;
//     }
//     sayHi() {
//         console.log(this.name);
//     }
//     sayAge() {
//         console.log(this.age);
//     }
// }

// let user = new User('Вася');

// user.sayHi();

// console.log(user.name);//у убъекта есть свойство name
// console.log(user.age);

// let user2 = new User('Не Вася', 30);
// user2.sayAge();
// console.log(user2.name);
// console.log(user2.age);





//без new нельзя создать объект
//объявление класса ведет себя как let (области видимости)


//особености методов внутри класса
//метод имеет homeobject
//use strict применяются к классам по умолчанию
//будут все свойства объекта enumerable то есть (lecture--5 219 строка)

//конструктор задает имена полей объекта(поля с именами)





//-----------------------------------------------------class expression




// let User = class {
//     constructor(name, age = 0) {//не материально и появляется только после того как создан объект через new
//         this.name = name;
//         this.age = age;
//     }
//     sayHi() {
//         console.log('Hello ' + this.name);
//     }
//     sayAge() {
//         console.log(this.age);
//     }
// }

// let user = new User('Петя', 26);
// user.sayHi();
// user.sayAge();


// let SiteGuest = class User {//имя класса все равно будет SiteGuest
//     constructor(name, age = 0) {//не материально и появляется только после того как создан объект через new
//         this.name = name;
//         this.age = age;
//     }
//     sayHi() {
//         console.log('Hello ' + this.name);
//     }
//     sayAge() {
//         console.log(this.age);
//     }
// }

// // let user = new User('Петя', 26);//user is not defined
// // user.sayHi();
// // user.sayAge();

// // let guest = new SiteGuest('Vasia');
// // guest.sayHi();






// let alModels = {};

// function createModel(Model, ...args) {
//     let model = new Model(...args);
//     model._id = Math.random().toString(36).slice(2);

//     alModels[model._id] = model;
//     console.log(model);
//     return model;
// }

// let user = createModel(class User {
//     constructor(name) {
//         this.name = name;
//     }
//     sayHi() {
//         console.log(this.name);
//     }
// }, 'Вася');

// user.sayHi();
// console.log(alModels[user._id].name);
// console.log(alModels[user._id]);

// console.log(user);

// console.log(alModels);




//----------------------------------Поля




//объектное поле конкретно объектом
//статическое поле может использоваться всеми объектами
//у статичеких методов ------------------------------------------нету .this

// class User {

//     constructor(firstName, lastName) {
//         this.firstName = firstName;
//         this.lastName = lastName;
//     }
//     getNameData() {//объектный метод
//         console.log('Имя ' + this.firstName + ' Фамилия ' + this.lastName);
//     }
//     static createGuest() {//статчное поле можно использовать прямо из класса
//         return new User('Гость', 'Сайта');//создание в объод конструктора называется
//     }
//     static compareUsers(user1, user2) {
//         if (user1.firstName == user2.firstName && user1.lastName == user2.lastName) {
//            return true;
//         } else {
//             return false;
//         }
//     }
//     static get species () {
//         return 'Homo Sapiens';
//     }
// }

//console.log(User.createGuest());
//  //User.getNameData();//ошибка так как это поле объектное и оно появляется только после создания объекта через new
//let user = new User('Vasia', 'Ivanov');
// let user1 = new User('Vania', 'Ivanov');
// let user2 = new User('Vasia', 'Ivanov');
// console.log(User.compareUsers(user, user1));
// console.log(User.compareUsers(user2, user));
// console.log(User.species);//статическая константа
//user.getNameData();
// console.log(user.firstName);
// console.log(User.createGuest);



//user.createGuest()//id not a function не логичный синтаксис нельзя обращаться к статичному полю через созданный объект


//создание статической констатнты

// class Menu {
//     static get elemClass() {
//         return 'menu';
//     }
// }

// console.log(Menu.elemClass);

//get set повторить чрез get создается свойство объекта на чтение

//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!super. нельзя вызывать в статических методах





//-----------------------------------Наследование классов через ключевое слово extends





class Animal {
    constructor(name) {
        this.name = name;
    }
    walk() {
        console.log('I walk: ' + this.name);
    }
}

class Rabbit extends Animal {
    //constructor унаследовался если не задавать constructor он просто унаследуется от родителя
    constructor(name, age) {
        //this.age = age;//будет ошика
        super(name),//передпем родительский конструктор(super() вызывается только из конструктора и должен выполняться в начале то есть до this.age)
        this.age = age;//добавляем новое поле
        //this.age = age;
    }
    walk() {
        super.walk();//что бы обратиться к родителю(прототипу)
        console.log('...and jump!');
        console.log(this.age);
    }
}

new Rabbit('Вася').walk();
new Animal('Vasia').walk();
let rabbit = new Rabbit('Вася', 96);
rabbit.walk();
let animal = new Animal('Vasia');
console.dir(Animal.prototype);
console.log('---------------')
console.log(Rabbit.__proto__);
console.log(Rabbit.prototype);//хранятся методы Rabbit не выводятся так как они not enumerable в классе
console.log(rabbit.__proto__);
new Rabbit('superStar', 66).walk();

console.log(rabbit);
animal =  new Animal('Vasssia');
console.log(animal);
//все конструкторы должны быть отработаны


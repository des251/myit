// function House(address, owner) {
//     this.rooms = [];
//     this.address = address;
//     this.owner = owner;
//     this.roomCounter = 0;
// };

// House.prototype = {
//     addRoom: function (room) {
//         this.roomCounter++;
//         return this.rooms.push(room);
//     },
//     print: function () {
//         console.log('House is located on ' + this.address + '\n');
//         console.log('The owner of house is ' + this.owner + '\n');
//         console.log('There are ' + this.roomCounter + ' rooms in this House\n');
//         for (var i = 0; i < this.rooms.length; i++) {
//             console.log('\n' + this.rooms[i].room + ':\n' + 'area - ' + this.rooms[i].square +
//                 ' (square meters)');
//             console.log('Furniture: ');
//             this.rooms[i].print();
//         }
//     }
// };



// console.log(House.__proto__);//ссылается на Function.prototype
// console.log(House.prototype);
// let x = new House('aaa', 'aaa');
// console.log(x.__proto__);//ссылается на House.protoype
// function Room(room, sqr) {
//     this.room = room;
//     this.furniture = [];
//     this.light = [];
//     this.square = sqr;
// };

// //общее для всех комнат статические поле

// //ограничение по занимаемой площади в процентах
// Room.limitFurniture = 70;
// //ограничение по свету в люменах
// Room.limitLight = 50;

// Room.prototype = {
//     addLight: function(light) {
//         var sum = 0;
//         for (var i = 0; i < this.light.length; i++) {
//             sum += this.light[i];
//         }
//         sum+= light;
//         if (sum >= Room.limitLight) {
//             throw new Error ('Too much light !!!  \_(-_-)_/\n\nPlease remove some bulbs\n\n');
//         }
//         return this.light.push(light);
//     },
//     addFurniture: function(thing) {
//         var sum = 0;
//         for (var i = 0; i < this.furniture.length; i++) {
//             sum += this.furniture[i].ar;
//         }
//         //не забыть добавить текущее
//         sum+= thing.ar;
//         //высчитываем процент загруженности комнаты
//         this.percent = Math.round(100 * sum / this.square);
//         if (this.percent >= Room.limitFurniture) {
//             throw new Error ('Not enough space !!!  \_(-_-)_/\n\nPlease remove smth you dont need\n\n');
//         }
//         return this.furniture.push(thing);
//     },
//     print: function() {
//         for (var i = 0; i < this.furniture.length; i++) {
//             console.log(this.furniture[i].name + ' area - ' + this.furniture[i].ar + ' (square meters)');
//         }
//         console.log(this.percent + ' % of room is loaded');
//         console.log('Light:')
//         var res = 0;
//         for (var j = 0; j < this.light.length; j++) {
//             res += this.light[j];
//         }
//         console.log(res + ' lm');
//     }
// };



// var x = new House('Grodnenskaya str.', 'Denis');

// var r1 = new Room('Kitchen', '150') ;
// r1.addFurniture( {name: "table", ar: 10} );
// r1.addFurniture( {name: "TV", ar: 10} );
// r1.addFurniture( {name: "fridge", ar: 50} );
// r1.addLight(20);
// r1.addLight(10);
// r1.addLight(19);
// x.addRoom(r1);

// var r2 = new Room('Bedroom', '200') ;
// r2.addFurniture( {name: "bed", ar: 40} );
// r2.addFurniture( {name: "chair", ar: 4} );
// r2.addLight(40);
// x.addRoom(r2);
// x.print();


// class User {
//     //enumerable
//     constructor(name, id) {
//         this.name = name;
//         this.id = id;
//         this.goodbye = function () {
//             console.log('good good bye');
//         }
//     } 
//     //non enumerable
//     hello() {
//         console.log('hello');
//     }
//     exit() {
//         console.log('exit');
//     }
// }

// let x = new User("denis", 25);

// console.log(x);
// console.log(x.__proto__.hello);

// for (let key in x) {
//     console.log(key);
// }
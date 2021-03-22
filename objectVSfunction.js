
//OBJECT
var someObj = {
    x: 1,
    y: 2,
    z: 3
};

var anotherObj = someObj;

console.log(anotherObj);
someObj.i = 4;
//так как переменные для объектов это ссылки объекты не копируются
console.log(anotherObj);

//FUNCTION

var someFunc = function() {
    var x = 23;
    return console.log('first function' + x);
}
//функция копируется а не ссылается поэтому здесь создается новая функция
var anotherFunc = someFunc;

console.log(anotherFunc);

anotherFunc.x = 99;
console.log(anotherFunc);
someFunc();
anotherFunc();

anotherFunc = function() {
    return console.log('changing');
}
//при изиенении новой функции старая не меняется
anotherFunc();
someFunc();

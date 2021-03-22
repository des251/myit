// function makeCounter() {
//     var currentCount = 1;
//     return function() {
//         return currentCount++
//     }
// };
// var count = makeCounter();
// console.log( count() );
// console.log( count() );
// console.log( makeCounter()() );
// console.log( makeCounter()() );//если не присвоить в переменную всегда будет 1



// function getCounter() {
//     var counterCount = 1;
//     return {
//         getNext: function() {
//             return counterCount++;
//         },
//         setCount: function(value) {
//             counterCount = value;
//         },
//         resetCount: function() {
//             counterCount = 1;
//         }
//     };
// }

// var res = getCounter();
// console.log(res);
// console.log(res.getNext());
// console.log(res.getNext());
// console.log(res.getNext());
// console.log(res.setCount(90));
// console.log(res.getNext());
// console.log(res.getNext());
// console.log(res.resetCount());
// console.log(res.getNext());
// console.log(res.getNext());


// var res2 = getCounter();
// console.log(res2.getNext());


//вариант с функцией
function getCounter() {
    var counterCount = 1;

    function count() {
        return counterCount++
    };
    //в эту же функцию(используем ее как объект) добавляем методы
    count.setCount = function(value) {
        counterCount = value;
    };
    count.resetCount = function() {
        counterCount = 1;
    };

    return count;
};

var res = getCounter();
console.log( res() );
console.log( res() );
res.setCount(150);
console.log( res() );
console.log( res() );
res.resetCount();
console.log( res() );
console.log( res() );
console.log( res() );

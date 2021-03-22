// function armyFunctions() {
//     var arr = [];
//     for (var i = 0; i < 10; i++) {
//         var item = function() {
//             console.log(i);
//         };
//         arr.push(item);
//     }
//     return arr;
// }

// var a = armyFunctions();

// a[1]();//10
// a[3]();//10
// a[7]();//10


function armyFunctions() {
    var arr = [];
    for (let i = 0; i < 10; i++) {
        var item = function() {
            console.log(i);
        };
        arr.push(item);
    }
    return arr;
}

var a = armyFunctions();

a[1]();//1
a[3]();//3
a[7]();//7
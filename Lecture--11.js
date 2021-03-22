// 'use strict'
//списки
// var node3 = {ref : null, data : '1, 2, 3'};
// var node2 = {ref : node3, data : 'a, b, c'};
// var head = null;
// var node1 = {ref : null, data : 'm, m, m'};

// function print(head) {
//     var cur = head;
//     console.log(node1.data);
//     while (cur.ref !== null) {
//         cur = cur.ref;
//         console.log(cur.data);
//     }
//     console.log('-----------');
// }

// function addNode(head , data) {
//     var cur = head;
//     while (cur.ref !== null) {
//         cur = cur.ref;
//     }
//     var temp =  {ref : null, data : data};
//     cur.ref = temp;

// }
// addNode(node1, 'new data');
// addNode(node1, 'another new data');
// addNode(node1, 'and another new data');
// console.log(node1);



// var listHead = null;
// //var node1 = {ref : null, data : 'm, m, m'};

// function print(head) {
//     var cur = head;
//     console.log(cur.data);
//     while (cur.ref !== null) {
//         cur = cur.ref;
//         console.log(cur.data);
//     }
//     console.log('-----------');
// }

// function addNode(head , data) {
//     if (head === null) {
//         listHead = {ref : null, data : data};//???было м м м
//        // console.log(head);
//        return;
//     }
//     var cur = head;
//     while (cur.ref !== null) {
//         cur = cur.ref;
//     }
//     var temp =  {ref : null, data : data};
//     cur.ref = temp;

// }
// addNode(listHead, 's, s, s');
// addNode(listHead, 'g, g, g');
// addNode(listHead, 'f, f, f');
// print(listHead);

var list = {};

list.listHead = null;

list.print = function() {
    var cur = this.listHead;
    var i = 0;
    console.log(i + ' - ' + cur.data);
    while (cur.ref !== null)
    {
        cur = cur.ref;
        i++;
        console.log(i + ' - ' + cur.data);
    }
    console.log('-----------');
}

list.addNode = function(data) {

    if (this.listHead === null) {
        this.listHead = {ref : null, data : data};
       return;
    }

    var cur = this.listHead;
    while (cur.ref !== null) {
        cur = cur.ref;
    }
    var temp =  {ref : null, data : data};
    cur.ref = temp;
}

list.indexAdd = function(ind, data) {

    var count = 1;
    var cur = this.listHead;

    while (count < ind) {
        cur = cur.ref;
        count++;
    }

    // console.log(cur.data);
    var temp = {ref : cur.ref, data : data};
    cur.ref = temp;
}




list.addNode('s, s, s');
list.addNode('g, g, g');
list.addNode('f, f, f');
list.addNode('a, a, a');
list.addNode('b, b, b');
list.addNode('c, c, c');
list.print();

list.indexAdd(1, '-l-, -l-, -l-');
list.print();
list.indexAdd(3, '-q-, -q-, -q-');
list.print();
list.indexAdd(3, '-y-, -y-, -y-');
list.print();
//метод удаления с конца и с середины списка


var list = {};

list.listHead = null;

list.length = 1;

list.print = function() {

    var cur = this.listHead;
    var i = 0;
    console.log(i + ' - ' + cur.data);

    while (cur.ref !== null) {
        cur = cur.ref;
        i++;
        console.log(i + ' - ' + cur.data);
    }

    console.log('|')
    console.log(' -Length of node list is ' + list.length);
    console.log('-----------');
}

list.addNode = function(data) {

    if (this.listHead === null) {
        this.listHead = {ref : null, data : data};
       return;
    }
//пременная cur ссылается на listHead
    var cur = this.listHead;
    while (cur.ref !== null) {
        //переопределяем переменную cur теперь она больше не ссылается на listHead
        cur = cur.ref;
    }

    var listTail =  {ref : null, data : data};
    cur.ref = listTail;

    this.length++;
}

list.indexAdd = function(ind, data) {

    var count = 1;
    var cur = this.listHead;
    while (count < ind) {
        cur = cur.ref;
        count++;
    }

    var temp = {ref : cur.ref, data : data};
    cur.ref = temp;

    this.length++;
}

list.removeLastNode = function() {

    var origin = 1;
    var cur = this.listHead;
    var curLength = this.length - 1;

    while (origin < curLength) {
        cur = cur.ref;
        curLength--;
    }

    cur.ref = null;
    this.length--;
}

list.removeByIndex = function(ind) {

    var cur = this.listHead;
    var count = 0;

    if (ind >= this.length) {
        console.log('----------------------------------');
        console.log('| There is no such node here !!! |');
        console.log('----------------------------------');
        return;
    }

    if (ind === 0) {
        this.listHead = cur.ref;
        this.length--;
        return;
    }

    while (count < ind - 1) {
        cur = cur.ref;
        count++;
    }

    if (cur.ref === null) {
        this.removeLastNode();
    }

    cur.ref = cur.ref.ref;

    this.length--;
}


list.addNode('s, s, s');
list.addNode('g, g, g');
list.addNode('f, f, f');
list.addNode('a, a, a');
list.addNode('b, b, b');
list.addNode('c, c, c');
list.addNode('d, d, d');
list.print();


list.indexAdd(1, '-l-, -l-, -l-');
list.indexAdd(3, '-q-, -q-, -q-');
list.indexAdd(3, '-y-, -y-, -y-');
list.indexAdd(0, '-z-, -z-, -z-');
list.indexAdd(6, '-hh-, -hh-, -hh-');
list.print();
//метод удаления с конца и с середины списка
list.removeLastNode();
list.print();
list.removeLastNode();
list.print();

list.removeByIndex(10);
list.print();
list.removeByIndex(9);
list.print();
list.removeByIndex(0);
list.print();


var playList = new Object(list);//object create дубинаааа
playList.listHead = null;
playList.length = 1;
playList.addNode('track--1');
playList.addNode('track--2');
playList.addNode('track--3');
playList.addNode('track--4');
playList.print();

var playList2 = new Object(list);
playList2.listHead = null;
playList2.length = 1;
playList2.addNode('track--5');
playList2.addNode('track--6');
playList2.addNode('track--7');
playList2.addNode('track--8');
playList2.print();


list.print();
playList.print();
playList2.print();
list.addNode('hello');
playList2.addNode('world');
list.print();
playList.print();
playList2.print();

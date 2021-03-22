//'use strict'
//Ассоциативный массив
var arr = {
    a : ['2', '1', '5', '4', '3'],
    b : ['two', 'one', 'five', 'four', 'three'],
    c : [],
    add : function(x, y) {
        var check = true;
        if (typeof (x) !== typeof ('')) {
            x = x + '';
        }
        if ((x !== null) && (x !== undefined) && (typeof (x) === typeof ('')) && (x !== '')) {
            this.a.forEach(function(el){
                if (el === x) {
                    check = false;
                }
            });
            if (check === false) {
                return console.log(x + ' is already exists');
            }
            arr.a.push(x);
            arr.b.push(y);
            return;
        }
        return console.log('error');
    },
    //проверка существует ли такой элемент и если да то возвращается его индекс
    check : function(x) {
        var check = -1;
        this.a.forEach(function(el, ind){
            //неявное равенство если число то преобразуется
            if (el == x) {
                check = ind;
                console.log('index of element ' + x + ' is ' + check);
            }
        });
        return check;
    },
    isValueExist : function(x) {
        var check = false;
        this.a.forEach(function(el, ind){
            if (typeof (x) !== typeof ('')) {
                x = x + '';
            }
            if (el === x) {
                check = true;
            }
        });
        console.log(check);
        return check;
    },
    print : function() {
        for (var i = 0; i < this.a.length; i++) {
            console.log(this.a[i] + " - " + this.b[i]);
        }
        console.log('-----------------------')
    },
    remove : function(x) {
        var j = arr.check(x);
        for (var key in arr) {
            delete this[key][j];//удаляет элемент из массива и оставляет spars
            if (Array.isArray(arr[key])) {
                this[key] = this[key].filter(function() {return true;});//из spars делает dense
            }
        }
    },
    sorting : function() {
        for (var key in arr) {
            if (Array.isArray(arr[key])) {
                this[key].forEach(function(v, i, a) {
                    if (isNaN(+v)) {
                        a.sort();//этот метод сортирует строки если числа то переводит в строки и сортирует как строки
                    }
                    a.sort(function(x, y) {return x-y;});//этот метод импользует автоматическое приведение даннах и переводит строки в чила
                });
            }
        }
    },
    searchValueByKey : function(key) {
        if (typeof (key) !== typeof ('')) {
            key = key + '';
        }
        var index = this.a.indexOf(key);
        console.log('value of ' + key + ' is ' + this.b[index]);

    },
    sortByKey : function () {
        for (var i = 0; i < this.a.length; i++) {
            this.a[i] = + this.a[i];
        }
        for (var i = 0; i < this.a.length -1; i++) {
            var minValue = this.a[i];
            for (var j = i + 1; j <= this.a.length - 1; j++) {
                if (this.a[j] < minValue) {
                    minValue = this.a[j];
                    var swap = this.a[i];
                    this.a[i] = minValue;
                    this.a[j] = swap;
                }
            }
        }
        // for (var i = 0; i < this.a.length; i++) {
        //     this.connectKeyValue(this.a[i], this.b[i]);
        // }
        if (this.a[0] === 1) {
            this.c.push('one');
        }
        if (this.a[1] === 2) {
            this.c.push('two');
        }
        if (this.a[2] === 3) {
            this.c.push('three');
        }
        if (this.a[3] === 4) {
            this.c.push('four');
        }
        if (this.a[4] === 5) {
            this.c.push('five');
        }
        this.b = this.c;
    }
    // connectKeyValue : function(key, value) {
    //     for (var i = 0; i < this.a.length; i++) {
    //         if (this.a[i] === this.a[key]) {
    //             this.c.push(value);
    //         }
    //     }
    //     console.log(this.c);

    // }
};
//splice()???


arr.sortByKey();
arr.print();


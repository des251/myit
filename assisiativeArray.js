var arr = {

    a: ['2', '1', '5', '4', '3', '9', '11', '15', '555'],
    b: ['two', 'one', 'five', 'four', 'three', 'nine', 'eleven', 'fifteen', 'five hundred fifty five'],
    temp: {},

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

    searchValueByKey : function(key) {

        if (typeof (key) !== typeof ('')) {
            key = key + '';
        }

        var index = this.a.indexOf(key);

        console.log('value of ' + key + ' is ' + this.b[index]);

    },

    sortByKey: function() {

        for (var i = 0; i < this.a.length; i++) {
            this.temp[this.a[i]] = this.b[i];
        }

        var tempArr = Object.keys(this.temp);
        tempArr.sort(function(a, b) {
            return a - b;
        });

        for (var j = 0; j < tempArr.length; j++) {
            //console.log(tempArr[j] + ' - ' +  this.temp[tempArr[j]]);
            this.a[j] = tempArr[j];
            this.b[j] = this.temp[tempArr[j]];
        }
    },

    filterByKey: function(n) {
        //максимальная длинна значения
        var max = 0;
        this.a.forEach(function(v) {
            if (v.length > max) {
                max = v.length;
            }
        });
        //существует ли значение с такой длинной
        if (n > max) {
            console.log("ТАКОГО ЗНАЧЕНИЯ НЕТ");
            return;
        }

        for (var i = 0; i < this.a.length; i++) {
            if (this.a[i].length != n) {
                delete this.a[i];
                delete this.b[i];
            }
        }

        var dense = this.a.filter(function() {return true});
        var dense2 = this.b.filter(function() {return true});

        this.a = dense;
        this.b = dense2;

        //this.print();
    }
}

arr.add(78, 'seventy eight');
arr.check(11);
arr.isValueExist(5);
arr.remove(11);
arr.searchValueByKey(9);
arr.sortByKey();
arr.filterByKey(1);
arr.print();



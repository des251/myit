var arr = {
    a: ['2', '1', '5', '4', '3', '9', '11', '15', '555'],
    b: ['two', 'one', 'five', 'four', 'three', 'nine', 'eleven', 'fifteen', 'five hundred fifty five'],
    temp: {},
    print : function() {
        for (var i = 0; i < this.a.length; i++) {
            console.log(this.a[i] + " - " + this.b[i]);
        }
        console.log('-----------------------')
    },
    sortByKey: function() {
        for (var i = 0; i < this.a.length; i++) {
            this.temp[this.a[i]] = this.b[i];
        }
        var tempArr = Object.keys(this.temp);
        tempArr.sort(function(a, b) {
            return a - b;
        })
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

        this.print();
    }
}
arr.sortByKey();
arr.print();
arr.filterByKey(4);




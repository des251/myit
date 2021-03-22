var arr = {
    a : ['2', '1', '5', '4', '3', '9', '11', '15'],
    b : ['two', 'one', 'five', 'four', 'three', 'nine', 'eleven', 'fifteen'],
    temp : {},
    print : function() {
        for (var i = 0; i < this.a.length; i++) {
            console.log(this.a[i] + " - " + this.b[i]);
        }
        console.log('-----------------------')
    },
    sortByKey : function() {
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
    }
}
arr.sortByKey();
arr.print();



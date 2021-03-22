//задание

//написать игру морской бой
//бот против бота
//класс самой игры когда первый бот ходит когда второй начало игры конец игры
//класс поля с методами инициализация (расположение караблей 4444  333  22  1 что бы знать какой это карабль) поля метод поподания в корабль
//класс бота метод генерирует случ координату имя его (можно сделать память что бы он помнил где ужестрелял)

'use strict'


class Field {
    constructor() {
        this.field = new Array(10);
    }
    makeField() {
        for (let i = 0; i < this.field.length; i++) {
            this.field[i] = new Array(10);
        }
        for (let row = 0; row < this.field.length; row++) {
            for (let col = 0; col < this.field[row].length; col++) {
                this.field[row][col] = 0;
            }
        }
        return this.field;
    }
    checkShips(deck) {
        let ships = [];
        for (let row = 0; row < this.field.length; row++) {
            for (let col = 0; col < this.field[row].length; col++) {
                if (this.field[row][col] == deck) {
                    ships.push(this.field[row][col]);

                }
            }
        }
        return ships.length;
    }
    checkGameShips() {
        let isShips = 1;
        let restShips = [];
        restShips.push(this.checkShips(4));
        restShips.push(this.checkShips(3));
        restShips.push(this.checkShips(2));
        restShips.push(this.checkShips(1));
        let filterShips = restShips.filter(function(x) {return x > 0});
        if (!filterShips.length) {
            isShips = 0;
        }
        return isShips;//если эта функция вернет false то игра должна закончиться
    }
    init() {
        this.field[0][0] = 4;
        this.field[1][0] = 4;
        this.field[2][0] = 4;
        this.field[3][0] = 4;
        this.field[5][5] = 3;
        this.field[4][5] = 3;
        this.field[3][5] = 3;
        this.field[8][2] = 2;
        this.field[8][3] = 2;
        this.field[6][0] = 1;

    }
    printField() {
        console.log('--------------------');
        for (let row = 0; row < this.field.length; row++) {
            let manual = '';
            for (let col = 0; col < this.field[row].length; col++) {
                manual += this.field[row][col] + ' ';
            }
            console.log(manual);
        }
        console.log('--------------------');
    }
    check(x, y) {
        if (this.field[y][x] !== 0) {
            console.log('Ранил');
            if (arguments.length) {
                this.field[y][x] = '-' + this.field[y][x];
            }
            return true;
        } else  {
            console.log('мимо');
            if (arguments.length) {
                this.field[y][x] = '-' + this.field[y][x];
            }
            return false;
        }
    }

}

class Bot {
    constructor(name, age) {
        this.name = name;
        this.age = age;
        this.coordinates = {};
        this.memory = [];
    }
    printData() {
        console.log('*' + this.name +'*');
        //console.log('*' + this.age + ' лет' + '*');
    }
    generateCoordinates() {
        this.coordinates.x = Math.floor(Math.random() * 10);
        this.coordinates.y = Math.floor(Math.random() * 10);
        //console.log(this.coordinates);
    }
    rememberCoordinates() {
        this.memory.push({x: this.coordinates.x, y: this.coordinates.y });
        //console.log(this.memory);
    }
    checkCoordinates() {
        if (this.memory.length) {
            for (let i = 0; i < this.memory.length; i++) {
                if (this.memory[i].x == this.coordinates.x && this.memory[i].y == this.coordinates.y) {
                    //console.log('дважды в одно место');
                    return true;
                }
            }
        }
        console.log(this.coordinates);

    }
    makeShot() {
        this.generateCoordinates();
        if (this.checkCoordinates()) {
            //рекурсия
            this.makeShot();
        }
    }
    makeDobleShot() {
        //если первый раз попал стреляем рядом
        //убил ранил мимо надо прописать каждое положение
    }
}


class Game {
    constructor(firstPlayerName, firstPlayerAge, secondPlayerName, secondPlayerAge) {
        this.field1 = new Field();
        this.field2 = new Field();
        this.player1 = new Bot(firstPlayerName, firstPlayerAge);
        this.player2 = new Bot(secondPlayerName, secondPlayerAge);
    }

    createField1() {
        this.player1.printData();
        this.field1.makeField();
        this.field1.init();
        this.field1.printField();
    }
    createField2() {
        this.player2.printData();
        this.field2.makeField();
        this.field2.init();
        this.field2.printField();
    }
    tossLots() {
        let lot = Math.floor(Math.random() * 2);
        return lot;
    }
    getShot1() {
        this.player1.printData();
        this.player1.makeShot();
        this.player1.rememberCoordinates();
        let isWounded = this.field1.check(this.player1.memory[this.player1.memory.length - 1].x, this.player1.memory[this.player1.memory.length - 1].y);
        this.field1.printField();
        let field1Check = this.field1.checkGameShips();
        if (!field1Check) {
            console.log(' Конец игры игрок ' + this.player1.name + ' выиграл');
            return 1;
        } else if (isWounded) {
            //рекурсия
            this.getShot1();
        }
    }
    getShot2() {
        this.player2.printData();
        this.player2.makeShot();
        this.player2.rememberCoordinates();
        let isWounded = this.field2.check(this.player2.memory[this.player2.memory.length - 1].x, this.player2.memory[this.player2.memory.length - 1].y);
        this.field2.printField();
        let field2Check = this.field2.checkGameShips();
        if (!field2Check) {
            console.log(' Конец игры игрок ' + this.player2.name + ' выиграл');
            return 1;
        } else if (isWounded) {
            //рекурсия
            this.getShot2();
        }
    }

    makeFirstShot() {
        let i;
        if (this.tossLots()) {
            this.getShot1();
            i = 1;
        } else {
            this.getShot2();
            i = 2;
        }
        return i;
    }
    makeAllShots() {
        let i = this.makeFirstShot();
        while (i < 1000) {
            if (i % 2 == 0) {
                let x = this.getShot1();
                if (x === 1) {
                    break;
                }
            } else {
                let x = this.getShot2();
                if (x === 1) {
                    break;
                }
            }
            i++;
        }
    }

}

let newGame = new Game('Петя', 30, 'Вася', 29);

newGame.createField1();
newGame.createField2();
newGame.makeAllShots();



//нужна функция которая будет в случае поподания в 4 палубик стрелять рядом


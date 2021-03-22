
function makeBackground(percentStones) {
    //двумерная матрица
    var background = new Array(10);
    for (var i = 0; i < background.length; i++) {
        background[i] = new Array(10);
    }
    for (var row = 0; row < background.length; row++) {
        for (var col = 0; col < background[row].length; col++) {
            background[row][col] = 0;
        }
    }
    //процент препятствий
    var percent = percentStones;
    var square = background.length * background[1].length;
    var numberOfStones = square * percentStones / 100;
    //рандомное распределение препятствий на матрице
    for (var j = 0; j <= numberOfStones; j++) {
        background[j][Math.floor(Math.random() * background.length)] = 1;
    }
    //рандомное расположение сокровища
    background[Math.floor(Math.random() * (background.length - 1))][Math.floor(Math.random() * (background[1].length - 1))] = '$';
    //возврат из фунции поля с препятствиями и сокровищем
    return background;
}

function printField(someTwoDimensionalArray, y, x) {
    //отрисовка марио на карте
    someTwoDimensionalArray[y][x] = 'X';
    //отрисовка поля в ручном виде
    for (var row = 0; row < someTwoDimensionalArray.length; row++) {
        var manual = '';
        for (var col = 0; col < someTwoDimensionalArray[row].length; col++) {
            manual += someTwoDimensionalArray[row][col] + ' ';
        }
        console.log(manual);
    }
    console.log('-------------------');
}

function moveMario(direction) {
    //алгоритм движения
    switch(direction) {

        case 4:
            if (mario.x <= 0){
                console.log('С-Т-Е-Н-А');
                console.log('--------------------');
                return mario;
            }
            if (backgroundWithStones[mario.y][mario.x - 1] == 1) {
                console.log('П-Р-Е-П-Я-Т-С-Т-В-И-Е');
                console.log('--------------------');
                return mario;
            }
            for (var i = 0; i < lastSteps.length; i++) {
                if (mario.x - 1 === lastSteps[i].x) {
                    console.log('У-Ж-Е Х-О-Д-И-Л Т-У-Д-А');
                    console.log('--------------------');
                    return mario;
                }
            }

            backgroundWithStones[mario.y][mario.x] = 0;

            mario.x--;
        break;

        case 6:
            if (mario.x > backgroundWithStones[1].length - 2){
                console.log('С-Т-Е-Н-А');
                console.log('--------------------');
                return mario;
            }
            if (backgroundWithStones[mario.y][mario.x + 1] == 1) {
                console.log('П-Р-Е-П-Я-Т-С-Т-В-И-Е');
                console.log('--------------------');
                return mario;
            }
            for (var i = 0; i < lastSteps.length; i++) {
                if (mario.x + 1 === lastSteps[i].x) {
                    console.log('У-Ж-Е Х-О-Д-И-Л Т-У-Д-А');
                    console.log('--------------------');
                    return mario;
                }
            }

            backgroundWithStones[mario.y][mario.x] = 0;

            mario.x++;
        break;

        case 2:
            if (mario.y > backgroundWithStones[1].length - 2){
                console.log('С-Т-Е-Н-А');
                console.log('--------------------');
                return mario;
            }
            if (backgroundWithStones[mario.y + 1][mario.x] == 1) {
                console.log('П-Р-Е-П-Я-Т-С-Т-В-И-Е');
                console.log('--------------------');
                return mario;
            }
            for (var i = 0; i < lastSteps.length; i++) {
                if (mario.y + 1 === lastSteps[i].y) {
                    console.log('У-Ж-Е Х-О-Д-И-Л Т-У-Д-А');
                    console.log('--------------------');
                    return mario;
                }
            }

            backgroundWithStones[mario.y][mario.x] = 0;

            mario.y++;
        break;

        case 8:
            if (mario.y <= 0){
                console.log('С-Т-Е-Н-А');
                console.log('--------------------');
                return mario;
            }
            if (backgroundWithStones[mario.y - 1][mario.x] == 1) {
                console.log('П-Р-Е-П-Я-Т-С-Т-В-И-Е');
                console.log('--------------------');
                return mario;
            }
            for (var i = 0; i < lastSteps.length; i++) {
                if (mario.y - 1 === lastSteps[i].y) {
                    console.log('У-Ж-Е Х-О-Д-И-Л Т-У-Д-А');
                    console.log('--------------------');
                    return mario;
                }
            }

            backgroundWithStones[mario.y][mario.x] = 0;

            mario.y--;
        break;
    }
}

function makeRandomButton() {
    //генерация рандомного нажатия кнопки
    var moveButtons = [2, 4, 6, 8];
    var randomButton = moveButtons[Math.floor(Math.random() * moveButtons.length)];
    console.log('Нажата кнопка ' + randomButton);
    return randomButton;
}

function getSteps(value) {
    //счетчик шагов
    var count = 0;

    while (value--) {
        //если функция возвращает значение mario закончить эту итерацию и начать новую
        var cur = moveMario(makeRandomButton());
        if (cur) {
            continue;
        }
        //запоминание последних шагов марио
        lastSteps.unshift({x: mario.x, y: mario.y});
        if (lastSteps.length > 3) {
            lastSteps.length = 3;
        }
        console.log(lastSteps);

        console.log('Координаты Марио:')
        console.log(mario);

        count++;
        console.log(count + "-й" + " шаг");
        //победа
        if (backgroundWithStones[mario.y][mario.x] == '$') {
            console.log('П-О-Б-Е-Д-А');
            break;
        }

        printField(backgroundWithStones, mario.y, mario.x);
    }
}


//***SUPER MARIO***

var backgroundWithStones = makeBackground(5)
var mario = {y : 9, x : 0};
var lastSteps = [];

printField(backgroundWithStones, mario.y, mario.x);
getSteps(100);



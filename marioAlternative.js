
function makeBackground(percentStones) {
    var background = new Array(10);
    for (var i = 0; i < background.length; i++) {
        background[i] = new Array(10);
    }
    for (var row = 0; row < background.length; row++) {
        for (var col = 0; col < background[row].length; col++) {
            background[row][col] = 0;
        }
    }
    var percent = percentStones;
    var square = background.length * background[1].length;
    var numberOfStones = square * 5 / 100;
    for (var j = 0; j <= numberOfStones; j++) {
        background[j][Math.floor(Math.random() * background.length)] = 1;
    }
    background[Math.floor(Math.random() * (background.length - 1))][Math.floor(Math.random() * (background[1].length - 1))] = '$';
    return background;
}
function printField(someTwoDimensionalArray, y, x) {
    someTwoDimensionalArray[y][x] = 'x';
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
    switch(direction) {
        case 4:
            if (mario.x <= 0){
                console.log('С-Т-Е-Н-А');
                return;
            }
            if (backgroundWithStones[mario.y][mario.x - 1] == 1) {
                console.log('П-Р-Е-П-Я-Т-С-Т-В-И-Е');
                return;
            }
            backgroundWithStones[mario.y][mario.x] = 0;
            mario.x--;
        break;

        case 6:
            if (mario.x > backgroundWithStones[1].length - 2){
                console.log('С-Т-Е-Н-А');
                return;
            }
            if (backgroundWithStones[mario.y][mario.x + 1] == 1) {
                console.log('П-Р-Е-П-Я-Т-С-Т-В-И-Е');
                return;
            }
            backgroundWithStones[mario.y][mario.x] = 0;
            mario.x++;
        break;

        case 2:
            if (mario.y > backgroundWithStones[1].length - 2){
                console.log('С-Т-Е-Н-А');
                return;
            }
            if (backgroundWithStones[mario.y + 1][mario.x] == 1) {
                console.log('П-Р-Е-П-Я-Т-С-Т-В-И-Е');
                return;
            }
            backgroundWithStones[mario.y][mario.x] = 0;
            mario.y++;
        break;

        case 8:
            if (mario.y <= 0){
                console.log('С-Т-Е-Н-А');
                return;
            }
            if (backgroundWithStones[mario.y - 1][mario.x] == 1) {
                console.log('П-Р-Е-П-Я-Т-С-Т-В-И-Е');
                return;
            }
            backgroundWithStones[mario.y][mario.x] = 0;
            mario.y--;
        break;

    }
    return mario;
}
function makeRandomButton() {
    var moveButtons = [2, 4, 6, 8];
    var randomButton = moveButtons[Math.floor(Math.random() * moveButtons.length)];
    console.log('Нажата кнопка ' + randomButton);
    return randomButton;
}
function getRandomSteps(value) {
    while (value--) {
        moveMario(makeRandomButton());
        console.log(mario);
        if (backgroundWithStones[mario.y][mario.x] == '$') {
            console.log('П-О-Б-Е-Д-А');
            break;
        }
        printField(backgroundWithStones, mario.y, mario.x);
    }

}
function saveStep() {
    lastStep.y = mario.y;
    lastStep.x = mario.x;
    console.log(lastStep);
}
function compareSteps() {

    for (var i = 0; i <= lastSteps.length; i++) {
        if (backgroundWithStones[mario.y] == lastSteps[i].y &&
            backgroundWithStones[mario.x] == lastSteps[i].x) {
            return;
        }
    }
}


var backgroundWithStones = makeBackground(5)
var mario = {y : 9, x : 0};
var lastStep = {};
printField(backgroundWithStones, mario.y, mario.x);
//getRandomSteps(100);
saveStep();
moveMario(6);
printField(backgroundWithStones, mario.y, mario.x);
//getRandomSteps(100);
saveStep();


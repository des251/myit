//node js

//1й вариант запуска приложения из файла
//$ node hello.js Hello world
//через терминал

//2й способ без файла сразу из консоли
//$node 1 + 1
//process.exit(0)


//массив строк который позволяет прочитать входные параметры при запуске программы через ноду
//process.argv

//$node showargv.js one --and two
//['node', showrgv.js, 'one', '--and', 'two']


//Модульность

//В ноде используется система модульности CommonJS которая базируется на функции require
//основная функция require найти файл на жестком диске чтобы подгрузить в наше приложение / ./ ../
// / рутовый каталог
// ./ по всей папке в которой он лежит
// ../ на каталог выше
//если не будет расширени яфайла нод сам добавит его
//если такого файла не существует он будет этот graph расматривать как каталог в котором он будет искать index.js

//если вдруг инфа для require не выглядит как абсолютный или относительный путь то нод пытается найти соответствия в встроенных модуляз built-in modules
//или в  node_modules directory


//npm

//тулза которая

//к npm прикладываем package.json
//npm install  установит те файлы которые описаны в package.json в свойстве dependences
//2.3.0
//1 каждый раз когда добавляется новая функциональность изменяется вторая цифра
//2 каждый раз когда внесенные изменнеия приводят к несовместимости с предидущими версиями изменяется первая цифра
//3 незначительные изменнеиия третья цифра
//^ - говорит о том что можно использовать до изменения первой цифры

//нод позволяет работать с файловой системой
//fs module для этого используется
//он экспортирует функции связанные с работой с файломи и директориями

let {readFile} = require('fs');
readFile("file.txt", "utf8", (error, text) => {//если фторого аргумента не задоно значит бинарный файл
    if (error) throw error;
    console.log("THe file contains: ", text);
});

let {readFile} = require('fs');
readFile("file.txt", (error, buffer) => {//если фторого аргумента не задоно значит бинарный файл
    if (error) throw error;
    console.log("THe file contains: " + buffer.length + 'bytes'+ 'the first file is: ' + buffer[0]);
});


//readdir -возвращает файлы директории как массив строк
//stat -
//unlink - удаление
//есть промисы в последней версии


//http модуль

/////////////////////////////////////////

//войти в режим node через консоль просто в консоли написать node и ентер
//что бы выйти из этого режима ctrl + c 2 раза

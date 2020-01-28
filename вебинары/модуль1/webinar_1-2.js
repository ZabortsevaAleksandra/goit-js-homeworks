'use strict'

// const number = 20.5; //объявляем число

// const name = 'mango'; //объявляем текст

// const isActive = true; //флаг, буль: могут содержать только один из двух значений - вопрос на который можно ответить true или false.були: is,can, has

// const hasChildHodes = false;

//узнать тип значения переменной используя оператор typeof//
// const type = typeof number;
// console.log(type);

//=====================
// alert(555); //alert-вывод данных. при alert не выполняется consol.log//

// confirm('HELLO!')//ПОЛУЧЕНИЕ ДАННЫХ. выводит окно с сообщением и двумя кнопками "да"(true) "отмена"(false). возвращает значение.//

// const isGoing = confirm('HELLO!'); //вылетает окно с сообщением и кнопками для ответа//
// console.log(isGoing); //вывод инфо про результат ответа (выводит в консоли)//

//получить ответ пользователя с вводом информации PROMPT//

// const input = prompt('введите имя!');
// console.log(input); //(typeof input); - проверка значения переменной//

//========

//математические операторы

// const number = 2 + 2 * 3;
// console.log(number);



//сравнение
// const a = 5;
// const b = 10;
// const result = a > b; //-при  верном неравенстве выведет true, false -при неверном
// console.log(result);

//=====ДЛЯ СТРОК

// const a = 'qwe';
// const b = 'zxc';
// const result = a < b; //-при  верном неравенстве выведет true, false -при неверном
// console.log(result);

//======

// const a = 5 + 65;
// const b = 10 + a;
// const result = a > b; //-при  верном неравенстве выведет true, false -при неверном
// console.log(b);

// циклы.промежутки


// const min = 10;
// const max = 30;


// const number = 15; //проверить влазиет ли в диапазон

// const isNumberInRange = number > 10 && number < 30;
// console.log(isNumberInRange);

//====

// console.log(0 === '0'); //строгое равенство
//=====

// console.log(0 !== '0'); //строгое неравенство

//============================================

// числа.строки

// let input = prompt('Угадай число от 1 до 10');

// input = Number(input); // преобразование строки в число
// const isCorrect = input >= 1 && input <= 10;
// console.log(isCorrect);
// console.log(input); //выведет значение
// console.log(typeof input); // покажет тип сначения (строка\число)

//======полустоки\получисла (пиксели, напр)

// const boxWidthInPx = '25px';

// const width = Number.parseInt('25px'); //отыскивает числа слева на право от первой цифры и до первой буквы после первой цифры/группы цифр

// console.log(width);

// //===

// const boxWidthInPx = '25px';

// const width = Number.parseFloat('25px'); //в поиск включаются точки, можно выбрать дробное значение (напр.1,5)

// console.log(width);

//============

// let input = prompt('Угадай число от 1 до 10');

// input = Number(input); // преобразование строки в число
// const isCorrect = input >= 1 && input <= 10;
// console.log(isCorrect);
// console.log(input); //выведет значение
// console.log(typeof input); // покажет тип сначения (строка\число)


//проверка на число true - если NAN, false-усли не NAN

// let input = prompt('Угадай число от 1 до 10');
// console.log('input перед преобразованием: ', input); // будет строка из символа 5 (в консоле черным)

// input = Number(input); // преобразование строки в число

// const isNaN = Number.isNaN(input);

// console.log('input после преобразования: ', input); //будет число 5 (в консоле синим)

// console.log('isNaN?: ', isNaN)
// const isCorrect = input >= 1 && input <= 10;

//============== сложение чисел с плвающей точкой
// console.log(0.3 === 0.2 + 0.1); // ответ будет 0,300000000000004, равенство неверное

// console.log((0.2*10+0.1*10)/10); //приводим к целым значениям для правильновычисления, и в конце опять делим на общий знаменатель


//====Math

// console.log(Math);

// сшивание строк и чисел . число будет числом до первого "не Числа"
// console.log(5 + '6'); //'56'
// console.log(5 + 5 + '6'); //'106'=5+5+'6'=10+'6'
// console.log('1' + 5 + 5 + '6'); //'1' + 5 + 5 + '6' = '15' + 5 + '6' = '1556'


// console.log('qwe'+5); //qwe5

// console.log(5*'6');//30 при всех мат занках, кроме + будет чило, при плюсе-строка

const name = 'Mango';
const inUpperCase = name.toUpperCase();
const inLowerCase = name.toLowerCase();

console.log(inUpperCase);
console.log(inLowerCase);
console.log(string);
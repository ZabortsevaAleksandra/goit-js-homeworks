'use strict';

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

// const string = "Mango";
// const inUpperCase = string.toUpperCase();
// const inLowerCase = string.toLowerCase();

// console.log(inUpperCase);
// console.log(inLowerCase);
// console.log(string);

//====
// const title = "Mango java";
// const inUpperCase = title.toUpperCase();
// const inLowerCase = title.toLowerCase();

// console.log(inUpperCase);
// console.log(inLowerCase);
// console.log(title);

// console.log(title.includes("java"));

//===== пример поиска по товарам

// const productTitle = "Samsung is cool";

// const seachString = "Sams";

// const passed = productTitle
//   .toLocaleLowerCase()
//   .includes(seachString.toLowerCase()); // можно записать как: const searchStringInLC=searchString.toLowerCase(); const passed=titleInLC.includes(searchStringInLC);

// console.log(passed);

//====== из переменных составить строку опрделенного формата (шаблоны)

//`````````ШАБЛОН

// const name = "Mango";
// const age = 18;

// const message = `My name is ${name}, I'm ${age} years old`;

// console.log(message);

//=====

// const date = 10;
// const month = 3;
// const year = 1800;

// console.log(`${date}\\${month}\\${year}`);

//questions

// if (userChoice !== null && userChoice !== "");

//==БУЛИ/ФЛАГИ

//логические операторы

//&

// const min = 10;
// const max = 30;
// const value = 5;
// // console.log(value >=10); //самое простое

// //проверяем попадает ли значение 25 между 10 и 30

// const isRange = value >= 10 && value <= 30; // true or false

// console.log(isRange);

//======||

// const min = 10;
// const max = 30;
// const value = 25;
// const isRange = value < 10 || value > 30;

// console.log(isRange);
//&& "И"- возвращает значение первого false,true - это когда все верное, все
// || "ИЛИ" - возвращае первое правильное, соответствующее условию, значение
// not(!) - не true зна

// =====if=====ветвления
// const min = 10;
// const max = 30;
// const value = 25;
// const isRange = value < 10 && value > 30;
// console.log(isRange);

// if (true) {
//   console.log('yes');
// }

// console.log('after if');

// if (isRange) {
//   console.log('yes');
// }
// console.log('after if');

//===if==else
// const min = 10;
// const max = 30;
// const value = 25;
// const isRange = value < 10 && value > 30;

// if (isRange) {
//   console.log('super');
// } else {
//   console.log('hello!');
// }

//==========

// const min = 10;
// const max = 30;
// const value = 25;

// let message;
// const isRange = value < 10 && value > 30;

// if (isRange) {
//   message = 'super';
// } else {
//   message = 'hello!';
// }

// console.log(message);

//===else===if
// const min = 10;
// const max = 30;
// const value = 25;

// let message;

// if (value < 10) {
//   message = 'true';
// } else if (value < 20 && value < 45) {
//   message = 'true true';
// } else if (value > 50 || value < 26) {
//   message = 'true the best';
// } else {
//   message = ':(';
// }

// console.log(message);

//=============//тернарный оператор: const переменная=условие?опция1:опция2ж

// const isActive = true;

// let message;

// if (isActive) {
//   message = 'Active';
// } else {
//   message = 'InActive';
// }
// console.log(message);
// ЛУЧШЕ ЭТОТ ЖЕ РЕЗУЛЬТАТ ПОЛУЧИТЬ ЧЕРЕЗ ТЕРНАРНЫЙ ОПЕРАТОР:

//=====
// const isActive = true;
// const message = isActive ? 'Active' : 'InActive!';
// console.log(message);

//==========Switch====
// const TAKEOUT = 0;
// const COURIER = 1;
// const POST = 2;

// const userChoise = 4;
// let message;

// if (userChoise === TAKEOUT) {
//   message = 'Забирай';
// } else if (userChoise === COURIER) {
//   message = 'Super';
// } else if (userChoise === POST) {
//   message = 'жди';
// } else {
//   message = 'Сделайте выбор';
// }

// console.log(message); //все заменим на SWITCH

const TAKEOUT = 0;
const COURIER = 1;
const POST = 2;

const promptlabel = `Выбери способ доставки: ${TAKEOUT} - самовывоз, ${COURIER} - курьер, ${POST} - почта`; //текст в всплывающее окно

let userChoise = prompt(promptlabel); // всплывающее окно
let message;

if (userChoise === null) {
  message = 'попробуйте еще раз';
} else {
  userChoise = Number(userChoise);

  switch (userChoise) {
    case TAKEOUT:
      message = 'Забирай';
      break;

    case COURIER:
      message = 'Super';
      break;

    case POST:
      message = 'жди';
      break;

    default:
      message = 'Сделайте выбор';
  }
}

console.log(message);

// switch (userChoise) {
//   case TAKEOUT:
//     message = 'Забирай';
//     break;

//   case COURIER:
//     message = 'Super';
//     break;

//   case POST:
//     message = 'жди';
//     break;

//   default:
//     message = 'Сделайте выбор';
// }

// console.log(message);

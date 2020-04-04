'use strict';

//-5-//

//*Пользователь может оформить доставку товара к себе в страну,
// указав ее при посещении страницы в prompt. Учти, пользователь
// может ввести имя страны не только буквами нижнего регистра,
// а к примеру 'кИтАЙ'.

// Напиши скрипт который выводит сообщение о стоимости доставки
// в указанную страну. Обязательно используй switch. Формат сообщения:
// 'Доставка в [страна] будет стоить [цена] кредитов'.

// Но доставка есть не везде, если указанной страны нет в списке,
// то выводи в alert сообщение 'В вашей стране доставка не доступна'.

// Ниже приведен список стран и стоимость доставки.

// Китай - 100 кредитов
// Чили - 250 кредитов
// Австралия - 170 кредитов
// Индия - 80 кредитов
// Ямайка - 120 кредитов

let message;

let country = prompt('Введите страну.'); // китай

if (country === null) {
  alert('Отменено пользователем!');
} else {
  switch (country.toUpperCase()) {
    case 'КИТАЙ': // китай === КИТАЙ
      message = 'Доставка в Китай будет стоить 100 кредитов';
      break;

    case 'ЧИЛИ':
      message = 'Доставка в Чили будет стоить 250 кредитов';
      break;

    case 'АВСТРАЛИЯ':
      message = 'Доставка в Австралию будет стоить 170 кредитов';
      break;

    case 'ИНДИЯ':
      message = 'Доставка в Индию будет стоить 80 кредитов';
      break;

    case 'ЯМАЙКА':
      message = 'Доставка на Ямайку будет стоить 120 кредитов';
      break;

    default:
      message = 'В вашей стране доставка не доступна';
  }
}
console.log(message);
'use strict';
//-3-//

// Напиши фукцнию findLongestWord(string), которая принимает
//  параметром произвольную строку (в строке будут только слова
//     и пробелы) и возвращает самое длинное слово в этой строке.

const findLongestWord = function(string) {
  let arrString = string.split(' ');
  let wordLength = 0;
  let longestWord;

  for (let i = 0; i < arrString.length; i++) {
    wordLength = arrString[1].length;

    if (arrString[i].length > wordLength) {
      longestWord = arrString[i];

      return longestWord;
    }
  }
};

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
console.log(findLongestWord('The quick brown fox jumped over the lazy dog')); // 'jumped'

console.log(findLongestWord('Google do a roll')); // 'Google'

console.log(findLongestWord('May the force be with you')); // 'force'

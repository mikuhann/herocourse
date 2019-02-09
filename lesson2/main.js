// Дана строка 'I am in the easycode' Сделать первые буквы каждого слова в верхнем регистре.
let string = 'I am in the easycode';
let otherString = '';
for (let i = 0; i < string.length; i++) {
  if (string[i - 1] === ' ') {
    otherString += string[i].toUpperCase();
    continue;
  }
  otherString += string[i];
}
console.log(otherString);
// Дана строка 'tseb eht ma i'.Перевенуть строку с помощью циклов.
let string1 = 'tseb eht ma i';
let reversedString = '';
for (let i = string1.length - 1; i >= 0; i--) {
  reversedString += string1[i];
}
console.log(reversedString);
// Факториал числа
let a = 10;
let factorial = 1;
for (let i = a; i >= 1; i--) {
  factorial *= i;
}
console.log(factorial);
// Используя циклы, создать строку "Считаем до: переменная;
let countString = `Считаем до:`;
let b = 10;
for (let i = 1; i <= b; i++) {
  countString += ` ${i},`;
}
console.log(countString.slice(0, -1));
// На основе строки "JavaScript is a pretty good language" сделать строку без пробелов и каждое слово с большой буквы
let string2 = 'JavaScript is a pretty good language';
let trimString = '';
for (let i = 0; i < string2.length; i++) {
  if (string2[i] === ' ') {
    trimString += string2[i + 1].toUpperCase();
    i++;
    continue;
  }
  trimString += string2[i];
}
console.log(trimString);
// найти все нечетные числа с 1 до 15 включительно и вывести их в консоль
for (let i = 1; i <= 15; i++) {
  if (i % 2 === 1) {
    console.log(i);
  }
}
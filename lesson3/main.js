// Создать функцию, которая будет принимать любое кол-во аргументов и возвращать их произведение.
function multiply() {
  if (arguments.length === 0 ) return 0;
  let result = 1;
  for (let i = 0; i < arguments.length; i++) {
    result *= arguments[i];
  }
  return result;
}
// Факториал числа через рекурсию
function factorial(n) {
  if (n === 1) return n;
  return n *= factorial(n - 1);
}
// Функция, которая переворачивает строку
function reverseString(str) {
  let reversedString = '';
  for (let i = str.length - 1; i >= 0; i--) {
    reversedString += str[i];
  }
  return reversedString;
}
// Функция, которая в качестве аргумента принимает строку из букв, а возвращает строку с пробелом,
// где каждый символ заменен юникод значением символа
function getCodeStringFromText(str) {
  let codeString = '';
  for (let i = 0; i < str.length; i++) {
    codeString += `${str.charCodeAt(i)} `;
  }
  return codeString.slice(0, -1);
}
// Написать функцию - рекурсию, которая выводит каждый символ строки в консоль
function printChars(str, n = 0) {
  if (n === str.length - 1) return str[n];
  return `${str[n]} \n`+ printChars(str, n + 1);
}
// создать две функции: первая принимает массив и колбек, вколбек обрабатывает каждый элемент массива
function firstFunc(arr, callback) {
  let resultString = '';
  for (let i = 0; i < arr.length; i++) {
    resultString += callback(arr[i]);
  } 
  return `New value: ${resultString}`;
}
function upperCaseFirstLetter(str) {
  return str[0].toUpperCase() + str.slice(1);
}
function multiplyToTen(value) {
  return ` ${value * 10},`;
}
function info(obj) {
  return `${obj.name} is ${obj.age}, `;
}
function reverse(val) {
  let reversed = '';
  for (let i = val.length - 1; i >= 0; i--) {
    reversed += val[i];
  }
  return `${reversed}, `;
}
function addFive(val) {
  return `${val + 5}, `
}
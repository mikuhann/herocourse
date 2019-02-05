// Получить первую и последнюю буквы строки.
let string = 'some test string';
console.log(`first letter is: ${string[0]}.last letter is: ${string[string.length -1]}`);
// Сделать первую и последнюю буквы в верхнем регистре
console.log(`${string[0].toUpperCase() + string.slice(1, string.length - 1) + string[string.length - 1].toUpperCase()}`);
// Найти положение слова 'string' в строке
console.log(string.indexOf('string'));
// Найти положение второго пробела
console.log(string.lastIndexOf(' '));
// Получить строку с 5ого символа длиной 4 буквы
console.log(string.substr(5, 4));
// Получит ьстроку с 5ого по 9тый символы
console.log(string.slice(5, 9));
// Получить новую строку из исходной путем удаления последних 6ти символов
console.log(string.slice(0, -6));
// из двух переменных a = 20, b = 19 получить переменную, в которой будет содержаться строка '2019'
let a = 20, b = 19;
console.log(a.toString() + b);
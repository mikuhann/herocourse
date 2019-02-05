// String
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
// Number
// получить число pi из Math и округлить его до 2-ух знаков после точки
console.log(Math.PI.toFixed(2));
// Используя Math, найти максимальное и минимальное числа из ряда 15, 11, 16, 12, 51, 12, 13, 51
console.log(Math.max(15, 11, 16, 12, 51, 12, 13, 51));
console.log(Math.min(15, 11, 16, 12, 51, 12, 13, 51));
// Math.random: получить случайное число и округлить его до двух цифр после запятой, получить случайное число от 0 до x
console.log(Math.random().toFixed(2));
console.log(Math.random() * 10);
// сделать корректным 0.6 + 0.7
console.log(((0.6 * 10) + (0.7 * 10)) / 10);
// Получить число из строки '100$'
console.log(parseInt('100$'));
// Obj
// создать объект product с полем, равным iphone;
const phone = {
  product: 'iphone',
};
// Добавить поля price = 1000 и currency = 'dollar'
phone.price = 1000;
phone.currency = 'dollar';
// добавить поле details, которое будет содержать объект с полями model и color
phone.details = {};
phone.details.model = '10';
phone.details.color = 'red';
console.log(phone);
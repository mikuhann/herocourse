// создать функцию, которая принимает массив, а возвращает новый с дублированнымим элементами входного
function doubleArray(arr) {
  return arr.concat(arr);
}
// Получить последний элемент массива, использовать функцию, массив не менять
function lastElementOfArr(arr) {
  return arr[arr.length - 1];
}
// Создать функцию, которая принимает число и возвращает массив, который заполнен числами от 1 до этого числа
function getArrayToNum(num) {
  let arrayToNum = [];
  for (let i = 1; i <= num; i++) {
    arrayToNum.push(i);
  }
  return arrayToNum;
}
// Создать функцию, которая принимат произвольное число массивов и удаляет из каждого массива первый и возвращает
// массив оставшихся значений.
function changeCollection() {
  let changedArr = [];
  for (let i = 0; i < arguments.length; i++) {
    arguments[i].shift();
    changedArr.push(arguments[i])
  }
  return changedArr;
}
// дана произвольная строка 'bcdaeflmjgkhi'.Упорядочить буквы по альфавиту и вернуть строку с буквами в обратном порядке
// Оформить в виде функции.
function sortAndReverseStr(str) {
  let sortedAndReversedArr = [],
      reversedStr = '';
  for (let i = 0; i < str.length; i++) {
    sortedAndReversedArr.push(str[i]);
  }
  sortedAndReversedArr.sort().reverse();
  for (let i = 0; i < sortedAndReversedArr.length; i++) {
    reversedStr += sortedAndReversedArr[i];
  }
  return reversedStr;
}
// отсортировать массив в обратном порядке  [2, 4, 7, 1, -2, 10, -9]
let numArr = [2, 4, 7, 1, -2, 10, -9];
function compareArr(prev, next) {
  return next - prev;
}
function reverseSortArr(arr) {
  return arr.sort(compareArr);
}
// Написать функцию, которая принимает три агрумента: произвольный массив и 2 числа - первое - начальный номер эл-та в
// массиве, а второй конечный номер.Вернуть массив состоящий из элементов первой коллекции согласно переданым числам
function getArrayFromArray(arr, firstElement, lastElement) {
  return arr.slice(firstElement, lastElement + 1);
}
let arr = [1, 2, 3, 4, 5];
// удалить второй и третий элементы массива
arr.splice(2, 2);
console.log(arr);
let newArr = [1, 2, 3, 4, 5];
// Удалить второй и третий элементы и на их место вставить 'three', 'four'
newArr.splice(2, 2, 'three', 'four');
console.log(newArr);
// Вставить в произвольный массив после третьего элемента переданное значение
function incertNewElement(arr, el) {
  return arr.splice(3, 0, el);
}
// Отсортируйте массив массиво так, что бы вначале располагались наименьшие массивы.
let arrayOfArrays = [[1],[2,3,4], [4,4], [1, 2, 3, 4, 5, 6]];
function sortArrays(arr) {
  return arr.sort((prev, next) => prev.length - next.length);
}
// есть массив объектов
let productsArray = [
  {cpu: 'intel', info: {cores: 2, cache: 3}},
  {cpu: 'intel', info: {cores: 4, cache: 3}},
  {cpu: 'amd', info: {cores: 1, cache: 3}},
  {cpu: 'intel', info: {cores: 3, cache: 3}},
  {cpu: 'amd', info: {cores: 4, cache: 3}},
];
// отсориторвать по взорастающему кол-ву ядер
console.log(productsArray.sort((prev, next) => prev.info.cores - next.info.cores));
// создать функцию, котоаря будет принимать массив продуктов и две цены.Функция должна вернуть все продукты в указанном
// диапахоне и отсортировать их от дешевых к дорогим.
let products = [
  {title: 'prod1', price: 5.2}, {title: 'prod2', price: 0.18},
  {title: 'prod3', price: 15}, {title: 'prod4', price: 25},
  {title: 'prod5', price: 18.9}, {title: 'prod6', price: 8},
  {title: 'prod7', price: 19}, {title: 'prod2', price: 63}
];
function filterProducts(arr, minPrice, maxPrice) {
  let filteredProducts = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].price >= minPrice && arr[i].price <= maxPrice) {
      filteredProducts.push(arr[i]);
    }
  }
  return filteredProducts.sort((prev, next) => prev.price - next.price);
}
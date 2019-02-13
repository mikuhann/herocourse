// Создать функцию, которая принимает 2 элемента.Она проверяет является ли первый элемент родителем для второго
function isParent(firstElement, secondElement) {
  return !!document.querySelector(firstElement).closest(secondElement);
}
// получить список всех ссылок, которые не находятся внутри списка ul
let links = document.links;
for (let i = 0; i < links.length; i++) {
  if (links[i].matches('ul li a')) {
    continue;
  }
  console.log(links[i]);
}
// найтй элемент, который находится перед и после списка ul
let list = document.querySelector('ul');
console.log(list.previousElementSibling);
console.log(list.nextElementSibling);
// посчитать кол-во элементов li в списке
console.log(list.children.length);
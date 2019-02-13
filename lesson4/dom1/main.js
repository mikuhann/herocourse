// получть в колнсоль head
console.log(document.head);
// body
console.log(document.body);
// все дочерние элементы body и вывести их в консоль
for (let i = 0; i < document.body.children.length; i++) {
  console.log(document.body.children[i]);
}
// первый div и: 1) все его дочерние узлы 2) все дочерние узлы, кроме первого и последнего
console.log(document.body.firstElementChild);
let firstDiv = document.body.firstElementChild;
for (let i = 0; i < firstDiv.children.length; i++) {
  if (firstDiv.children[i] === firstDiv.firstElementChild || firstDiv.children[i] === firstDiv.lastElementChild) {
    continue;
  }
  console.log(document.body.firstElementChild.children[i]);
}

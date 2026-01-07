// 1 - movendo-se pelo DOM

console.log(document.body);

console.log(document.body.childNodes[1]);

console.log(document.body.childNodes[1].childNodes[1]);

console.log(document.body.childNodes[1].childNodes[1].textContent);

// 2 - selecionando por tag     

const listItens = document.getElementsByTagName("li");

console.log(listItens);

// 3 - Selecionando por id

const title = document.getElementById('title');

console.log(title);

// 4 - selecionando por class name

const product = document.getElementsByClassName('product');

console.log(product);

// 5 - selecionando os elementos por CSS

const productsQuery = document.querySelectorAll(".product");

console.log(productsQuery);

const mainContainer = document.querySelector("#main-container");

console.log(mainContainer);

// 6 - insertBefore

const p = document.createElement('p');

console.log(p);

const header = title.parentElement;

header.insertBefore(p, title);
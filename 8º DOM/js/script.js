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

// 7 - appendChild

const navlinks = document.querySelector('nav ul');

const li = document.createElement('li');

navlinks.appendChild(li);

// 8 - replaceChild

const h2 = document.createElement("h2");

h2.textContent = "Meu novo titulo";

header.replaceChild(h2, title);

// 9 - createTextNode 

const myText = document.createTextNode("Este é mais um titulo!");

console.log(myText);

const h3 = document.createElement("h3");

h3.appendChild(myText);

mainContainer.appendChild(h3);

// 10 - trabalhando com atributos

const firtLink = navlinks.querySelector("a");

console.log(firtLink);

firtLink.setAttribute("href", "https://www.google.com");

console.log(firtLink.getAttribute("href"));

firtLink.setAttribute("target", "_blank");

// 11 - altura e largura

const footer = document.querySelector("footer");

console.log(footer.offsetWidth);
console.log(footer.offsetHeight);

console.log(footer.clientWidth);
console.log(footer.clientHeight);

// 12 - Posição do elemento

const product1 = product[0];
console.log(product1.getBoundingClientRect());

// 13 - CSS com JS

mainContainer.style.color = "red";
mainContainer.style.backgroundColor = "#333";
mainContainer.style.paddingBottom = "15px";

// 14 - Alterando estilos de varios elementos

for (const li of listItens) {
    li.style.backgroundColor = "red";
}
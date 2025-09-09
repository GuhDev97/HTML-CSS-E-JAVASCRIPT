// 1 - arrays 
const lista = [1, 2, 3, 4, 5];
console.log(lista);
console.log(typeof lista);

const itens = ["Gustavo", true, 2, 4.12, []];
console.log(itens);

// 2 - mais sobre arrays
const arr = [1, 2, 3, 4, 5];
console.log(arr[3]);
console.log(arr[2]);

// 3 - propriedades
const numbers = [5, 3, 4];
console.log(numbers.length);

console.log(numbers["length"]);

const myName = "Gustavo";
console.log(myName.length);

// 4 - métodos
const otherNumbers = [1, 2, 3];
const allNumbers = numbers.concat(otherNumbers);
console.log(allNumbers);

const text = "algum texto";
console.log(text.toUpperCase());
console.log(typeof text.toUpperCase());
console.log(text.indexOf("g"));

// 5 - objetos
const person = {
    name: "Gustavo",
    age: 27,
    job: "Programador",
};

console.log(person);
console.log(person.name);

console.log(person.name.length); 
console.log(typeof person);

// 6 - Criando e deletando propriedades
const humano = {
    tamanho: 1.75,
    idade: 27,
    peso: 78,
    nome: "Gustavo",
    forca: 92,
};
console.log(humano);

delete humano.forca;

console.log(humano);

// 7 - mais sobre objetos
const obj = {
    a: "teste",
    b: true,
};

// console.log(obj instanceof Object);

const obj2 = {
    c: [],
};

Object.assign(obj2, obj);

console.log(obj2);

console.log(obj);


// 8 - conhecendo melhor os objetos
console.log(Object.keys(obj));
console.log(Object.keys(obj2));
console.log(Object.keys(humano));

console.log(Object.entries(humano));

// 9 - mutação
const a = {
    name: "Matheus",
};

const b = a;

console.log(a);
console.log(b);

console.log(a === b);

a.age = 31;

console.log(a);
console.log(b);

delete b.age;

console.log(a);
console.log(b);

// 10 - loop em array 

const users = ["Gustavo", "João", "Pedro", "Miguel"];

for (let i = 0; i < users.length; i++) {
    console.log(`Listando o usuário: ${users[i]}`);
}

// 11 - push e pop

const array = ["a", "b", "c"];

array.push("d");

console.log(array);

console.log(array.length);

array.pop();

console.log(array);

const itemRemovido = array.pop();

console.log(itemRemovido);

console.log(array);

array.push("z", "x", "y");

console.log(array);

// 12 - shift e unshift

const letters = ["a", "b", "c"];

const letter = letters.shift();

console.log(letter);

console.log(letters);

letters.unshift("p", "q", "r");

letters.unshift("z");

console.log(letters);

// 13 - indexOf e lastindexOf

const myElements = ["Morango", "Maça", "Abacate", "Pêra", "Abacate"];

console.log(myElements.indexOf("Maça"));
console.log(myElements.indexOf("Abacate"));

console.log(myElements[2]);
console.log(myElements[myElements.indexOf("Abacate")]);

console.log(myElements.lastIndexOf("Abacate"));

console.log(myElements.indexOf("Mamão"));
console.log(myElements.lastIndexOf("Mamão"));


// 14 - slice

 const testeSlice = ["a", "b", "c", "d", "e", "f"];

 const subArray = testeSlice.slice(2, 4);

 console.log(subArray);

 console.log(testeSlice);

 const subArray2 = testeSlice.slice(2, 4 + 1);
 console.log(subArray2);

 const subArray3 = testeSlice.slice(10, 20);

 console.log(subArray3);

 const subArray4 = testeSlice.slice(2);

 console.log(subArray4);

 // 15 - foreach
 const nums = [1, 2, 3, 4, 5];

 nums.forEach((numero) => {
    console.log(`O número é ${numero}`);
 });

 const posts = [
    { title: "Primeiro post", category: "PHP" },
    { title: "Segundo post", category: "JavaScript" },
    { title: "Terceiro post", category: "Python" },
 ];

 posts.forEach((post) =>{
    console.log(`Exibindo post: ${post.title}, da categoria: ${post.category}`);
 });

 // 16 - includes
const brands = ["BMW", "VW", "Fiat"];

console.log(brands.includes("Fiat"));

console.log(brands.includes("KIA"));
    
if (brands.includes("BMW")) {
    console.log("Há carros da marca BMW!");
}

// 17 - reverse

const reverseTest = [1, 2, 3, 4, 5];

reverseTest.reverse();

console.log(reverseTest);



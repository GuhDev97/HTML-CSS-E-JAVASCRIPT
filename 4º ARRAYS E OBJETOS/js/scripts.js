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


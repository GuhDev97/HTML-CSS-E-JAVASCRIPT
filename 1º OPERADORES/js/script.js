// 1 - Number
console.log(2);
console.log(typeof 2);
console.log(typeof 5.14);
console.log(typeof -127);

//2 - Ops.aritméticas
console.log(2 + 4);
console.log(10 - 5);
console.log(5 * 4);
console.log(10 / 2);

console.log(5 + 4 * 2);

//3 - Special numbers
console.log(typeof Infinity);

console.log(typeof -Infinity);

console.log(12 * "asd");

console.log(typeof NaN);

//4 - STRINGS 
console.log("Um texto");
console.log(`Mais um texto`);

//5 - Simbolos especiais em string
console.log("Testando a \n quebra de linha");

console.log("Espaçamento \t de tab");

//6 - Concactenação
console.log("Oi, " + "tudo" + "bem?");
console.log(`testando ` + `Com ` + `crase!`); 

// 7 - Template Strings
console.log(`A soma de 2 + 2 é: ${2 + 2}`);

console.log(`Podemos executar qualquer coisa aqui ${console.log("teste")}`);

// 8 - Boolean
console.log(true);
console.log(false);
console.log(5 > 20);
console.log(30 > 10);

// 9 - Comparações
console.log(5 <= 5);
console.log(5 < 5);
console.log(10 == 10);
console.log(10 == 9);

// 10 - Idêntico
console.log(9 == "9");

console.log(9 === "9");

console.log(9 != "9");

console.log(9 !== "9");

// 11 - Operadores

console.log(true && true);
//verdadeiro
console.log(true && false);
//falso
console.log(5 > 2 && 2 < 10);
//verdadeiro
console.log(5 > 2 && "Matheus" === 1);
//falso
console.log(5 > 2 || "Matheus" === 1);
//verdadeiro
console.log(5 < 2 || 5 > 100);
//falso
console.log(!true);
//falso
console.log(!5 > 2);
//falso

// 12 - empty values
console.log(typeof null, typeof undefined);

console.log(null === undefined);
//falso
console.log(null == undefined);
//verdadeiro
console.log(null == false);
//falso
console.log(undefined == false);
//falso
let texto = "JavaScript";
console.log(texto.charAt(4));

let frase1 = "O gato subiu no telhado e depois pulou.";
console.log(frase1.indexOf("gato"));
console.log(frase1.lastIndexOf("pulou"));

let palavra = "abcdefgh";
console.log(texto.substring(2, 5));

let texto1 = "Esta é uma string";
console.log(texto1.slice(5, 7));

let lista = "maça,banana,uva,melancia";
let frutas = lista.split(",");
console.log(frutas);

let frase2 = "O JavaScript é incrível!";
let novaFrase = frase2.replace("JavaScript", "Python");
console.log(novaFrase);

let texto2 = "JavaSCRIPT";
console.log(texto2.toLowerCase());
console.log(texto2.toUpperCase());

let texto3 = "  Espaços ao redor  ";
console.log(texto3.trim());
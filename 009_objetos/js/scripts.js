var obj = {
   nome: "Mateus",
   idade: 18,
   profissao: "Programador", 
   estaTrabalhando: false,
};

console.log(obj);
console.log(typeof obj);
console.log(obj.nome);
console.log(obj.idade);
console.log(obj.profissao);

console.log("O meu nome é: " + obj.nome);


// Mudando a propriedade do objeto
obj.nome = "Pedro";

console.log(obj.nome);
console.log(obj);

// Adicionando propriedade no objeto
obj.graduacao = true;

console.log(obj);
console.log(obj.nome,obj.idade);
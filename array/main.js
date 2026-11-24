//[] -> significado de array 
// Os valores são sepados por virgula (,) 

let nomes = ["isa", "Victor", "Pedro", "Samuel", "Geovana"]

console.log(nomes)
console.log(nomes[3]) // consulta de posição (obs. a contagem de array começa em)

nomes[4] = "Caleb" // substitui o valor da possição 4 

console.log(nomes)

console.log(nomes.length) // conta quantas informações eu tenho no meu array 

nomes[nomes.length] = "Geovana"

console.log(nomes)


nomes.push("Nicolas") // push adiciona mais um valor ao final do array
console.log(nomes)

nomes.unshift("Ro") // unshift adiciona um valor no Começa do array 
console.log(nomes) 

// renovar valores 
// .pop remove o ultimo valor do array 
//.shift remove o primeiro valor do array
// se quiser extrair a informação eu posso colocar dentro de uma variavel 

let.ultimoNomes = nomes.pop()
console.log(nomes)
console.log(ultimoNome)


let.primeiroNomes = nomes.shift()
console.log(nomes)
console.log(primeiroNome)


// atividades
// 1 faça uma Lista com o nome de 5 colegas
// 2 adicione no final dessa lista o nome de +1 colegas
// 3 adicione no começo dessa Lista o nome de um pet
// 4 adicione agora no final da Lista o nome de mais 2 a 5 colegas
// 5 mostre a informação que esta salva no 4 posição
// 6 extraia a primeira infomação e salve na variavel PETs 

let nomeColegas = ["Galeb", "Pedro", "Vitinho", "Isabela", "gustavo"] 

console.log (nomeColegas); 

nomeColegas.push("Chacal");
console.log (nomeColegas); 

nomeColegas.unshift("Chris-Rock")
console.log (nomeColegas); 

nomeColegas.push("Geovana");
nomeColegas.push("Gabriel");
nomeColegas.push("Jp");
console.log (nomeColegas); 

console.log(nomeColegas[3])

let pets = nomeColegas.shift()
console.log(pets) 

// e se eu precisar validar que uma informação exite em um array ?
console.log(nomes.includes("Samuel"))

// e se eu precisar saber em que posição (indice) essa informação esta? 
console.log(nomes.indexOf("Nicolas") )

// e se eu precisar percorrer todo o array?  
// "=>" arrow function usado para definir uma função anonima 
// () => {} declaração da função anonima 
nomes.forEach((linha, contador) => {
    console.log(" O" + (contador + 1) + "° registro é: " + linha)
})

 
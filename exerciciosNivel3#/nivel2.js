// 11. Um caixa precisa somar os valores de uma compra com os itens 29.90, 54.00, 15.50 e 80.00 armazenados em um 
// array. Percorra os valores com repetição, acumule o total e exiba o valor final formatado no terminal. 

const valoresCompra = [29.90, 54.00, 15.50, 80.00];

function fnSomarValores(lista) {
    let total = 0; 

    for (let i = 0; i < lista.length; i++) {
        total += lista[i];
    }
    console.log("Total da compra: R$ " + total.toFixed(2));
}

fnSomarValores(valoresCompra); 

// 12. A coordenação pedagógica quer saber a situação de um aluno a partir das quatro notas 6.5, 5.0, 7.5 e 6.0 guardadas 
// em um array. Calcule a média das notas e exiba no terminal se o aluno está aprovado (média a partir de 6.0) ou 
// reprovado.  

const notasAluno = [6.5, 5.0, 7.5, 6.0];

function fnCalcularMedia(notas) {
    let soma = 0; 

    for (let i = 0; i < notas.length; i++) {
        soma += notas[i];
    }

    let media = soma / notas.length;
    console.log("Média do aluno: " + media.toFixed(2));

    if (media >= 6.0) {
        console.log("Situação: APROVADO");
    } else {
        console.log("Situação: REPROVADO");
    }
}

fnCalcularMedia(notasAluno); 

// 13. Em um levantamento de faixa etária com as idades 14, 18, 25, 16, 32, 17 e 19 dentro de um array, é necessário 
// separar apenas quem já atingiu a maioridade. Gere um novo array contendo somente as idades maiores ou iguais a 
// 18 e exiba o resultado no terminal. 

let idades = [14, 18, 25, 16, 32, 17, 19];

function fnFiltroMaioridade(idades) {
    let idadesMaioridade = [];

    for (let i = 0; i < idades.length; i++) {
        if (idades[i] >= 18) {
            idadesMaioridade.push(idades[i]);
        }
    }

    console.log("Idades maiores ou iguais a 18:", idadesMaioridade);
}

fnFiltroMaioridade(idades); 


// 14. Um sistema de cadastro recebe novos logins e já possui "joao.silva", "maria.souza" e "pedro.lima" em um array. 
// Verifique se um novo login já existe antes de inserir: se não existir, adicione ao array e confirme; se já existir, informe 
// que o login está indisponível. 



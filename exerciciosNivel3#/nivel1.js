//1 Você está organizando a chamada de uma turma com os alunos ["Ana", "Bruno", "Carla", "Diego", "Elena"] para 
// conferir quem abre e quem fecha a lista. Crie uma função fnExibirChamada() que declare esse array e exiba no 
// terminal o primeiro aluno, o último aluno usando .length e o total de estudantes cadastrados. 

function fnExibirChamada() {
  let alunos = ["Ana", "Bruno", "Carla", "Diego", "Elena"];

  let primeiroAluno = alunos[0];
  let ultimoAluno = alunos[alunos.length - 1];
  let totalAlunos = alunos.length;

  console.log(`Primeiro aluno: ${primeiroAluno}`);
  console.log(`Último aluno: ${ultimoAluno}`);
  console.log(`Total de estudantes cadastrados: ${totalAlunos}`);
}

fnExibirChamada(); 


// 2. Durante o fechamento de um pedido online, o array ["Teclado Mecânico", "Mouse Gamer"] já contém dois itens e o 
// cliente resolveu incluir "Headset USB". Crie uma função fnAdicionarProduto(lista, novoItem) que adicione o novo 
// item ao final do array e mostre a lista atualizada no terminal. 


const carrinho = ["Teclado Mecânico", "Mouse Gamer"];

function fnAdicionarProduto(lista, novoItem) {
  
  
  lista.push(novoItem);

  console.log(lista);
}




fnAdicionarProduto(carrinho, "Headset USB"); 

// 3. Na recepção de um posto de saúde, a fila normal está com ["Marcos", "Juliana", "Roberto"] e chega "Dona Clara 
// (Idosa)" com atendimento prioritário. Crie uma função fnEncaixarPrioridade(fila, nomePaciente) que coloque a 
// paciente prioritária na frente da fila e exiba a nova sequência. 
const filaNormal = ["Marcos", "Juliana", "Roberto"]; 
function fnEncaixarPrioridade(fila, nomePaciente) {

    fila.unshift(nomePaciente); 

    console.log(fila)
} 



fnEncaixarPrioridade(filaNormal, "Dona Clara");  


// 4. A partir da fila ["Dona Clara (Idosa)", "Marcos", "Juliana", "Roberto"], o consultório vai iniciar o atendimento da 
// manhã. Crie uma função fnChamarProximo(fila) que retire o primeiro nome da fila e exiba no terminal quem foi 
// chamado e quem continua aguardando. 

const filaAtendimento = ["Dona Clara (Idosa)", "Marcos", "Juliana", "Roberto"];

function fnChamarProximo(fila) {
  
  
  const pacienteChamado = fila.shift();

  console.log(`Paciente chamado: ${pacienteChamado}`);

  console.log("Continuam aguardando:", fila);
}


fnChamarProximo(filaAtendimento); 

// 5. Em um editor de texto simples, o usuário realizou as ações ["Escreveu título", "Aplicou negrito", "Inseriu tabela"] e 
// quer desfazer o que fez por último. Crie uma função fnDesfazerAcao(lista) que remova o último elemento do array e 
// mostre no terminal as ações restantes. 
const usos = ["Escreveu título", "Aplicou negrito", "Inseriu tabela"]  

 function fnDesfazerAcao(lista){ 

    const itemUsado = lista.pop();  

    console.log(`Item Utilizado por ultimo: ${itemUsado}`);

    console.log("Passos Restantes:", lista); 

} 


fnDesfazerAcao(usos); 


// 6. O responsável pelo almoxarifado precisa conferir quantos itens existem no array ["Camiseta", "Calça", "Tênis", 
// "Boné"] antes de iniciar a contagem física. Crie uma função fnVerificarEstoque(lista) que exiba no terminal a 
// quantidade total de itens usando .length. 

let itensAlmoxarifado = ["Camiseta", "Calça", "Tênis", "Boné"];

function fnVerificarEstoque(lista) {

  let contagemItens = lista.length;

  console.log(`Quantidade de itens restantes: ${contagemItens}`);
}


fnVerificarEstoque(itensAlmoxarifado); 



// 7. Na portaria de um evento, a lista oficial de convidados é ["Lucas", "Mariana", "Thiago", "Beatriz"] e duas pessoas 
// chegam perguntando se estão autorizadas: "Mariana" e "Rafael". Crie uma função fnEstaNaLista(lista, nome) que 
// verifique a presença de cada nome no array e exiba o resultado no terminal. 

function fnEstaNaLista(lista, nome) {
  let autorizado = lista.includes(nome);
const convidados = ["Lucas", "Mariana", "Thiago", "Beatriz"];

  if (autorizado) {
    console.log(`${nome} está na lista: AUTORIZADO.`);
  } else {
    console.log(`${nome} está na lista: NÃO AUTORIZADO.`);
  }
}


fnEstaNaLista(convidados, "Mariana");
fnEstaNaLista(convidados, "Rafael"); 


// 8 Em um mercado, os corredores seguem a ordem ["Arroz", "Feijão", "Açúcar", "Café", "Sal"] e um repositor precisa 
// saber a posição exata de "Café" e conferir se "Macarrão" consta no array. Crie uma função fnConsultarCorredor(lista, 
// item) que retorne ou exiba a posição encontrada ou o aviso de que o item não está no array.  

function fnConsultarCorredor(lista, item){

    let posicao = lista.indexOf(item);

    if (posicao !== -1) {
        console.log(`O item "${item}" está na posição ${posicao}.`);
    } else {
        console.log(`O item "${item}" não está no array.`);
    }

}

fnConsultarCorredor(["Arroz", "Feijão", "Açúcar", "Café", "Sal"], "Café");



// 9. A tabela de preços base de um lanche está armazenada em [15.00, 25.00, 40.00] e o segundo item sofreu reajuste 
// para 28.50. Crie uma função fnAtualizarPreco(lista, indice, novoValor) que altere o valor na posição informada e 
// exiba o array modificado no terminal.

const valores = [15.00, 25.00, 40.00];

function fnAtualizarPreco(lista, indice, novoValor) {

    if (indice >= 0 && indice < lista.length) {
        lista[indice] = novoValor;
    }

    console.log("Valor Alterado:", lista);
}

fnAtualizarPreco(valores, 1, 28.50); 

// 10. Para montar o boletim inicial de um estudante com as notas 8.0, 7.5 e 9.0, você precisa agrupar esses valores em 
// uma única estrutura. Crie uma função fnCriarBoletim(nota1, nota2, nota3) que armazene as três notas em um array e 
// o exiba ou retorne para conferência. 

const notas = [8.0, 7.5, 9.0];


function fnCriarBoletim(notas) {

    console.log("Boletim inicial:", notas);
    return notas;
}

fnCriarBoletim(notas); 




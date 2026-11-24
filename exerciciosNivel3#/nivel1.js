//1 Você está organizando a chamada de uma turma com os alunos ["Ana", "Bruno", "Carla", "Diego", "Elena"] para 
// conferir quem abre e quem fecha a lista. Crie uma função fnExibirChamada() que declare esse array e exiba no 
// terminal o primeiro aluno, o último aluno usando .length e o total de estudantes cadastrados. 

let fnExibirChamada() {
    let alunos = ["Ana", "Bruno", "Carla", "Diego", "Elena"];
    console.log("Primeiro aluno:", alunos[0]);
    console.log("Último aluno:", alunos[alunos.length - 1]);
    console.log("Total de estudantes:", alunos.length);
} 
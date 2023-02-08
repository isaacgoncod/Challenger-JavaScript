//  A academia de Oficiais da Federção precisa da sua ajuda para criar um programa que automatize os cálculos das médias de alunos e turmas para melhor acompanhar os seu desenpenhos. Este programa será incorporado em seu sistema principal, portanto você precisa apenas desenvolver a função que calcula a média. No entanto, a função deve ser capaz de funcionar com qualquer número de alunos ou turmas.

//Desafio: Escreva uma função que recebe um número qualquer de números inteiros como argumentos e retorne a média aritmética entre eles.

function mediaAlunos(...notas) {
  let soma = 0;
  notas.forEach((nota) => {
    soma += nota;
  });
  return soma / notas.length;
}
// function mediaAlunos(...notas) {
//   const soma = notas.reduce((acumulador, nota) => {
//     return acumulador + nota;
//   }, 0);
//   return soma / notas.length;
// }
console.log(mediaAlunos(10, 9, 6, 8, 9, 1, 5, 7));
console.log(mediaAlunos(2, 5, 7, 1, -2));
console.log(mediaAlunos(10, 10, 10, 10, 9));
console.log(mediaAlunos(25, 75));

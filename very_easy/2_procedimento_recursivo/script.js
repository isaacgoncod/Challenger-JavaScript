// A equipe de manutenção da nave Highewind solicitou a sua ajuda para analisar o desenpenho do computador portátil utilizado pela equipe de reconhecimento. Para isso, em um determinado momento, você precisou simular a criação de blocos de informção em formato de texto recursivamente, então decidiu criar uma função para imitar esse comportamento.

// Desafio: Escreva uma função que recebe um número e retorna uma quantidade equivalente de "chunks" separados por um traço "-" sem utilizar nenhuma estrutura de repetição(while,dowhile, for, etc).

function chunks(num) {
  if (num === 0) {
    return "";
  }

  if (num === 1) {
    return "chunk";
  } else {
    return "chunk-" + chunks(num - 1);
  }
}

console.log(chunks(4));
console.log(chunks(1));
console.log(chunks(8));
console.log(chunks(2));

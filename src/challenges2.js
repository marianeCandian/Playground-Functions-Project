/* eslint-disable complexity */
// Desafio 11
function generatePhoneNumber(array) {
  if (array.length !== 11) {
    return 'Array com tamanho incorreto.';
  }
  let contando = 0;
  for (let i of array) {
    for (let index = 0; index < array.length; index += 1) {
      if (i === array[index]) {
        contando += 1;
      }
      if (contando >= 3 || i < 0 || i > 9) {
        return 'não é possível gerar um número de telefone com esses valores';
      }
    }
    contando = 0;
  }
return ('(' + array[0] + array[1] + ') ' + array[2] + array[3] + array[4] + array[5] + array[6] + '-' + array[7] + array[8] + array[9] + array[10]);
}

// Desafio 12
function triangleCheck() {
  // seu código aqui
}

// Desafio 13
function hydrate() {
  // seu código aqui
}

module.exports = {
  generatePhoneNumber,
  hydrate,
  triangleCheck,
};

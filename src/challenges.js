/* eslint-disable complexity */
// Desafio 1

function compareTrue(animal1, animal2) {
  if (animal1 === true && animal2 === true) {
    return true;
  } return false;
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(string) {
  return string.split(' ');
}

// Desafio 4
function concatName(array) {
  return `${array[(array.length - 1)]}, ${array[0]}`;
}

// Desafio 5
function footballPoints(vitorias, empates) {
  let wins = 3;
  let ties = 1;
  return vitorias * wins + empates * ties;
}

// Desafio 6
function highestCount(array) {
  let maoirNum = array[0];
  let contNum = 0;
  for (let index in array) {
    if (array[index] > maoirNum) {
      maoirNum = array[index];
    }
  } for (let index2 in array) {
    if (maoirNum === array[index2]) {
      contNum += 1;
    }
  }
  return contNum;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let distancia1 = mouse - cat1;
  let distancia2 = mouse - cat2;
  if (distancia1 < 0) {
    distancia1 *= (-1);
  } else if (distancia2 < 0) {
    distancia2 *= (-1);
  }
  if (distancia1 < distancia2) {
    return 'cat1';
  } if (distancia1 > distancia2) {
    return 'cat2';
  } return 'os gatos trombam e o rato foge';
}
// Desafio 8
function fizzBuzz(array) {
  let arrayResposta = [];
  for (let index = 0; index < array.length; index += 1) {
    if (array[index] % 3 === 0) {
      arrayResposta[index] = 'fizz';
    }
    if (array[index] % 5 === 0) {
      arrayResposta[index] = 'buzz';
    }
    if (array[index] % 3 === 0 && array[index] % 5 === 0) {
      arrayResposta[index] = 'fizzBuzz';
    }
    if (array[index] % 3 !== 0 && array[index] % 5 !== 0) {
      arrayResposta[index] = 'bug!';
    }
  }
  return arrayResposta;
}

// Desafio 9
function encode(string) {
  let newString = [];
  for (let index in string) {
    if (string[index] === 'a') {
      newString.push('1');
    } else if (string[index] === 'e') {
      newString.push('2');
    } else if (string[index] === 'i') {
      newString.push('3');
    } else if (string[index] === 'o') {
      newString.push('4');
    } else if (string[index] === 'u') {
      newString.push('5');
    } else {
      newString.push(string[index]);
    }
  }
  return newString.join('');
}

function decode(string) {
  let newString = [];
  for (let index in string) {
    if (string[index] === '1') {
      newString.push('a');
    } else if (string[index] === '2') {
      newString.push('e');
    } else if (string[index] === '3') {
      newString.push('i');
    } else if (string[index] === '4') {
      newString.push('o');
    } else if (string[index] === '5') {
      newString.push('u');
    } else {
      newString.push(string[index]);
    }
  }
  return newString.join('');
}

// Desafio 10
function techList(tecnologias, nome) {
  
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
  techList,
};

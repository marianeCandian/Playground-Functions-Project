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
// console.log(catAndMouse([6,3,3]));

// Desafio 8
function fizzBuzz() {
  // seu código aqui
}

// Desafio 9
function encode() {
  // seu código aqui
}
function decode() {
  // seu código aqui
}

// Desafio 10
function techList() {
  // seu código aqui
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

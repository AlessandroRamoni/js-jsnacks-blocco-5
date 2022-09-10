console.log("Venerdì");
/* SNACK 1

 * Creare un array di oggetti di squadre di calcio. 
 * Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
 * Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
 * Generare numeri random al posto degli 0 nelle proprietà:
 * punti fatti e falli subiti

​
​
 SNACK 2

 * Si scriva una funzione che accetti tre argomenti, 
 * un array e due numeri (a più piccolo di b). 
 * La funzione ritornerà un nuovo array con i valori 
 * che hanno la posizione compresa tra i due numeri.
 
​
​
​
SNACK 3

 * Crea 10 oggetti che rappresentano una zucchina.
 * Dividi in due array separati le zucchine che misurano meno o più di 15cm.
 * Infine stampa separatamente quanto pesano i due gruppi di zucchine.
 */

/*
SNACK 1
 * Creare un array di oggetti di squadre di calcio. 
 * Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
 * Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
 * Generare numeri random al posto degli 0 nelle proprietà:
 * punti fatti e falli subiti
*/
const teams = [
  {
    nome: "Juventus",
    puntiFatti: 0,
    golFatti: 0,
    golSubiti: 0,
  },
  {
    nome: "PSV",
    puntiFatti: 0,
    golFatti: 0,
    golSubiti: 0,
  },
  {
    nome: "Rotterdam",
    puntiFatti: 0,
    golFatti: 0,
    golSubiti: 0,
  },
  {
    nome: "Twente",
    puntiFatti: 0,
    golFatti: 0,
    golSubiti: 0,
  },
  {
    nome: "Alkmaar",
    puntiFatti: 0,
    golFatti: 0,
    golSubiti: 0,
  },
  {
    nome: "Den Haag",
    puntiFatti: 0,
    golFatti: 0,
    golSubiti: 0,
  },
  {
    nome: "Feyenord",
    puntiFatti: 0,
    golFatti: 0,
    golSubiti: 0,
  },
  {
    nome: "Ajax",
    puntiFatti: 0,
    golFatti: 0,
    golSubiti: 0,
  },
  {
    nome: "Vitesse",
    puntiFatti: 0,
    golFatti: 0,
    golSubiti: 0,
  },
  {
    nome: "Utrecth",
    puntiFatti: 0,
    golFatti: 0,
    golSubiti: 0,
  },
  {
    nome: "Venlo",
    puntiFatti: 0,
    golFatti: 0,
    golSubiti: 0,
  },
  {
    nome: "Breda",
    puntiFatti: 0,
    golFatti: 0,
    golSubiti: 0,
  },
];

const pari = [];
const dispari = [];

teams.forEach((squadra, index) => {
  squadra.puntiFatti = getRandomNumber(1, 10);
  squadra.golFatti = getRandomNumber(1, 10);

  ////////// vorrei dividere in due array le squadre in base al loro indice, pari o dispari, ma mi genera per ogni squadra un array di lunghezza 1

  if (index % 2 === 0) {
    pari.push(squadra);
  } else {
    dispari.push(squadra);
  }
  // console.log(squadra.nome);
  //   console.log(squadra);
  // console.log(
  //   `${squadra.nome}, dopo due giornate ha segnato ${squadra.golFatti}`
  // );
});
console.log(pari);
console.log(dispari);

function getRandomNumber(min, max) {
  const range = max - min + 1;
  const random = Math.floor(Math.random() * range) + min;
  return random;
}

/*
* Si scriva una funzione che accetti tre argomenti, 
 * un array e due numeri (a più piccolo di b). 
 * La funzione ritornerà un nuovo array con i valori 
 * che hanno la posizione compresa tra i due numeri.
 
*/

function createNewArray(arr, num1, num2) {
  let arrayAppoggio = [];

  if (num1 < num2) {
    arr.forEach((number, index) => {
      // console.log(index);
      if (index > num1 && index < num2) {
        arrayAppoggio.push(number);
      }
    });
    return arrayAppoggio;
  } else {
    arr.forEach((number, index) => {
      // console.log(index);
      if (index > num2 && index < num1) {
        arrayAppoggio.push(number);
      }
    });
    return arrayAppoggio;
  }
}

const array = [2, 5, 7, 4, 6, 8, 20, 50, 35];
// console.log(createNewArray(array, 2, 8));

/*
 * Crea 10 oggetti che rappresentano una zucchina.
 * Dividi in due array separati le zucchine che misurano meno o più di 15cm.
 * Infine stampa separatamente quanto pesano i due gruppi di zucchine.
 */

const zucchine = [
  {
    lunghezza: 12,
    peso: 30,
  },
  {
    lunghezza: 10,
    peso: 28,
  },
  {
    lunghezza: 18,
    peso: 12,
  },
  {
    lunghezza: 19,
    peso: 22,
  },

  {
    lunghezza: 16,
    peso: 16,
  },
  {
    lunghezza: 17,
    peso: 27,
  },
  {
    lunghezza: 11,
    peso: 29,
  },
  {
    lunghezza: 14,
    peso: 15,
  },
  {
    lunghezza: 15,
    peso: 10,
  },
  {
    lunghezza: 13,
    peso: 23,
  },
];

const zucchineBig = [];
const zucchineSmall = [];

let totalePesoZucchineSmall = 0;
let totalePesoZucchineBig = 0;

zucchine.forEach((element) => {
  if (element.lunghezza < 15) {
    zucchineSmall.push(element);

    totalePesoZucchineSmall += element.peso;
  } else {
    zucchineBig.push(element);
    totalePesoZucchineBig += element.peso;
  }
});
console.log(zucchineSmall);
// console.log(zucchineSmall, zucchineBig);
// console.log(
//   "peso zucchine small: ",
//   totalePesoZucchineSmall,
//   "peso zucchine big: ",
//   totalePesoZucchineBig
// );

/*
const zucchina = {
    color: 'green',
    length: 0,
}
​
const zucchine = [];
​
zucchine.push({...zucchina, length: 10});
zucchine.push({...zucchina, length: 12});
zucchine.push({...zucchina, length: 15});
zucchine.push({...zucchina, length: 20});
zucchine.push({...zucchina, length: 10});
zucchine.push({...zucchina, length: 12});
zucchine.push({...zucchina, length: 18});
zucchine.push({...zucchina, length: 19});
zucchine.push({...zucchina, length: 11});
zucchine.push({...zucchina, length: 17});
zucchine.push({...zucchina, length: 9});
​
console.log(zucchine);
​
function propertyFilter(arrayOfObjects, property, filterValue) {
    const filterArray1 = [];
    const filterArray2 = [];
​
    arrayOfObjects.forEach((object) => {
        if (object[property] <= filterValue) {
            filterArray1.push(object);
        }
        else if (object[property] > filterValue) {
            filterArray2.push(object);
        }
    })
​
    return [filterArray1, filterArray2];
}
​
let zucchineBySize = propertyFilter(zucchine, 'length', 15)
console.log('Zucchine piu corte di 15', zucchineBySize[0]);
console.log('Zucchine piu lunghe di 15', zucchineBySize[1]);
​
*/

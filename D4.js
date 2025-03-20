/* ESERCIZIO 1
 Scrivi una funzione di nome "area", che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato.
*/
/* SCRIVI QUI LA TUA RISPOSTA */
function area(l1, l2) {
  const result = l1 * l2;
  console.log(result);
  return result;
}
area(2, 120);
/* ESERCIZIO 2
 Scrivi una funzione di nome "crazySum", che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma dei due parametri, ma se il valore dei due parametri è il medesimo deve invece tornare
 la loro somma moltiplicata per tre.
*/
/* SCRIVI QUI LA TUA RISPOSTA */
function crazySum(n1, n2) {
  const result2 = n1 + n2;

  if (n1 !== n2) {
    return result2;
  } else {
    return result2 * 3;
  }
}
console.log(crazySum(7, 7));
/* ESERCIZIO 3
 Scrivi una funzione di nome "crazyDiff" che calcola la differenza assoluta tra un numero fornito come parametro e 19.
 Deve inoltre tornare la differenza assoluta moltiplicata per tre qualora il numero fornito sia maggiore di 19.
*/
/* SCRIVI QUI LA TUA RISPOSTA */
function crazyDiff(num) {
  const result3 = Math.abs(num - 19);
  if (num > 19) {
    return result3 * 3;
    console.log(result3 * 3);
  } else {
    return result3;
    console.log(result3);
  }
}

/* ESERCIZIO 4
 Scrivi una funzione di nome "boundary" che accetta un numero intero n come parametro, e ritorna true se n è compreso tra 20 e 100 (incluso) oppure
 se n è uguale a 400.
*/
/* SCRIVI QUI LA TUA RISPOSTA */
function boundary(n) {
  if (n >= 20 && n <= 100) {
    return true;
  } else if (n === 400) {
    return true;
  } else {
    return false;
  }
}
/* ESERCIZIO 5
 Scrivi una funzione di nome "epify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "EPICODE" all'inizio della stringa fornita, ma se la stringa fornita comincia già con "EPICODE" allora deve
 ritornare la stringa originale senza alterarla.
*/
/* SCRIVI QUI LA TUA RISPOSTA */
function epify(phrase) {
  const s = phrase.split(" ");

  if (s[0] === "EPICODE") {
    return phrase;
  } else {
    const s2 = "EPICODE ";
    console.log(s2 + phrase);
  }
}
/* ESERCIZIO 6
 Scrivi una funzione di nome "check3and7" che accetta un numero positivo come parametro. La funzione deve controllare che il parametro sia un multiplo
 di 3 o di 7. (Suggerimento: usa l'operatore modulo)
*/
/* SCRIVI QUI LA TUA RISPOSTA */
function check3and7(n3) {
  if (n3 <= 0) {
    console.log("il numero inserito è negativo");
    return;
  } else if (n3 % 3 == 0 || n3 % 7 == 0) {
    return console.log("il numero inserito è multiplo di 3 o 7 ");
  }
}

/* ESERCIZIO 7
 Scrivi una funzione di nome "reverseString", il cui scopo è invertire una stringa fornita come parametro (es. "EPICODE" --> "EDOCIPE")
*/
/* SCRIVI QUI LA TUA RISPOSTA */
function reverseString(ss) {
  const max = ss.length - 1;
  const tempstring = ss.split("");
  const tempstring2 = ss.split("");

  for (let i = 0; i < max; i++) {
    tempstring2[i] = tempstring[max - i];
  }

  return console.log(tempstring2.join(""));
}
/* ESERCIZIO 8
 Scrivi una funzione di nome "upperFirst", che riceve come parametro una stringa formata da diverse parole.
 La funzione deve rendere maiuscola la prima lettera di ogni parola contenuta nella stringa.
*/
/* SCRIVI QUI LA TUA RISPOSTA */
function upperFirst(s3) {
  let max = s3.length;
  const s4 = s3.split(" ");
  const s5 = [""];
  for (let i = 0; i < max; i++) {
    let temp;
    temp = s4[i].charAt(0);
    temp = temp.toUpperCase();

    console.log(temp + s4[i].slice(1));
  }
  return console.log(s4.join(""));
}

/* ESERCIZIO 9
 Scrivi una funzione di nome "cutString", che riceve come parametro una stringa. La funzione deve creare una nuova stringa senza il primo e l'ultimo carattere
 della stringa originale.
*/
/* SCRIVI QUI LA TUA RISPOSTA */
function cutString(s6) {
  s6.split("");
  console.log(s6.slice(1, -1));
}
/* ESERCIZIO 10
 Scrivi una funzione di nome "giveMeRandom", che accetta come parametro un numero n e ritorna un'array contenente n numeri casuali inclusi tra 0 e 10.
*/
/* SCRIVI QUI LA TUA RISPOSTA */
function giveMeRandom(nn) {
  const arrOfNumbs = [];
  for (let i = 0; i < nn; i++) {
    const randomNum = Math.floor(Math.random() * 10);
    arrOfNumbs.push(randomNum);
  }
  return arrOfNumbs;
}

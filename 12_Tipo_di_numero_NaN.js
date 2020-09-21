
//stesso valore stesso tipo
console.log(1 === 1);   //*true
console.log(NaN === NaN);   //*false

//Il ris della costante darebbe NaN (Not A Number)
const result = 12 * 'Test';
console.log(result);
//Non da risultati
if (result ===NaN) {
    console.log('Non è un numero')
}

//Mi dice se non è un numero (true or false)
console.log(isNaN(result));     //*ritorna true

//ritorna true solo se quello che gli passiamo è NaN, NON cerca di FARE la conversione
console.log(Number.isNaN(result));      //*ritorna true

console.log(isNaN(parseInt('12')));     //*ritorna false perchè la stringa è convertita in numero

console.log(isNaN(''));     //*ritorna false perchè la stringa vuota in js risulta come zero

console.log(isNaN(false));     //*ritorna false perchè il cast di false in js risulta come zero



//PER CONCLUDERE
//Se devo fare un operazione e verificarla, posso usare la sintassi Number.isNaN
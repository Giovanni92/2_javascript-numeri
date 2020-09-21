var mioNumero = 14;
console.log(typeof(mioNumero));

var result = mioNumero +10;
console.log(result);

var resDecimale = 0.1 +.2;
console.log(resDecimale);

//modo per avere un decimale arrotondato doopo virgola
var resDecimale = (0.1 * 10 +.2 * 10)/10;
console.log(resDecimale);

//ris. "0.30" ma ritorna una stringa (SOLO PER MOSTRARE A VIDEO UN RISULTATO CONVERTITO IN STRINGA)
var resDecimale = 0.1 +.2;
console.log(resDecimale.toFixed(2));
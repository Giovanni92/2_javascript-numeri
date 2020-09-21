// hex, octal and binary numbers

//0123456789ABCDEF  arriva fino a 15, dal 10 INIZIANO le lettere
const hexNum = 0XF;
console.log(hexNum);
console.log(hexNum * 5);

//01234567
const octalNum = 0o11;  //* 1*8^0 + 1*8^1 (11)
//l'output è il numero 9
console.log(octalNum);  

const binNum = 0b1100;  //0*2^0 + 0*2^1 + 1*2^2 + 1*2^3 
console.log(binNum);  



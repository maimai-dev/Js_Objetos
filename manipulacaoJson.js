const animais = require('./animais.json');
console.log(animais);

const converterString = JSON.stringify(animais);
console.log(converterString);

const converterObj = JSON.parse(converterString);
console.log(converterObj);




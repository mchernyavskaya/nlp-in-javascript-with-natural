var natural = require('natural');
var NGrams = natural.NGrams;

var myString = "Еду в Краков из Винницы 20 сентября на машине.";

console.log(NGrams.bigrams(myString));
console.log(NGrams.ngrams(myString, 3, '[S]', '[E]'));
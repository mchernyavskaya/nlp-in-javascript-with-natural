var natural = require('natural');
var stemmer = natural.PorterStemmerRu;

var token = "Кто-то едет в ближайшее время из Кракова в украину и обратно?";
// var token = "зарабатывать заработок заработать";
console.log(stemmer.tokenizeAndStem(token));




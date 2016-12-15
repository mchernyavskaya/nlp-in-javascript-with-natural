var natural = require('natural');

var nounInflector = new natural.NounInflector();
console.log(nounInflector.pluralize("spouse"));
console.log(nounInflector.singularize("fruit"));

var countInflector = natural.CountInflector;

for (var i = 1; i <= 10; i++){
    console.log(countInflector.nth(i));
}
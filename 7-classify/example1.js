var natural = require('natural');
var classifier = new natural.BayesClassifier();

// var trainingData = [
//     {text: 'RE: Canadian drugs now on sale', label: 'spam'},
//     {text: 'Earn more from home', label: 'spam'},
//     {text: 'Information now available!!!', label: 'spam'},
//     {text: 'Earn easy cash', label: 'spam'},
//     {text: 'Your business trip is confirmed for Monday the 4th', label: 'notspam'},
//     {text: 'Project planning - next steps', label: 'notspam'},
//     {text:'Birthday party next weekend', label: 'notspam'},
//     {text: 'Drinks on Monday?', label: 'notspam'}
// ];
var trainingData = [
    {text: 'RE: Канадские лекарства в свободной продаже', label: 'spam'},
    {text: 'Заработай больше, работая дома!', label: 'spam'},
    {text: 'Доступна новая информация!!!', label: 'spam'},
    {text: 'Как легко заработать деньги', label: 'spam'},
    {text: 'Ваша командировка подтверждена на понедельник, 4 октября', label: 'notspam'},
    {text: 'Планирование проекта - следующие шаги', label: 'notspam'},
    {text:'Вечеринка по поводу дня рождения', label: 'notspam'},
    {text:'Горячие штучки в твоем городе', label: 'spam'},
    {text: 'Увидимся в понедельник?', label: 'notspam'}
];

// var testData = [
//     {text: 'Drugs for cheap', label: 'spam'},
//     {text: 'Next deadline due Monday', label: 'notspam'},
//     {text: 'Meet me at home?', label: 'notspam'},
//     {text: 'Hang out with someone near you', label: 'spam'}
// ];
var testData = [
    {text: 'Дешевые лекарства', label: 'spam'},
    {text: 'Дедлайн в понедельник', label: 'notspam'},
    {text: 'Увидимся дома?', label: 'notspam'},
    {text: 'Едем в командировку', label: 'notspam'},
    {text: 'Назначь свидание с горячей штучкой', label: 'spam'},
    {text: 'Сводка о заработной плате за февраль', label: 'notspam'}
];

trainingData.forEach(function(item){
    classifier.addDocument(item.text, item.label);
});

classifier.train();

testData.forEach(function(item){
    var labelGuess = classifier.classify(item.text);
    console.log("\n");
    console.log(item.text);
    console.log("Label:", labelGuess);
    console.log("Real Label:", item.label);
    console.log(classifier.getClassifications(item.text));
});




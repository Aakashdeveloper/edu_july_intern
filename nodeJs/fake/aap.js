var faker = require('faker');

var randomName = faker.name.findName(); // Rowan Nikolaus
var randomEmail = faker.internet.email(); // Kassandra.Haley@erich.biz
var randomCard = faker.helpers.createCard();

var out = []
for(i=0;i<10;i++){
    out.push(faker.fake("{{name.lastName}}, {{name.firstName}} {{image.avatar}}"));
}

console.log(out)
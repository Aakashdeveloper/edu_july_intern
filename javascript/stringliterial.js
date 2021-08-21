var name = "Avengers"
var rating = 4.5
var type= "action"
var ind = "Hollywood"

//es5
var out ="An "+name+" is an "+type+" movie with rating of "+rating+" and from ind "+ind+"."
"An Avengers is an action movie with rating of 4.5 and from ind Hollywood."

//es6
var out = `An ${name} is an ${type} movie with rating of ${rating} and from ind ${ind}.`
"An Avengers is an action movie with rating of 4.5 and from ind Hollywood."
var movieName = "Avengers"
var movieRating = 4.5
var movieType = "Action"

var movieName1 = "Jab We Met"
var movieRating1 = 4.7
var movieType1 = "Romantic"

var movies = {
    name:'Avengers',
    rating:4.5,
    type:'Action'
}

typeof(movies)
"object"
movies.name
"Avengers"
movies.rating
4.5
movies.type
"Action"

JSON
> JavaScript Object Notation

var movies = [
    {
        name:'Avengers',
        rating:4.5,
        type:'Action'
    },
    {
        name:'Jab We Met',
        rating:4.7,
        type:'Romantic'
    } 
]

movies[1].name
"Jab We Met"
movies[0].name
"Avengers"

var movies = [
    {
        name:'Avengers',
        rating:4.5,
        type:'Action'
    },
    {
        name:'Jab We Met',
        rating:4.7,
        type:'Romantic',
        showTiming:{
            dayTime:["9:00AM","12:00PM"],
            nightTime:["8:00AM","12:00AM"],
        }
    } 
]

movies[1].showTiming
movies[1].showTiming.nightTime[0]



var calc ={
    sum: (a,b) => {return a+b},
    sub: (a,b) => {return a-b}
}



calc.sum(1,2)
3
calc.sub(1,2)
-1
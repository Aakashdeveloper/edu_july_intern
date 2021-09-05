var a = 10
var b = 20
a+b
30


function add(a,b){
    return a+b
}

add(1,2)
3

function add(a,b){
    return a+b
}
undefined
add(1,2)
3
add(199,299)
498
add('a',299)
"a299"
add('a','a')
"aa"


function add(edureka,developerfunnel,node){
    return edureka+developerfunnel+node
}

add(1,2,3)
6

//es5
function add(a,b){
    return a+b
}

//es6
var add = (a,b) => {return a+b}

///////////////////////////////
= assignment
== compare the data
=== compare the data and datatype

///assignment///
var a = 10 
var b = "10"
a == b  (comparing the data)
true
a === b (comparing the data and datatype)
false
var c = 10
a == c
true

var d = 11
a==d
false
a===d
false

var a = "Aakash"
undefined
var b = "aakash"
undefined
a == b
false
a === b
false
var b = "Aakash"
undefined
a==b
true
a===b
true
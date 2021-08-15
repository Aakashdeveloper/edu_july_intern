var a = true
var b = false
var c = true

a+c
a+b

a+b
1
a+c
2

true+true
1+1 
2

true is equal 1
false is equal 0

var a = true
var b = false
var c = true
undefined
10+a
11
10-a
9
10+b
10
10-b
10
10/b
Infinity
var a = "Hii "
undefined
a+b
"Hii false"
a-c
NaN


var a = 'true'
var b = "false"
var c = "true"

a-b
NaN


a+b
"truefalse"
"true"+"true"
"truetrue"
"true"-10
NaN
10-true
9

var a = 10
var b = "Hi"

typeof(a)
"number"
typeof(a)
"number"
typeof(b)
"string"
var c = true
typeof(c)
"boolean"
var d = "10"
typeof(d)
"string"
var e = "true"
typeof(e)
"string"

"10"+5 =15
"105"

var a = "10"
var b = "20"
a+b
"1020"
parseInt(a)+parseInt(b)
30
parseInt(a)
10

var a = "101abc11"
parseInt(a)
101

var a = "abc11"
parseInt(a)
NaN

var c ="abc"
parseInt(c)
NaN

var a = "10.11"
var b = "20.23"

//es5
parseInt(a)+parseInt(b)
30
parseFloat(a)+parseFloat(b)
30.34

var a = "10.11aaa10"
parseFloat(a)
10.11
var a = "a10.11aaa10"
parseFloat(a)
NaN
var a = "10a.1110"

parseFloat(a)
10

//es6
Number

var a = "10.11"
Number(a)
10.11

var a = "10"
Number(a)
10
var a = "10a"
Number(a)
NaN

var a = "10a11"
Number(a)
NaN

prompt("what is your name")
"aakash"
var a = prompt("what is your name")
undefined
a
"aakash"


var a = prompt("Enter first number")
var b = prompt("Enter second number")
Number(a)+Number(b)
30

var a = prompt("Enter first number")
var b = prompt("Enter second number")
Number(a)-Number(b)
10

alert("Form submmitted succesfully")
undefined
alert("No Slot Open")
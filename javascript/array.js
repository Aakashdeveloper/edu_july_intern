var a = ['a','b','wde','ef4'] array of strings
var b = [223,2434,4,34,2434] array of numbers
var c = [true, true,false,true,false] array of boolean values

var d =['dd',45,'f','4f4',55,34,true,'fv']

// array is collection of hetrogenious as well as homogenious array

var city = ["Delhi","Mumbai","Pune","Amsterdam","London"];
city.length

var city = ["Delhi","Mumbai","Pune","Amsterdam","London"];
undefined
city.length
5
city[0]
"Delhi"
city[1]
"Mumbai"
city[city.length-1]
"London"
city.push('Dubai')
6
city
(6) ["Delhi", "Mumbai", "Pune", "Amsterdam", "London", "Dubai"]
city.pop()
"Dubai"
city
(5) ["Delhi", "Mumbai", "Pune", "Amsterdam", "London"]
city.pop(2)
"London"
city.shift()
"Delhi"
city
(3) ["Mumbai", "Pune", "Amsterdam"]
city.unshift("Nice")
4
city
(4) ["Nice", "Mumbai", "Pune", "Amsterdam"]

push > add the value in the end of array
unshift > add the value in the beginning of the array
pop > always remove the last value of array
shift > always remove the first value of array


var city = ["Delhi", "Mumbai", "Pune", "Amsterdam", "London"]

city.slice(1)

city.splice(start,deletecount, array)

var city = ["Delhi", "Mumbai", "Pune", "Amsterdam", "London"]
city.splice(2,0,'Nice','Helsinki')

var city = ["Delhi", "Mumbai", "Pune", "Amsterdam", "London"]
city.splice(2,0,'Nice','Helsinki')
[]
city
(7) ["Delhi", "Mumbai", "Nice", "Helsinki", "Pune", "Amsterdam", "London"]
city.splice(3,1)
["Helsinki"]
city
(6) ["Delhi", "Mumbai", "Nice", "Pune", "Amsterdam", "London"]

var a = ['a','b','c',1]
var b = [2,3,4]
a+b 

var a = ['a','b','c',1]
var b = [2,3,4]
a+b 
"a,b,c,12,3,4"
a.concat(b)
(7) ["a", "b", "c", 1, 2, 3, 4]
b.concat(a)
(7) [2, 3, 4, "a", "b", "c", 1]

var city = ["Delhi", "Mumbai", "Nice", "Pune", "Amsterdam", "London"]
city.indexOf('Pune')
3
city.indexOf('Dubai')
-1
city.indexOf('London')
5
city.indexOf('Delhi')
0
city.indexOf('Hongkong')
-1

var city = ["Delhi", "Mumbai", "Nice", "Pune", "Amsterdam", "London"]
undefined
city.sort()
(6) ["Amsterdam", "Delhi", "London", "Mumbai", "Nice", "Pune"]
city.reverse()
(6) ["Pune", "Nice", "Mumbai", "London", "Delhi", "Amsterdam"]
var city = [1,5,"Delhi",4, "Mumbai", "Nice",3, "Pune",true, "amsterdam",false,"London"]
undefined
city.sort()
(12) [1, 3, 4, 5, "Delhi", "London", "Mumbai", "Nice", "Pune", "amsterdam", false, true]
var city = [1,5,"delhi",4, "Mumbai", "Nice",3, "Pune",true, "amsterdam",false,"London"]
undefined
city.sort()
(12) [1, 3, 4, 5, "London", "Mumbai", "Nice", "Pune", "amsterdam", "delhi", false, true]
var city = [1,5,"delhi",4, "Mumbai", "nice",3, "Pune",true, "amsterdam",false,"London"]
undefined
city.sort()
(12) [1, 3, 4, 5, "London", "Mumbai", "Pune", "amsterdam", "delhi", false, "nice", true]

var city = ["London", "Mumbai",['Red',['Bmw','Audi','Merc'],'Yellow','Green'],"Nice", "Pune", "amsterdam", "delhi",]

var city = ["London", "Mumbai",['Red',['Bmw','Audi','Merc'],'Yellow','Green'],"Nice", "Pune", "amsterdam", "delhi",]
undefined
city[2]
(4) ["Red", Array(3), "Yellow", "Green"]
city[2][0]
"Red"
city[2][1]
(3) ["Bmw", "Audi", "Merc"]
city[2][2]
"Yellow"
city[2][1][0]
"Bmw"

var a= 10
undefined
var b = ["a","b"]
undefined
Array.isArray(a)
false
Array.isArray(b)
true
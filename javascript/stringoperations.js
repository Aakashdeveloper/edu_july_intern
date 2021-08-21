var city = "lonDOn"
undefined
city.toUpperCase()
"LONDON"
city.toLowerCase()
"london"
var city = "lonDOn"
undefined
city[0]
"l"
city[1]
"o"
city.length
6
var city = "lonDOn "
undefined
city.length
7
var city = "lonDOn"
undefined
city[city.length-1]
"n"
var city = "   lonDOn  "
undefined
city.length
11
city.trim()
"lonDOn"
city.trim().length
6
var name =" Nikita . "
undefined
name.trim()
"Nikita ."
var a = "John"
undefined
var b = "john"
undefined
a == b
false
a.toUpperCase() == b.toUpperCase()
true

var city = "aMsTerDAm"
undefined
var name = "Bhumika"
undefined
name.slice(1)
"humika"
name.slice(2)
"umika"
name.slice(2,5)
"umi"
name.slice(-1)
"a"
name.slice(-1)
"ka"
name.slice(0,-1)
"Bhumik"
name.slice(0,-2)
"Bhumi"
name.charAt(0)
"B"
name.charAt(1)
"h"

var city = "aMsTerDAm"
city.charAt(0).toUpperCase()
"A"
city.slice(1).toLowerCase()
"msterdam"
city.charAt(0).toUpperCase()+city.slice(1).toLowerCase()
"Amsterdam"

var a = "I am doing Js"
a.replace('Js','JavaScript')
"I am doing JavaScript"
var a ='JavaScript'
undefined
a.replace('a','A')
"JAvaScript"
a.replace(/a/g,'A')
"JAvAScript"
 var name = " Nikita . "
undefined
name.replace(/ /g,'')
"Nikita."
 var name = " Nikita . "
undefined
name.replace(/ /g,'-')
"-Nikita-.-"

var url = "https://github.com/Aakashdeveloper/edu_intern_web"
undefined
url.split('/')
(5) ["https:", "", "github.com", "Aakashdeveloper", "edu_intern_web"]
var a = url.split('/')
undefined
a[0]
"https:"
a[1]
""
a[4]
"edu_intern_web"
a[a.length-1]
"edu_intern_web"

var a ="JavaScript i am learning JavaScript"
undefined
a.split(' ')
(5) ["JavaScript", "i", "am", "learning", "JavaScript"]


var a = "JavaScript"
undefined
a.split('')
(10) ["J", "a", "v", "a", "S", "c", "r", "i", "p", "t"]
var b = ["J", "a", "v", "a", "S", "c", "r", "i", "p", "t"]
undefined
b.toString()
"J,a,v,a,S,c,r,i,p,t"
b.toString().replace(/,/g,'')
"JavaScript"

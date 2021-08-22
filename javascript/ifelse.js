if(condition){

}else{

}

var a = 10

if(a%2==0){
    console.log(`Number ${a} is even`)
}else{
    console.log(`Number ${a} is odd`)
}

var name = "Priya";

if(name == "Priya"){
    console.log(`Hi ${name} you are admin`)
}else if(name == "Bhumika"){
    console.log(`Hi ${name} you are super admin`)
}else{
    console.log(`Hi ${name} we dont know you`)
}

var role = "Admin";
var name = "John";

if(role == "Admin"){
    if(name == "John"){
        console.log(`Hi ${name} you are ${role}`)
    }else{
        console.log(`Hi ${name} you are unknown`)
    }
}else if(role=="User"){
    if(name == "Ankit"){
        console.log(`Hi ${name} you are ${role}`)
    }else{
        console.log(`Hi ${name} you are unknown`)
    }
}else{
    console.log(`Hi ${name} you are unknown`)
}


var a = 10
a>10?"Hii":"Bie"
"Bie"
var a = 9
a>10?"Hii":"Bie"
"Bie"
var a = 11
a>10?"Hii":"Bie"
"Hii"
var a = 11
a>10?a+1:a-1
12
var a = 10
a>10?a+1:a-1
9
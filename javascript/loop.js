for(i=0;i<5;i++){
    console.log(i)
}
0
1
2
3
4

var city = ["Delhi", "Mumbai", "Nice", "Pune", "Amsterdam", "London"]
for(i=0;i<city.length;i++){
    console.log(city[i])
}

var city = ["London", "Mumbai",['Red','Yellow','Green'],"Nice", "Pune", "amsterdam", "delhi"]
for(i=0;i<city.length;i++){
    if(Array.isArray(city[i])){
        for(j=0;j<city[i].length;j++){
            console.log(city[i][j])
        }    
    }else{
        console.log(city[i])
    }
}

//////////////
while
///////////////
var i = 0;
while(i<5){
    console.log(i);
    i++
}
0
1
2
3
4

//////
for of(es6)
//////
var city = ["Delhi", "Mumbai", "Nice", "Pune", "Amsterdam", "London"]

for(mycity of city){
    console.log(mycity)
}

var city = ["London", "Mumbai",['Red','Yellow','Green'],"Nice", "Pune", "amsterdam", "delhi"]

for(mycity of city){
    if(Array.isArray(mycity)){
        for(colors of mycity){
            console.log(colors)
        } 
    }else{
        console.log(mycity)
    } 
}

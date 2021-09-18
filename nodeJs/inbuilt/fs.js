var fs = require('fs');

//it will create and override the content
/*fs.writeFile('MyCode.txt',"My Code from NodeJs",function(err){
    if(err) throw err;
    console.log('File Is Created')
})*/

//it will create and append the content
/*fs.appendFile("MyText.txt",`${Math.floor(Math.random()*10000)} This is new line 1 \n`,(err) => {
    if(err) throw err;
    console.log('Content Appended')
})*/

/*
fs.readFile('MyText.txt','utf-8',(err,data)=>{
    if(err) throw err;
    console.log(data)
})
*/
/*
fs.rename('MyText.txt','Mytext1.txt',(err) => {
    if(err) throw err
    console.log('File Rename')
})*/

fs.unlink('Mytext1.txt',(err) => {
    if(err) throw err
    console.log('File Deleted')
})

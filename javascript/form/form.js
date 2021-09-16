function fillId(){
    var id = Math.floor(Math.random()*100000)
    document.getElementById('orderid').value = id

}
function nameToUpper(){
    var fname = document.getElementById('firstname').value
    fname = fname.charAt(0).toUpperCase()+fname.slice(1).toLowerCase()
    document.getElementById('firstname').value = fname
}

function checkPassword(){
    var pwd = document.getElementById('password').value;
    if(pwd.length<15){
        if(pwd.length<8){
            document.getElementById('pout').innerText="Min Length Of Password is 8";
            document.getElementById('ppout').style.display = "block";
            document.getElementById('ppout').style.backgroundColor="red"
        }else if(pwd.length<11){
            document.getElementById('pout').innerText="";
            document.getElementById('ppout').style.backgroundColor="orange"
        }
    }else{
        document.getElementById('ppout').style.backgroundColor="green"
    }
}

function getExp(){
    var exp = document.getElementById('exp').value;
    document.getElementsByTagName('span')[0].innerText=`Total Year of exp is ${exp}`
}


function showPassowrd(){
    var pwd = document.getElementById('password');
    if(pwd.type == 'password'){
        pwd.type = "text"
    }else{
        pwd.type = "password"
    }
}

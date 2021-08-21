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
}

function getExp(){
    var exp = document.getElementById('exp').value;
    document.getElementsByTagName('span')[0].innerText=`Total Year of exp is ${exp}`
}
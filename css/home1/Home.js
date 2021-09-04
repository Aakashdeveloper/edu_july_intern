function recommand(){
    var selected = document.getElementById('city').value;
    localStorage.setItem('CityName',selected)
}

const showRec = () => {
    var userSelection = localStorage.getItem('CityName');
    userSelection = userSelection?`in ${userSelection}`:''
    document.getElementById('usercity').innerText=userSelection;
}


var city = ["Delhi", "Mumbai", "Nice", "Pune", "Amsterdam", "London","Helsinki"]

function getCity(){
    for(i=0;i<city.length;i++){
        var element = document.createElement('option');
        var text = document.createTextNode(city[i]);
        element.appendChild(text);
        element.value=city[i];
        document.getElementById('city').appendChild(element)
    }
}
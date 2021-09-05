const showRec = () => {
    var userSelection = localStorage.getItem('CityName');
    userSelection = userSelection?`in ${userSelection}`:''
    document.getElementById('usercity').innerText=userSelection;
}

var url = "https://developerfunnel.herokuapp.com/location";
var hotelUrl = "https://developerfunnel.herokuapp.com/hotels?city="

//es5
/*function getCity(){
    fetch(url)
    .then((res) => res.json())
    .then((data) => {
        data.map((item) => {
            var element = document.createElement('option');
            var text = document.createTextNode(item.city_name);
            element.appendChild(text);
            element.value=item._id;
            document.getElementById('city').appendChild(element)
        })
    })    
}*/

//es6
async function getCity(){
    var response = await fetch(url)
    var data = await response.json()
    data.map((item) => {
        var element = document.createElement('option');
        var text = document.createTextNode(item.city_name);
        element.appendChild(text);
        element.value=item._id;
        document.getElementById('city').appendChild(element)
    })    
}


function getHotels(){
    /* Setting data in local storage*/
    var selected = document.getElementById('city').value;
    var Restaurant = document.getElementById('restaurants');
    localStorage.setItem('CityName',selected)
    
    /* get data wrt to city*/
    while(Restaurant.length>0){
        Restaurant.remove(0)
    }

    fetch(`${hotelUrl}${selected}`)
    .then((res) => res.json())
    .then((data) => {
        data.map((item) => {
            var element = document.createElement('option');
            var text = document.createTextNode(`${item.name}|${item.locality}`);
            element.appendChild(text);
            element.value=item._id;
            Restaurant.appendChild(element)
        })
    }) 
}

/*
var city = ["Delhi", "Mumbai", "Nice", "Pune", "Amsterdam", "London","Helsinki"]

function getCity(){
        city.map((item) => {
            var element = document.createElement('option');
            var text = document.createTextNode(item);
            element.appendChild(text);
            element.value=item;
            document.getElementById('city').appendChild(element)
        })
}
function getCity(){
    for(i=0;i<city.length;i++){
        var element = document.createElement('option');
        var text = document.createTextNode(city[i]);
        element.appendChild(text);
        element.value=city[i];
        document.getElementById('city').appendChild(element)
    }
}*/
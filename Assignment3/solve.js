///part1 -a///
class restaurantManager{

    restaurantList=[
        {
            id: 1,
            restaurantName: 'KFC',
            address: 'Anand Vihar',
            city: 'Delhi'
        },
        {
            id: 2,
            restaurantName: 'Domino',
            address: 'Savita Vihar',
            city: 'Delhi'
        },
        {
            id: 3,
            restaurantName: 'Burger King',
            address: 'Civil Lines',
            city: 'Pune'
        },
        {
            id: 4,
            restaurantName: 'Subway',
            address: 'Cantonment',
            city: 'Mumbai'
        }
    ]

    ///part1 -b///
    printAllRestaurantNames=()=>{
        return this.restaurantList.map((data) =>  { return data.restaurantName})
    }

    //part1 -c ///
    filterRest = (cityName) => {
        return this.restaurantList.filter((data) => {return data.city===cityName})
    }
}

var restObj = new restaurantManager()
restObj.printAllRestaurantNames()

["KFC", "Domino", "Burger King", "Subway"]

var restObj = new restaurantManager()
undefined
restObj.filterRest('Mumbai')
[{…}]0: {id: 4, restaurantName: "Subway", address: "Cantonment", city: "Mumbai"}length: 1[[Prototype]]: Array(0)
restObj.filterRest('Delhi')
(2) [{…}, {…}]


//////part2-a/////
var orderData = {
    'Below 500': 20,
    '500-1000': 29,
    '1000-1500': 30,
    '1500-2000': 44,
    'Above 2000': 76
   };

for(keys in orderData){
    console.log(keys)
}

var out = 0;
for(keys in orderData){
    console.log(orderData[keys])
    out=out+Number(orderData[keys])
}
199

/*
    'Below 500': 20,
    '500-1000': 29,
    '1000-1500': 30,


20/79*100
25.31645569620253
36.708860759493675
37.9746835443038
*/


function getPercent(orderData){
    var total = 0;
    for(keys in orderData){
        total=total+Number(orderData[keys])
    }

    var output = [];
    var count = 0
    for(keys in orderData){
        var percentValue = (orderData[keys]/total)*100;
        count = count+1
        var myObj= {}
        myObj.id = count;
        myObj.order = keys;
        myObj.order_percentage=percentValue;
        myObj.restaurant="Punjabi Tadka"
        output.push(myObj)
    }
    return output
}

[10.050251256281408, 14.572864321608039, 15.07537688442211, 22.110552763819097, 38.19095477386934]
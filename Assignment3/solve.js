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
}

var restObj = new restaurantManager()
restObj.printAllRestaurantNames()

["KFC", "Domino", "Burger King", "Subway"]


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
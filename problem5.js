const P5 =(data)=>{
    //let array = []
    if (inventory.length === 0){
        return inventory
      }
    let result = data.filter(function(cars){
        if(cars.car_year < 2000){
            return (cars.car_year)
        }
        });
    return result
}

module.exports = {P5}
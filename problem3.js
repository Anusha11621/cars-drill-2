


const P3 =(data)=>{
    if (inventory.length === 0){
        return inventory
      }
let array = []
data.forEach((cars) => array.push(cars.car_model))
return array.sort()
}


module.exports = {P3}
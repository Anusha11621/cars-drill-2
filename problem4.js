function P4(data){
    if (inventory.length === 0){
        return inventory
      }
    let array = []
    data.forEach(cars => array.push(cars.car_year));
    return (array)
}

module.exports = {P4}
function problem2 (data){
    if (inventory.length === 0){
        return inventory
      }
    let lastcar = data[data.length-1]
    return (`"Last car is a ${lastcar.car_make} ${lastcar.car_model}"`)
}

module.exports = {problem2}
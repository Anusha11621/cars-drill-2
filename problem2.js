function P2 (data){
    let lastcar = data[data.length-1]
    return (`"Last car is a ${lastcar.car_make} ${lastcar.car_model}"`)
}

module.exports = {P2}
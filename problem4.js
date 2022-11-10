function P4(data){
    let array = []
    data.forEach(cars => array.push(cars.car_year));
    return (array)
}

module.exports = {P4}
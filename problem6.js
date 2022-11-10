function P6 (data){
    const audiAndBmw = data.filter(cars => (cars.car_make === 'BMW' || cars.car_make === "Audi"))
    return (audiAndBmw)
}


module.exports = {P6}
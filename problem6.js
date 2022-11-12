function problem6 (data){
    if (inventory.length === 0){
        return inventory
      }
    const audiAndBmw = data.filter(cars => (cars.car_make === 'BMW' || cars.car_make === "Audi"))
    return (audiAndBmw)
}


module.exports = {problem6}
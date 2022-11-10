const P5 =(data)=>{
    let array = []
    data.filter(function(cars){
    if(cars.car_year < 2000){
        array.push(cars.car_year)
    }
    });
    return array
}

module.exports = {P5}
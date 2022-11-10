


//year lessthan 2000
// let array = []
// const year = inventory.filter((cars){
//   if(cars.car_year < 2000){
//     array.push(cars.car_year)
//   }
// });
// console.log(array)


// //cars year
// let array = []
// inventory.forEach(cars => array.push(cars.car_year));
// console.log(array)


// //BMW and Audi
// const audiAndBmw = inventory.filter(cars => (cars.car_make === 'BMW' || cars.car_make === "Audi"))
// console.log(audiAndBmw)




function P1(data){
    let a = data.find(x => x.id == 33);
    return  (`Car 33 is a ${a.car_year} ${a.car_make}  ${a.car_model}`)
}





module.exports= {P1}


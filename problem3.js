// const P1=(data)=>{
//     let array= data.filter((car)=>{
//         return car.id==33
//     })
//     return  (`Car 33 is a ${array[0].car_year} ${array[0].car_make}  ${array[0].car_model}  `)
    
// }


const P3 =(data)=>{
let array = []
data.forEach((cars) => array.push(cars.car_model))
return array.sort()
}

module.exports = {P3}
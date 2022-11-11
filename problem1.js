


//let array =[1,2,3,3]



function P1(data){
    if (inventory.length === 0){
        return inventory
      }
    let a = data.find(x => x.id == 33);
    return  (`Car 33 is a ${a.car_year} ${a.car_make}  ${a.car_model}`)
}



module.exports= {P1}


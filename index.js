function map(sourceArray, func){
    let newArray = []
    sourceArray.forEach(element => {
        newArray.push(func(element))
    })
    return newArray
}

function reduce(sourceArray,func,startingValue){
    let total = (startingValue) ? startingValue : sourceArray[0]
    let i = (startingValue) ? 0 : 1

    for (;i<sourceArray.length; i++){
        total = func(sourceArray[i], total)
    }
    return total
}
function filtre(arr){
    return arr.filter(function(elt){
        return elt % 2 !== 0
    })
}

console.log(filtre([1, 2, 9, 5, 0]))
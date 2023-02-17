
function NumberArr (arr){ 
    return  arr.some(function (elt){
        return (elt % 2 === 0)
    })
}

console.log(NumberArr([9, 3, 5, 2]))

function Sumarr(arr){
   return  arr.reduce(function (acc, elt){
        return acc + elt;
    })
}

console.log(Sumarr([2, 4, 7, 10]));  //23
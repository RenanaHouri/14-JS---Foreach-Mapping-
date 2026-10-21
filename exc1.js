
function doubleValues(arr)
{
     let newArr=arr.map(function(num){
        return num*2;
    })
    return newArr;
}

console.log(doubleValues([1,2,3,4,5]));
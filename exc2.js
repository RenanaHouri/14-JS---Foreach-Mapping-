
function onlyEvenValues(arr)
{
    let result=arr.filter(function(num){
        return num%2==0;
    })
    return result;
}

console.log(onlyEvenValues([1,2,3,4,5,6,7]))

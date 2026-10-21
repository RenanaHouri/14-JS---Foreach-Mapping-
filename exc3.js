function showFirstAndLast(arr)
{
    let result=[]
       arr.forEach(function(value, index) {
        if ((index === 0 || index === arr.length - 1) &&
            typeof value === "string") {
            result.push(value);
        }
        });

    return result;
}

console.log(showFirstAndLast(["Renana",1,2,3,4,"Houri"]));
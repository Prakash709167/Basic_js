function calculateCartPrice(...num1){
    return num1;
}
// console.log(calculateCartPrice(200,400,500,1000,2000));

const user = {
    username : "prakash",
    prices: 199
}
function handleObject(anyObject){
    console.log(`username is ${anyObject.username} and price is ${anyObject.prices}`);
}
// handleObject(user)
const myNewArray = [200,400,100,500]

function returnsecond(getArray){
    return getArray[1];
}
console.log(returnsecond(myNewArray));
console.log(returnsecond([200,400,500]));

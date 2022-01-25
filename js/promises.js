function calcSqArea()
{
    return new Promise(function(resolve, reject){
        setTimeout(() => {
            const sqArea = 5 * 5;
            reject(sqArea);
        })
    })
}
function onFulfilled(data)
{
    console.log('fulfilled: ', data);
}
function onRejected(reason)
{
    console.log('rejected: ', reason);
}

calcSqArea()
.then(onFulfilled)
.catch((reason) => {
    console.log('catch: ', reason);
});
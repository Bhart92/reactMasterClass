function calcSqArea()
{
    return new Promise(function(resolve, reject){
        setTimeout(() => {
            const sqArea = 5 * 5;
            resolve(sqArea);
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

Promise.reject('testresolve')
.then(onFulfilled)
.catch((reason) => {
    console.log('catch: ', reason);
});

let myNum = 5;

function changeNum()
{
    return new Promise((resolve) => {
        setTimeout(() => {
            myNum = 10;
            resolve(myNum);
        }, 500);
    })
}

async function startChange()
{
    await changeNum();
    console.log(myNum);
};
startChange();
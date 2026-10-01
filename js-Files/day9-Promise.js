
/*
Promise is an Object in JavaScript. 
It will perform Asynchronous Operations like API Calls, File Loading, Time Delays.

It has states :
1. Pending - Default
2. Resolve - Successful (then)
3. Reject  - Failed     (catch)
*/


//Appraoch - 1
let prom1 = new Promise( (resolve, reject) => {

    let payment = false

    if(payment){
        resolve()
    }else{
        reject()
    }
})

// console.log(prom1)

prom1.then(()=> console.log("Successfull")).then(()=> {})
.catch(()=> console.log("Failure"))
.finally(()=> console.log("This is Finally..."))



//Appraoch - 2
let prom2 = new Promise( (resolve, reject) => {

    let payment = true

    if(payment){
        resolve("I got money")
    }else{
        reject("Due to network")
    }
})


prom2.then((res) => console.log(res)).catch((err) => console.log(err))





/**
 * Async - It will make a function and return a promises
 * Await - It will pause the excution until promise is resolve or reject. 
 */


async function great(){

    return new Promise( (resolve, reject) => {
        setTimeout( ()=> {
            resolve("This is Async!") , 
            reject(Error("Due to Insuficient"))
        } , 3000 )
    })
}
console.log(great())


async function display(){

    console.log("Hi")

    try{
        const dt = await great()
        console.log(dt)

    } catch(err){
        console.log(err)
    }

    console.log("Bye!!")
}

display()




//PROMISE ALL
Promise.all( [
    Promise.resolve("This is Promise.All ") , 
    Promise.reject("This is Promise.All Error") , 
] ).then((res) => console.log(res)) .catch((er) => console.log(er))



//PROMISE ALL SETTLED
Promise.allSettled( [
    Promise.resolve("This is Promise.AllSetlttled") , 
    Promise.reject("This is Promise.AllSetlttled Error") , 
] ).then((res) => console.log(res)) .catch((er) => console.log(er))




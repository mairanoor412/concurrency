// const promise = new Promise( (resolve , reject)=>{
//     resolve("succesfully done ")
// });
// promise.then( (value)=>{
//     console.log(value)
// })
// .catch( (error)=>{
//     console.log(error);
// })


function washing(){
    console.log("washing starting...");
    return new Promise( (res , rej)=>{
    setTimeout( ()=>{
        res("washing done")
    },5000)
    })
}

function soaking(){
    console.log("soaking starting...");
    return new Promise( (res , rej)=>{
    setTimeout( ()=>{
        res("soaking done")
    },3000)
    })
}

function drying(){
    console.log("drying starting...");
    return new Promise( (res , rej)=>{
    setTimeout( ()=>{
        res("drying done")
    },2000)
    })
}

washing()
.then( (value)=>{
    console.log(value);
    return soaking()
})
.then( (value)=>{
    console.log(value);
    return drying()
})
.then( (value)=>{
    console.log(value);
    
})
.catch( (error)=>{
    console.log(error);
})
.finally( ()=>{
    console.log("All work done");
})


// //example 1
// function parentFunction(func:()=>void){
// console.log("iam the parent function");
// func();
// }
// function childFunction(){
//     console.log("iam the child function");
// }
// parentFunction(childFunction)
// //example 2
// function processUserInput(callback:(name:string)=>void){
// let name="mahira"
// callback(name)
// }
// processUserInput(function(name:string){
//     console.log("Hello"+ " "+ name );
// })
// //setTimeout
// setTimeout(()=>{
//     console.log("hii");
// },2000)
//callback function
function washing(callback) {
    console.log("washing starting...");
    setTimeout(() => {
        console.log("washing done");
        callback();
    }, 5000);
}
function soaking(callback) {
    console.log("soaking starting...");
    setTimeout(() => {
        console.log("soaking done");
        callback();
    }, 3000);
}
function drying() {
    console.log("drying start...");
    setTimeout(() => {
        console.log("drying done");
    }, 2000);
}
console.log("folding laundry");
washing(() => {
    soaking(() => {
        drying();
    });
});
console.log("making biryani");
export {};

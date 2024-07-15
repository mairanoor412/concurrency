function washing() {
    console.log("washing starting...");
    return new Promise((res, rej) => {
        setTimeout(() => {
            res("washing done");
        }, 5000);
    });
}
function soaking() {
    console.log("soaking starting...");
    return new Promise((res, rej) => {
        setTimeout(() => {
            res("soaking done");
        }, 3000);
    });
}
function drying() {
    console.log("drying starting...");
    return new Promise((res, rej) => {
        setTimeout(() => {
            res("drying done");
        }, 2000);
    });
}
async function runWashingMachine() {
    try {
        const result1 = await washing();
        console.log(result1);
        const result2 = await soaking();
        console.log(result2);
        const result3 = await drying();
        console.log(result3);
    }
    catch (error) {
        console.log(error);
    }
    finally {
        console.log('I will always run');
    }
}
runWashingMachine();
export {};

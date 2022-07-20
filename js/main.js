import { sum, sum3 } from './lib/sum.js'

console.log(sum(1, 3));
console.log(sum3(1, 3, 3));

const timer = ms => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('ended!!');
            resolve()
        }, ms);
    })
}

new Promise( async()=>{
    for (let i = 0; i < 10; i++) {
        console.log(i);
        await timer(1000)
    }
})

for (let i = 0; i < 10; i++) {
    console.log(i);
    await timer(1000)
}

console.log("ループ終了");
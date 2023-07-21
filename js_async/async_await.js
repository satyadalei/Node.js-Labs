async function wishMe(params) {
    // let myPromise =  new Promise((resolve, reject) => {
    //     setTimeout(function() {
    //         console.log("I am 1st logedOut");
    //         resolve("Hello");
    //         // return "hello"
    //     },4000)
    // })
    let myPromise = await new Promise(function(resolve,reject) {
         setTimeout(function() {
         console.log("I am first to wish");
            resolve("Hi, I am Ok");
        }, 4000)
    })
    console.log("I am 2nd to wish");
}

wishMe();
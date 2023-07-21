function myDisplayer(something) {
    console.log("Something is loged here : -- " + something);
}

let myPromise = new Promise((resolve, reject) => {
    let x = 10 ;
    setTimeout(function() {
        if (x == 0) {
            resolve("OK Resolved");
        }else{
            reject("Something wrong");
        }
    },5000)
});
myPromise.then(function(value) {
    console.log(value);
},function(err) {
    console.log(err);
});



// basic syntax of a promise
// let myPromise = new Promise(function(resolve,reject) {
//     // the producing code (may take some time)
//     // some codes to be executed 


//     resolve(); // make run if successful
//     reject(); // make run if rejected
// });

// myPromise.then(function(value) {
//     // if everything is successfull
// }, function (err) {
//     // if error ocurs
// })
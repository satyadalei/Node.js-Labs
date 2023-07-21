
// asyncronous functions call back
function sum(num1,num2,showResult) {
    // do some calculations and then call the next function
    showResult(num1+num2);
}
function displayResult(sum){
   console.log("the sum is = " + sum);
}


let res = sum (6,8,displayResult);
// displayResult(res)

// calling two functions through calling only one
// function fn1(anotherFn) {
//     console.log("Hello I am function 1");
//     anotherFn();
// }
// function fn2() {
//     console.log("Hello I'm function 2");
// }



// fn1(fn2);






// you can first call then define your function later like in the bellow :-
// fn1();
// fn2();

// function fn1() {
//     console.log("Hello I am function 1");
// }
// function fn2() {
//     console.log("Hello I'm function 2");
// }
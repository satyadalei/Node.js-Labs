// how to sort an array of objects based on element properties
const array = [
    {
        name:"John",
        age:12
    },
    {
        name:"Steve",
        age:5
    },
    {
        name:"Andry",
        age: 16
    },
    {
        name :"Karl",
        age:24
    },
    {
        name:"Angel",
        age:10
    }
]
// goal is to sort array based on thier age in increaseing order -- example -->
// [
//     { name: 'Steve', age: 5 },
//     { name: 'Angel', age: 10 },
//     { name: 'John', age: 12 },
//     { name: 'Andry', age: 16 },
//     { name: 'Karl', age: 24 }
// ]
console.log(array);
// array.map((element,index)=>{
//     for (let i = index + 1; i < array.length; i++) {
//         if (element.age > array[i].age) {
//             // swap elemenets
//             array[index] = array[i];
//             array[i] = element;
//         }
//     }
// })
// --> there is problem editing current element in map method

// using for loop
// for (let i = 0; i < array.length; i++) {
//     for (let j = i+1; j < array.length; j++) {
//        if (array[i].age > array[j].age) {
//          let a = array[i];
//          array[i] = array[j];
//          array[j] = a;
//        }
//     }
// }
console.log(array);
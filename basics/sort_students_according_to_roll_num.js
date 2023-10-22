let sortedArray = [
    { rollNum: 5 },
    { rollNum: 8 },
    { rollNum: null }, 
    { rollNum: 1 },
    { rollNum: 8 },
    { rollNum: 2 },
    { rollNum: null }, 
    { rollNum: 3 },   
    { rollNum: 4 }, 
    { rollNum: null },
]
// out put most be like
// let sortedArray = [
//     { rollNum: 5 },
//     { rollNum: 8 },
//     { rollNum: 1 },
//     { rollNum: 8 },
//     { rollNum: 2 },
//     { rollNum: 3 },   
//     { rollNum: 4 }, 
//     { rollNum: null }, 
//     { rollNum: null }, 
//     { rollNum: null }
// ]
let start = 0;
let end = sortedArray.length - 1;
// separating null values & num valued students
console.log(sortedArray);
while (start < end) {

    if (sortedArray[start].rollNum === null) {
        while (start < end) {
            if (sortedArray[end].rollNum != null) {
                sortedArray[start] = sortedArray[end];
                sortedArray[end] = {rollNum : null};
                end--
                break;
            }else{
               end--
            }
        }
    }
    

    start++;
}
console.log(sortedArray);
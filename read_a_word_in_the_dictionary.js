let words = ["car", "book", "menu", "laptop", "hello"];
let foundOrnot;
//--------------Add new arrays or words to another array
function addNewWords(oldArray, newData) {
  // newArray or word
  let enteredDataType = typeof newData;
  if (enteredDataType === "String") {
    oldArray.push(newData);
  } else {
    oldArray.push.apply(oldArray, newData);
  }
}

function removeDuplicates(oldArray) {
    return oldArray.filter((item, index) => oldArray.indexOf(item) === index);
}
addNewWords(words, ["box", "venom", "venom", "venom"]);
//removeDuplicates(words);
console.log("\n Before filtering : \n" +words);
words = removeDuplicates(words) ;
console.log("\n After filtering \n"+  words);
// function isWordExist(word){
//   word = word.toLowerCase(); // converting a word into lowercase format
//   let foundStatus = false;
//         // ---------------- using no library function----------------------
//         //let arrayLength = words.length;
//         // Findinng word in the array
//         //   for (let i = 0; i < arrayLength; i++) {
//         //     if (words[i] === word ) {
//         //         foundStatus = true;
//         //         break;
//         //     }else if ( i === arrayLength-1 ) {
//         //         foundStatus = false;
//         //         break;
//         //     }
//         //   }
//         //----------------using library function ------------------------
//         foundStatus = words.includes(word)
//         return foundStatus;
// }
// foundOrnot = isWordExist("cab"); // return will be true or false
//  if (foundOrnot) {
//     console.log("The word exist");
//  }else{
//     console.log("The word does not exist");
//  }

//1: create a folder
//2: create a file in folder and add that to it
//3: Add more doata to the file at end
//4:read actual data
//5: rename the file name another file name
//6: delete the file and folder




const { log } = require("console");
const fs = require("fs");

//1: create folder
//fs.mkdirSync("Satya");

//2: create file and add text
//fs.writeFileSync("./selfrespect.txt","How staty focused??");

//3: add more data
//fs.appendFileSync("./selfrespect.txt","Hi content changed here!!!");

//4: read data
//var dataInFile = fs.readFileSync("./Satya/myname.txt").toString();
//console.log(dataInFile);

//5: rename a file name :
// fs.rename("./urname.txt","selfrespect.txt",(err)=>{
//     if (err) {
//         console.log(err);
//     }else{
//         console.log("\nRenamed successfully");
//     }
// })

//6. delete a file 
//fs.rmSync("./Satya");

//7. delete a folder.
//fs.rmdirSync("./Satya");
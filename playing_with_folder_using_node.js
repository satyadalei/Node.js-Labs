//1: create a folder
//2: create a file in folder and add that to it
//3: Add more doata to the file at end
//4:read actual data
//5: rename the file name another file name
//6: delete the file and folder




const fs = require("fs");

//1: create folder
//fs.mkdirSync("Satya");

//2: create file and add text
//fs.writeFileSync("./Satya/myname.txt","Hello There! My name is Satyanarayan Dalei")

//3: add more data
//fs.appendFileSync("./Satya/myname.txt","\nI hope you all will enjoy the content here..");

//4: read data
//var dataInFile = fs.readFileSync("./Satya/myname.txt").toString();
//console.log(dataInFile);

//5: rename a file name :
fs.rename("./satya/yourname.txt","urname.txt",(err)=>{
    if (err) {
        console.log(err);
    }else{
        console.log("\nRenamed successfully");
    }
})
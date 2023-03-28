const fs = require("fs");
//const fs = Noderequire("fs");  -->> This is wrong method 

// creating textfiles in the same folder
//fs.writeFileSync("readme.txt","Hello,it's nice to meet you!");
//fs.writeFileSync("read.txt","Hi there the previous data has been changed!!");

// you can not creat folder ---> only you can creat files, & can modify them..
//fs.writeFileSync("./textFiles/text1.txt","New text has been introduced here..");
var string = "My name is Shilla and shilla jabani..\nMne tujhpe marne lagi hnu...";
var name1 = "Satyanarayan";
var name2 = "Biswajit";
var name3 = "Akhilesh Yadab";
// you can add line breaks using "\n" ;
//fs.writeFileSync("read.txt", string + "\n" + name1 +"\n"+ name2+ "\n"+name3);

//You can also read data from a file too
var textData = fs.readFileSync("read.txt");
//console.log(textData.toString());

// reading data from a c++ file
var cppData = fs.readFileSync("find_maximum_number.cpp").toString();
console.log(cppData);
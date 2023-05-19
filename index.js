console.log("Hello World!");
console.log(module);
// module is an object that will print as  below
// {
//     id: '.',
//     path: 'D:\\Programing stuffs\\web development\\Node.js_ThapaTechnical',
//     exports: {},
//     filename: 'D:\\Programing stuffs\\web development\\Node.js_ThapaTechnical\\index.js',
//     loaded: false,
//     children: [],
//     paths: [
//       'D:\\Programing stuffs\\web development\\Node.js_ThapaTechnical\\node_modules',
//       'D:\\Programing stuffs\\web development\\node_modules',
//       'D:\\Programing stuffs\\node_modules',
//       'D:\\node_modules'
//     ]
//   }
//===== as module is an object it has properties -- one of them is export
const num = 5 ;
const name = "Satyanarayan";
// exports.num = num;
// exports.name = name;
console.log(module);

module.exports = {name,num};
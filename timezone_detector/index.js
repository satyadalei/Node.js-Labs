const moment = require('moment-timezone');
const timeZones = require("./timeZone")
// const fs = require("fs")

// console.log(timeZones);

// const timeZone = 'Asia/Bahrain';  
const timeZone = timeZones[timeZones.length - 1].regionTimeZones[timeZones[timeZones.length - 1].regionTimeZones.length - 1]; 
console.log("Total countries timezone added : " + timeZones.length); 
const currentTimeInTimeZone = moment().tz(timeZone).format();
console.log('Current time in', timeZone, ':', currentTimeInTimeZone);


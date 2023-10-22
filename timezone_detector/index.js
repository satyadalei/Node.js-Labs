const moment = require('moment-timezone');
const timeZones = require("./timeZone")
// const fs = require("fs")

// console.log(timeZones);

// const timeZone = 'Asia/Bahrain';  
const timeZone = timeZones[timeZones.length - 1].regionTimeZones[0];  
const currentTimeInTimeZone = moment().tz(timeZone).format();
console.log('Current time in', timeZone, ':', currentTimeInTimeZone);

